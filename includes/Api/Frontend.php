<?php
namespace Epp\Api;

use WP_REST_Controller;

/**
 * REST_API Handler for the Plugin Frontend
 */
class Frontend extends WP_REST_Controller {

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
        if ( !class_exists( __NAMESPACE__ . '\AutoFiller'  ) ) {
            require_once __DIR__ . '/AutoFiller.php';
        }
    }

    /**
     * Register the routes
     *
     * @return void
     */
    public function register_routes() {

        register_rest_route($this->namespace, '/all', array(
            'methods' => \WP_REST_Server::READABLE,
            'callback' => array( $this, 'handle_get_all'),
            'permission_callback' => array( $this, 'check_permission')
        ));
    
        register_rest_route($this->namespace, '/headers', array(
            'methods' => \WP_REST_Server::READABLE,
            'callback' => array( $this, 'handle_get_all_headers'),
            'permission_callback' => array( $this, 'check_permission')
        ));
    
        register_rest_route($this->namespace, '/header-groups', array(
            'methods' => \WP_REST_Server::READABLE,
            'callback' => array( $this, 'handle_get_all_header_groups'),
            'permission_callback' => array( $this, 'check_permission')
        ));
    
        register_rest_route($this->namespace, '/header-footnotes', array(
            'methods' => \WP_REST_Server::READABLE,
            'callback' => array( $this, 'handle_get_all_header_footnotes'),
            'permission_callback' => array( $this, 'check_permission')
        ));
    
        register_rest_route($this->namespace, '/events', array(
            'methods' => \WP_REST_Server::READABLE,
            'callback' => array( $this, 'handle_get_all_events'),
            'permission_callback' => array( $this, 'check_permission')
        ));
    
        register_rest_route($this->namespace, '/config', array(
            'methods' => \WP_REST_Server::READABLE,
            'callback' => array( $this, 'handle_get_config'),
            'permission_callback' => array( $this, 'check_permission')
        ));
    
        register_rest_route($this->namespace, '/add-event', array(
            'methods' => \WP_REST_Server::CREATABLE,
            'callback' => array( $this, 'handle_add_event'),
            'permission_callback' => array( $this, 'check_permission')
        ));
    
        register_rest_route($this->namespace, '/update-event', array(
            'methods' => \WP_REST_Server::CREATABLE,
            'callback' => array( $this, 'handle_update_event'),
            'permission_callback' => array( $this, 'check_permission')
        ));
    
        register_rest_route($this->namespace, '/delete-event', array(
            'methods' => \WP_REST_Server::DELETABLE,
            'callback' => array( $this, 'handle_delete_event'),
            'permission_callback' => array( $this, 'check_admin')
        ));
    }

    /****************************************************************************************
     * API ACCESS PERMISSION CHECKS
     ****************************************************************************************/
    public function check_permission() {
        return current_user_can( 'read' );
    }
    
    public function check_admin() {
        return current_user_can('administrator');
    }
    
    /****************************************************************************************
     * DATA PROCESSING METHODS
     ****************************************************************************************/
    public function handle_get_all() {
        $data = array();
        $data["headers"] = $this->handle_get_all_headers();
        $data["header_groups"] = $this->handle_get_all_header_groups();
        $data["header_footnotes"] = $this->handle_get_all_header_footnotes();
        $data["events"] = $this->handle_get_all_events();
        $data["config"] = $this->handle_get_config();
        return $data;
    }
    
    public function handle_get_all_headers()
    {
        $db = new DatabaseActions();
        return $db->getAllHeaders();
    }
    
    public function handle_get_all_header_groups()
    {
        $db = new DatabaseActions();
        return $db->getAllHeaderGroups();
    }
    
    public function handle_get_all_header_footnotes()
    {
        $db = new DatabaseActions();
        return $db->getAllHeaderFootnotes();
    }
    
    
    public function handle_get_all_events()
    {
        $db = new DatabaseActions();

        $useAutofill = $db->getConfigValue($db->use_autofill);
        if ($useAutofill === "1") {
            $autoFiller = new AutoFiller();
            $autoFiller->autoFill();
        }
    
        return $db->getAllEvents();
    }
    
    public function handle_get_config()
    {
        $db = new DatabaseActions();
        return $db->getConfig();
    }
    
    
    public function handle_add_event($data)
    {
        $parameters = $data->get_params();
        if ($parameters["date"]) {
            $db = new DatabaseActions();
            return $db->addEventByDate($parameters["date"]);
        }
        return array("error" => "Bitte geben Sie ein Datum an!");
    }
    
    public function handle_update_event($data)
    {
        $parameters = $data->get_params();
        if ($parameters["event_id"] && $parameters["header_id"] && $parameters["content"]) {
            $db = new DatabaseActions();
            return $db->updateEvent($parameters);
        }
        return array("error" => "Es fehlen Werte, um die Änderungen am Event erfolgreich zu speichern");
    }
    
    public function handle_delete_event($data) {
        $parameters = $data->get_params();
        if ($parameters["event_id"]) {
            $db = new DatabaseActions();
            return $db->deleteEvent($parameters["event_id"]);
        }
        return array("error" => "Es fehlt eine ID, um eine Veranstaltung zu löschen");
    }
}
