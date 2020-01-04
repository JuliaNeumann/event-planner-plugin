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
    public function handle_update_header($data) {
        $parameters = $data->get_params();
        if ($parameters["id"]) {
            $db = new DatabaseActions();
            return $db->updateHeader($parameters);
        }
        return array("error" => "Es fehlt eine ID, um einen Header zu bearbeiten.");
    }

    public function handle_delete_header($data) {
        $parameters = $data->get_params();
        if ($parameters["id"]) {
            $db = new DatabaseActions();
            return $db->deleteHeader($parameters["id"]);
        }
        return array("error" => "Es fehlt eine ID, um eine Veranstaltung zu löschen");
    }
}
