<?php
namespace Epp\Api;

use WP_REST_Controller;

/**
 * REST_API Handler for the Plugin Backend
 */
class Admin extends WP_REST_Controller {

    /**
     * [__construct description]
     */
    public function __construct() {
        $this->includes();
        $this->namespace = 'event-planner/v1';
    }

    /**
     * Include the necessary classes
     *
     * @return void
     */
    private function includes() {
        if ( !class_exists( __NAMESPACE__ . '\DatabaseActions'  ) ) {
            require_once __DIR__ . '/DatabaseActions.php';
        }
    }

    /**
     * Register the routes
     *
     * @return void
     */
    public function register_routes() {
        register_rest_route($this->namespace, '/add-header', array(
            'methods' => \WP_REST_Server::CREATABLE,
            'callback' => array( $this, 'handle_add_header'),
            'permission_callback' => array( $this, 'check_admin')
        ));

        register_rest_route($this->namespace, '/update-header', array(
            'methods' => \WP_REST_Server::CREATABLE,
            'callback' => array( $this, 'handle_update_header'),
            'permission_callback' => array( $this, 'check_admin')
        ));

        register_rest_route($this->namespace, '/delete-header', array(
            'methods' => \WP_REST_Server::DELETABLE,
            'callback' => array( $this, 'handle_delete_header'),
            'permission_callback' => array( $this, 'check_admin')
        ));

        register_rest_route($this->namespace, '/update-header-group', array(
            'methods' => \WP_REST_Server::CREATABLE,
            'callback' => array( $this, 'handle_update_header_group'),
            'permission_callback' => array( $this, 'check_admin')
        ));

        register_rest_route($this->namespace, '/add-header-group', array(
            'methods' => \WP_REST_Server::CREATABLE,
            'callback' => array( $this, 'handle_add_header_group'),
            'permission_callback' => array( $this, 'check_admin')
        ));

        register_rest_route($this->namespace, '/delete-header-group', array(
            'methods' => \WP_REST_Server::DELETABLE,
            'callback' => array( $this, 'handle_delete_header_group'),
            'permission_callback' => array( $this, 'check_admin')
        ));

        register_rest_route($this->namespace, '/update-header-footnote', array(
            'methods' => \WP_REST_Server::CREATABLE,
            'callback' => array( $this, 'handle_update_header_footnote'),
            'permission_callback' => array( $this, 'check_admin')
        ));

        register_rest_route($this->namespace, '/add-header-footnote', array(
            'methods' => \WP_REST_Server::CREATABLE,
            'callback' => array( $this, 'handle_add_header_footnote'),
            'permission_callback' => array( $this, 'check_admin')
        ));

        register_rest_route($this->namespace, '/delete-header-footnote', array(
            'methods' => \WP_REST_Server::DELETABLE,
            'callback' => array( $this, 'handle_delete_header_footnote'),
            'permission_callback' => array( $this, 'check_admin')
        ));
    }

    /****************************************************************************************
     * API ACCESS PERMISSION CHECKS
     ****************************************************************************************/
    public function check_admin() {
        return current_user_can('administrator');
    }
    
    /****************************************************************************************
     * DATA PROCESSING METHODS
     ****************************************************************************************/
    public function handle_add_header($data) {
        $parameters = $data->get_params();
        if ($parameters["name"] && $parameters["type"] && $parameters["order_id"]) {
            $db = new DatabaseActions();
            return $db->addHeader($parameters);
        }
        return array("error" => "Bitte geben Sie mindestens den Namen, den Type und die Reihenfolge für den Tabellenkopf an!");
    }
    
    public function handle_update_header($data) {
        $parameters = $data->get_params();
        if ($parameters["id"]) {
            $db = new DatabaseActions();
            return $db->updateHeader($parameters);
        }
        return array("error" => "Es fehlt eine ID, um einen Tabellenkopf zu bearbeiten.");
    }

    public function handle_delete_header($data) {
        $parameters = $data->get_params();
        if ($parameters["id"]) {
            $db = new DatabaseActions();
            return $db->deleteHeader($parameters["id"]);
        }
        return array("error" => "Es fehlt eine ID, um einen Tabellenkopf zu löschen");
    }

    public function handle_add_header_group($data) {
        $parameters = $data->get_params();
        if ($parameters["name"]) {
            $db = new DatabaseActions();
            return $db->addHeaderGroup($parameters);
        }
        return array("error" => "Bitte geben Sie mindestens den Namen für die Tabellengruppe an!");
    }

    public function handle_delete_header_group($data) {
        $parameters = $data->get_params();
        if ($parameters["id"]) {
            $db = new DatabaseActions();
            return $db->deleteHeaderGroup($parameters["id"]);
        }
        return array("error" => "Es fehlt eine ID, um eine Tabellengruppe zu löschen");
    }

    public function handle_update_header_group($data) {
        $parameters = $data->get_params();
        if ($parameters["id"] && $parameters["name"]) {
            $db = new DatabaseActions();
            return $db->updateHeaderGroup($parameters);
        }
        return array("error" => "Es fehlt eine ID oder ein Name, um eine Tabellengruppe zu bearbeiten.");
    }

    public function handle_add_header_footnote($data) {
        $parameters = $data->get_params();
        if ($parameters["text"] && $parameters["header_id"]) {
            $db = new DatabaseActions();
            return $db->addHeaderFootnote($parameters);
        }
        return array("error" => "Bitte geben Sie mindestens den Text und die Tabellenkopf-ID für die Fußnote an!");
    }
    
    public function handle_update_header_footnote($data) {
        $parameters = $data->get_params();
        if ($parameters["id"]) {
            $db = new DatabaseActions();
            return $db->updateHeaderFootnote($parameters);
        }
        return array("error" => "Es fehlt eine ID, um eine Fußnote zu bearbeiten.");
    }

    public function handle_delete_header_footnote($data) {
        $parameters = $data->get_params();
        if ($parameters["id"]) {
            $db = new DatabaseActions();
            return $db->deleteHeaderFootnote($parameters["id"]);
        }
        return array("error" => "Es fehlt eine ID, um eine Fußnote zu löschen");
    }
}
