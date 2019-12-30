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
        $this->config_header_for_widget = "header_for_widget";
    }

    /******************************************************************************************************************
     * Config
     *****************************************************************************************************************/

    public function getConfig() {
        global $wpdb;

        $query = "SELECT * FROM `wp_epp_config`";
        $list = $wpdb->get_results($query);
        return $list;
    }

    public function getConfigValue($name) {
        global $wpdb;

        $select_query = "SELECT * FROM `wp_epp_config` WHERE name = '%s'";
        $result = $wpdb->get_results($wpdb->prepare($select_query, $name));
        if (count($result) == 1) {
            return $result[0]->data;
        }
        return null;
    }

    public function updateConfig($name, $newData) {
        global $wpdb;

        $select_query = "SELECT * FROM `wp_epp_config` WHERE name = '%s'";
        $result = $wpdb->get_results($wpdb->prepare($select_query, $name));

        if (count($result) == 1) {
            $update_query = "UPDATE `wp_epp_config` SET data = '%s' WHERE name = '%s'";
            $wpdb->get_results($wpdb->prepare($update_query, $newData, $name));

            if ($wpdb->last_error) {
                trigger_error("Error while updating config for name: " . $wpdb->last_error);
            }
            return;
        }
        trigger_error("No config entry found for given name: " . $name);
    }

    /******************************************************************************************************************
     * Events
     *****************************************************************************************************************/

    public function getAllEvents() {
        global $wpdb;

        $query = "SELECT * FROM `wp_epp_events`";
        $list = $wpdb->get_results($query);
        $full_list = [];
        foreach ($list as $event) {
            $full_list[] = array('id' => $event->id, 'fields' => []);
            $event2headers_query = "SELECT * FROM `wp_epp_events2headers` WHERE event_id = " . $event->id;
            $event2headers_list = $wpdb->get_results($event2headers_query);
            foreach ($event2headers_list as $lookup) {
                $full_list[count($full_list) - 1]['fields'][$lookup->header_id] = $lookup->content;
            }
        }
        return $full_list;
    }

    public function getEventInfoByDateAndHeader($date, $headerId) {
        global $wpdb;

        $date_query = "SELECT * FROM `wp_epp_events2headers` WHERE header_id = 1 AND content = '%s'";
        $result_date = $wpdb->get_results($wpdb->prepare($date_query, $date));

        if (count($result_date) > 0) {
            $event_query = "SELECT * FROM `wp_epp_events2headers` WHERE event_id = %s AND header_id = %s";
            $result_event = $wpdb->get_results($wpdb->prepare($event_query, $result_date[0]->event_id, $headerId));
            if (count($result_event) > 0) {
                return $result_event[0]->content;
            }
        }
    }

    public function addEventByDate($date) {
        global $wpdb;

        if ($this->checkIfDateExists($date)) {
            return array("error" => "Zu diesem Datum existiert bereits ein Eintrag!");
        }
        $query = "INSERT INTO `wp_epp_events` (id) values (null)";
        $wpdb->get_results($query);
        $id_query = "SELECT LAST_INSERT_ID()";
        $id_result = $wpdb->get_results($id_query);
        if (count($id_result) == 1 && property_exists($id_result[0], "LAST_INSERT_ID()")) {
            $new_id = $id_result[0]->{"LAST_INSERT_ID()"};
            $date_query = "INSERT INTO `wp_epp_events2headers` (header_id, event_id, content) values(1, %s, %s)";
            $wpdb->get_results($wpdb->prepare($date_query, $new_id, $date));
            if ($wpdb->last_error) {
                return array("error" => $wpdb->last_error);
            }
            return array("success" => "Eintrag erfolgreich angelegt!");
        };
        return array("error" => "Datenbank-Fehler: Eintrag konnte nicht angelegt werden!");
    }

    private function checkIfDateExists($date) {
        global $wpdb;
        $date_query = "SELECT * FROM `wp_epp_events2headers` WHERE header_id = 1 AND content = '%s'";
        $result_list = $wpdb->get_results($wpdb->prepare($date_query, $date));
        return count($result_list) > 0;
    }

    public function updateEvent($parameters) {
        global $wpdb;

        $query = "INSERT INTO `wp_epp_events2headers` (header_id, event_id, content) values(%s, %s, %s)
                  ON DUPLICATE KEY UPDATE content = %s";
        $wpdb->get_results($wpdb->prepare($query, $parameters["header_id"], $parameters["event_id"], $parameters["content"], $parameters["content"]));
        if ($wpdb->last_error) {
            return array("error" => $wpdb->last_error);
        }
        return array("success" => "Änderungen gespeichert!");
    }

    public function deleteEvent($id) {
        global $wpdb;
        $event_delete = $wpdb->delete( 'wp_epp_events', array( 'id' => $id ) );
        if ($event_delete !== false) {
            $lookup_delete = $wpdb->delete( 'wp_epp_events2headers', array( 'event_id' => $id ) );
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

    public function getAllHeaders()
    {
        global $wpdb;
        $query = "SELECT * FROM `wp_epp_headers`";
        $list = $wpdb->get_results($query);
        return $list;
    }

    public function getAllHeaderGroups()
    {
        global $wpdb;
        $query = "SELECT * FROM `wp_epp_header_groups`";
        $list = $wpdb->get_results($query);
        return $list;
    }

    public function getAllHeaderFootnotes()
    {
        global $wpdb;
        $query = "SELECT * FROM `wp_epp_header_footnotes`";
        $list = $wpdb->get_results($query);
        return $list;
    }

    public function getHeaderById($id)
    {
        global $wpdb;
        $query = "SELECT * FROM `wp_epp_headers` WHERE id = '%s'";
        $result_list = $wpdb->get_results($wpdb->prepare($query, $id));
        if (count($result_list) > 0) {
            return $result_list[0];
        }
    }
}
