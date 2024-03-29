<?php
namespace Epp\Api;

// exit if accessed directly
if (!defined('ABSPATH'))
    exit;

class DatabaseActions {

    /**
     * [__construct description]
     */
    public function __construct() {
        $this->config_last_filled_year = "last_filled_year";
        $this->config_autofill_weekday = "autofill_weekday";
        $this->config_autofill_time = "autofill_time";
        $this->config_header_for_widget = "header_for_widget";
        $this->config_icon_for_cancel = "icon_for_cancel";
        $this->config_teaser_main_text = "teaser_main_text";
        $this->config_teaser_cancel_text = "teaser_cancel_text";
        $this->config_teaser_show_icons = "teaser_show_icons";
        $this->config_teaser_icons_headline = "teaser_icons_headline";
        $this->config_use_autofill = "use_autofill";
        $this->config_use_fontawesome = "use_fontawesome";
    }

    /******************************************************************************************************************
     * Config
     *****************************************************************************************************************/

    public function getConfig() {
        global $wpdb;

        $table_name = $wpdb->prefix . 'epp_config';
        $query = "SELECT * FROM $table_name";
        $list = $wpdb->get_results($query);
        return $list;
    }

    public function getConfigValue($name) {
        global $wpdb;

        $table_name = $wpdb->prefix . 'epp_config';
        $select_query = "SELECT * FROM $table_name WHERE name = '%s'";
        $result = $wpdb->get_results($wpdb->prepare($select_query, $name));
        if (count($result) == 1) {
            return $result[0]->data;
        }
        return null;
    }

    public function updateConfig($name, $newData) {
        global $wpdb;

        $table_name = $wpdb->prefix . 'epp_config';
        $select_query = "SELECT * FROM $table_name WHERE name = '%s'";
        $result = $wpdb->get_results($wpdb->prepare($select_query, $name));

        if (count($result) == 1) {
            $result = $wpdb->update($table_name, array(
                'data' => wp_filter_post_kses($newData)
            ), array('name' => $name));

            if ($wpdb->last_error) {
                trigger_error("Error while updating config for name: " . $wpdb->last_error);
            }
            return true;
        }
        trigger_error("No config entry found for given name: " . $name);
    }

    /******************************************************************************************************************
     * Events
     *****************************************************************************************************************/

    public function getAllEvents() {
        global $wpdb;

        $table_name = $wpdb->prefix . 'epp_events';
        $query = "SELECT * FROM $table_name";
        $list = $wpdb->get_results($query);
        $full_list = [];
        $table_name_headers = $wpdb->prefix . 'epp_events2headers';
        foreach ($list as $event) {
            $full_list[] = array('id' => $event->id, 'fields' => []);
            $event2headers_query = "SELECT * FROM $table_name_headers WHERE event_id = " . $event->id;
            $event2headers_list = $wpdb->get_results($event2headers_query);
            foreach ($event2headers_list as $lookup) {
                $full_list[count($full_list) - 1]['fields'][$lookup->header_id] = $lookup->content;
            }
        }
        return $full_list;
    }

    public function getEventInfoByDateAndHeader($date, $headerId) {
        global $wpdb;

        $table_name = $wpdb->prefix . 'epp_events2headers';
        $date_query = "SELECT * FROM $table_name WHERE header_id = 1 AND content = '%s'";
        $result_date = $wpdb->get_results($wpdb->prepare($date_query, $date));

        if (count($result_date) > 0) {
            $event_query = "SELECT * FROM $table_name WHERE event_id = %s AND header_id = %s";
            $result_event = $wpdb->get_results($wpdb->prepare($event_query, $result_date[0]->event_id, $headerId));
            if (count($result_event) > 0) {
                return $result_event[0]->content;
            }
        }
    }

    public function addEventByDate($date, $time) {
        global $wpdb;

        if ($this->checkIfDateExists($date)) {
            return array("error" => "Zu diesem Datum existiert bereits ein Eintrag!");
        }
        
        $table_name = $wpdb->prefix . 'epp_events';
        $table_name_headers = $wpdb->prefix . 'epp_events2headers';
        $query = "INSERT INTO $table_name (id) values (null)";
        $wpdb->get_results($query);
        $id_query = "SELECT LAST_INSERT_ID()";
        $id_result = $wpdb->get_results($id_query);
        if (count($id_result) == 1 && property_exists($id_result[0], "LAST_INSERT_ID()")) {
            $new_id = $id_result[0]->{"LAST_INSERT_ID()"};
            $date_query = "INSERT INTO $table_name_headers (header_id, event_id, content) values(1, %s, %s)";
            $wpdb->get_results($wpdb->prepare($date_query, $new_id, $date));
            $time_query = "INSERT INTO $table_name_headers (header_id, event_id, content) values(2, %s, %s)";
            $wpdb->get_results($wpdb->prepare($time_query, $new_id, $time));
            if ($wpdb->last_error) {
                return array("error" => $wpdb->last_error);
            }
            return array("success" => "Eintrag erfolgreich angelegt!");
        };
        return array("error" => "Datenbank-Fehler: Eintrag konnte nicht angelegt werden!");
    }

    private function checkIfDateExists($date) {
        global $wpdb;

        $table_name = $wpdb->prefix . 'epp_events2headers';
        $date_query = "SELECT * FROM $table_name WHERE header_id = 1 AND content = '%s'";
        $result_list = $wpdb->get_results($wpdb->prepare($date_query, $date));
        return count($result_list) > 0;
    }

    public function updateEvent($parameters) {
        global $wpdb;

        $table_name = $wpdb->prefix . 'epp_events2headers';
        $query = "INSERT INTO $table_name (header_id, event_id, content) values(%s, %s, %s)
                  ON DUPLICATE KEY UPDATE content = %s";
        $wpdb->get_results($wpdb->prepare($query, $parameters["header_id"], $parameters["event_id"], $parameters["content"], $parameters["content"]));
        if ($wpdb->last_error) {
            return array("error" => $wpdb->last_error);
        }
        return array("success" => "Änderungen gespeichert!");
    }

    public function deleteEvent($id) {
        global $wpdb;

        $table_name = $wpdb->prefix . 'epp_events';
        $table_name_headers = $wpdb->prefix . 'epp_events2headers';
        $event_delete = $wpdb->delete( $table_name, array( 'id' => $id ) );
        if ($event_delete !== false) {
            $lookup_delete = $wpdb->delete( $table_name_headers, array( 'event_id' => $id ) );
            if ($lookup_delete !== false) {
                return array("success" => "Der Eintrag wurde gelöscht!");
            }
        }
        if ($wpdb->last_error) {
            return array("error" => $wpdb->last_error);
        }
        return array("error" => "Datenbank-Fehler: Eintrag konnte nicht gelöscht werden!");
    }

    /******************************************************************************************************************
     * Headers
     *****************************************************************************************************************/

    public function getAllHeaders() {
        global $wpdb;

        $table_name = $wpdb->prefix . 'epp_headers';
        $query = "SELECT * FROM $table_name";
        $list = $wpdb->get_results($query);
        return $list;
    }

    public function getHeaderById($id) {
        global $wpdb;

        $table_name = $wpdb->prefix . 'epp_headers';
        $query = "SELECT * FROM $table_name WHERE id = '%s'";
        $result_list = $wpdb->get_results($wpdb->prepare($query, $id));
        if (count($result_list) > 0) {
            return $result_list[0];
        }
    }

    public function addHeader($parameters) {
        global $wpdb;

        $table_name = $wpdb->prefix . 'epp_headers';
        $result = $wpdb->insert($table_name, array(
            'name' => $parameters["name"],
            'order_id' => $parameters["order_id"],
            'type' => $parameters["type"],
            'description' => $parameters["description"],
            'additional' => $parameters["additional"]
        ));

        if ($wpdb->last_error) {
            return array("error" => $wpdb->last_error);
        }
        return array("success" => "Neuer Header gespeichert!", "result" => $result);
    }

    public function updateHeader($parameters) {
        global $wpdb;

        $table_name = $wpdb->prefix . 'epp_headers';
        $result = $wpdb->update($table_name, array(
            'name' => $parameters["name"],
            'order_id' => $parameters["order_id"],
            'type' => $parameters["type"],
            'description' => $parameters["description"],
            'additional' => $parameters["additional"]
        ), array('id' => $parameters["id"]));

        if ($wpdb->last_error) {
            return array("error" => $wpdb->last_error);
        }
        return array("success" => "Änderungen gespeichert!", "result" => $result);
    }

    public function deleteHeader($id) {
        global $wpdb;

        $table_name = $wpdb->prefix . 'epp_headers';
        $table_name_headers = $wpdb->prefix . 'epp_events2headers';
        $header_delete = $wpdb->delete( $table_name, array( 'id' => $id ) );
        if ($header_delete !== false) {
            $lookup_delete = $wpdb->delete( $table_name_headers, array( 'header_id' => $id ) );
            if ($lookup_delete !== false) {
                return array("success" => "Der Header und zugehörige Daten wurden gelöscht!");
            }
        }
        if ($wpdb->last_error) {
            return array("error" => $wpdb->last_error);
        }
        return array("error" => "Datenbank-Fehler: Header konnte nicht gelöscht werden!");
    }

    /******************************************************************************************************************
     * Header Groups
     *****************************************************************************************************************/

    public function getAllHeaderGroups() {
        global $wpdb;

        $table_name = $wpdb->prefix . 'epp_header_groups';
        $query = "SELECT * FROM $table_name";
        $list = $wpdb->get_results($query);
        return $list;
    }

    public function addHeaderGroup($parameters) {
        global $wpdb;

        $table_name = $wpdb->prefix . 'epp_header_groups';
        $result = $wpdb->insert($table_name, array(
            'name' => $parameters["name"]
        ));

        if ($wpdb->last_error) {
            return array("error" => $wpdb->last_error);
        }
        return array("success" => "Neue Tabellengruppe gespeichert!", "result" => $result);
    }

    public function updateHeaderGroup($parameters) {
        global $wpdb;

        $table_name = $wpdb->prefix . 'epp_header_groups';
        $table_name_headers = $wpdb->prefix . 'epp_headers';
        $result = $wpdb->update($table_name, array(
            'name' => $parameters["name"]
        ), array('id' => $parameters["id"]));

        if (!$wpdb->last_error && $parameters["added"]) {
            foreach ($parameters["added"] as $addedId) {
                $wpdb->update($table_name_headers, array(
                    'group_id' => $parameters["id"]
                ), array('id' => $addedId));
            }
        }

        if (!$wpdb->last_error && $parameters["deleted"]) {
            foreach ($parameters["deleted"] as $deletedId) {
                $wpdb->update($table_name_headers, array(
                    'group_id' => null
                ), array('id' => $deletedId));
            }
        }

        if ($wpdb->last_error) {
            return array("error" => $wpdb->last_error);
        }
        return array("success" => "Änderungen gespeichert!", "result" => $result);
    }

    public function deleteHeaderGroup($id) {
        global $wpdb;

        $table_name = $wpdb->prefix . 'epp_header_groups';
        $table_name_headers = $wpdb->prefix . 'epp_headers';
        $header_delete = $wpdb->delete( $table_name, array( 'id' => $id ) );
        if ($header_delete === false) {
            return array("error" => "Datenbank-Fehler: Tabellengruppe konnte nicht gelöscht werden!");
        }
        $result = $wpdb->update($table_name_headers, array(
            'group_id' => null
        ), array('group_id' => $id));
        if ($wpdb->last_error) {
            return array("error" => $wpdb->last_error);
        }
        return array("success" => "Tabellengruppe gelöscht!", "result" => $result);
    }

    /******************************************************************************************************************
     * Footnotes
     *****************************************************************************************************************/

    public function getAllHeaderFootnotes() {
        global $wpdb;

        $table_name = $wpdb->prefix . 'epp_header_footnotes';
        $query = "SELECT * FROM $table_name";
        $list = $wpdb->get_results($query);
        return $list;
    }

    public function addHeaderFootnote($parameters) {
        global $wpdb;

        $table_name = $wpdb->prefix . 'epp_header_footnotes';
        $result = $wpdb->insert($table_name, array(
            'text' => $parameters["text"],
            'header_id' => $parameters["header_id"]
        ));

        if ($wpdb->last_error) {
            return array("error" => $wpdb->last_error);
        }
        return array("success" => "Neue Fußnote gespeichert!", "result" => $result);
    }

    public function updateHeaderFootnote($parameters) {
        global $wpdb;  

        $table_name = $wpdb->prefix . 'epp_header_footnotes';
        $result = $wpdb->update($table_name, array(
            'text' => $parameters["text"],
            'header_id' => $parameters["header_id"]
        ), array('id' => $parameters["id"]));

        if ($wpdb->last_error) {
            return array("error" => $wpdb->last_error);
        }
        return array("success" => "Änderungen gespeichert!", "result" => $result);
    }

    public function deleteHeaderFootnote($id) {
        global $wpdb;

        $table_name = $wpdb->prefix . 'epp_header_footnotes';
        $result = $wpdb->delete( $table_name, array( 'id' => $id ) );
        if ($wpdb->last_error) {
            return array("error" => $wpdb->last_error);
        }
        return array("success" => "Fußnote gelöscht!", "result" => $result);
    }
}
