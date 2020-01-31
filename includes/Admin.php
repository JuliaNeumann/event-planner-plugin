<?php
namespace Epp;

/**
 * Admin Pages Handler
 */
class Admin {

    public function __construct() {
        $this->includes();
        add_action( 'admin_menu', [ $this, 'admin_menu' ] );
    }

    /**
     * Include the necessary classes
     *
     * @return void
     */
    private function includes() {
        if ( !class_exists( __NAMESPACE__ . '\Api\DatabaseActions'  ) ) {
            require_once __DIR__ . '/Api/DatabaseActions.php';
        }
    }

    /**
     * Register our menu page
     *
     * @return void
     */
    public function admin_menu() {
        global $submenu;

        $capability = 'manage_options';
        $slug       = 'vue-app';

        $hook = add_menu_page( __( 'Event Planner', 'textdomain' ), __( 'Event Planner', 'textdomain' ), $capability, $slug, [ $this, 'plugin_page' ], 'dashicons-text' );

        if ( current_user_can( $capability ) ) {
            $submenu[ $slug ][] = array( __( 'Allgemeines', 'textdomain' ), $capability, 'admin.php?page=' . $slug . '#/' );
            $submenu[ $slug ][] = array( __( 'Tabellenköpfe', 'textdomain' ), $capability, 'admin.php?page=' . $slug . '#/table-headers' );
            $submenu[ $slug ][] = array( __( 'Tabellengruppen', 'textdomain' ), $capability, 'admin.php?page=' . $slug . '#/table-groups' );
            $submenu[ $slug ][] = array( __( 'Fußnoten', 'textdomain' ), $capability, 'admin.php?page=' . $slug . '#/footnotes' );
            $submenu[ $slug ][] = array( __( 'Teaser', 'textdomain' ), $capability, 'admin.php?page=' . $slug . '#/teaser' );
        }

        add_action( 'load-' . $hook, [ $this, 'init_hooks'] );
    }

    /**
     * Initialize our hooks for the admin page
     *
     * @return void
     */
    public function init_hooks() {
        wp_enqueue_editor();
        if ( ! class_exists( '_WP_Editors', false ) ) {
            require( ABSPATH . WPINC . '/class-wp-editor.php' );
        }
        add_action( 'admin_print_footer_scripts', array( '_WP_Editors', 'print_default_editor_scripts' ) );
        add_action( 'admin_enqueue_scripts', [ $this, 'enqueue_scripts' ] );
    }

    /**
     * Load scripts and styles for the app
     *
     * @return void
     */
    public function enqueue_scripts() {
        wp_enqueue_style( 'eventplanner-admin' );
        wp_enqueue_script( 'eventplanner-admin' );

        $db = new Api\DatabaseActions();
        $useFontawesome = $db->getConfigValue($db->config_use_fontawesome) === '1';
        if ($useFontawesome) {
            wp_enqueue_style( 'eventplanner-fa' );
        }

        // localize data for script
        wp_localize_script( 'eventplanner-admin', 'eventPlannerApp', array(
            'rest_url' => esc_url_raw( rest_url() ),
            'nonce' => wp_create_nonce( 'wp_rest' ),
            'admin' => current_user_can('administrator')
        ));
    }

    /**
     * Render our admin page
     *
     * @return void
     */
    public function plugin_page() {
        echo '<div class="wrap"><div id="vue-admin-app"></div></div>';
    }
}
