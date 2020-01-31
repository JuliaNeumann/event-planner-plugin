<?php
namespace Epp;

/**
 * Scripts and Styles Class
 */
class Assets {

    function __construct() {

        if ( is_admin() ) {
            add_action( 'admin_enqueue_scripts', [ $this, 'register' ], 5 );
        } else {
            add_action( 'wp_enqueue_scripts', [ $this, 'register' ], 5 );
        }
    }

    /**
     * Register our app scripts and styles
     *
     * @return void
     */
    public function register() {
        $this->register_scripts( $this->get_scripts() );
        $this->register_styles( $this->get_styles() );
    }

    /**
     * Register scripts
     *
     * @param  array $scripts
     *
     * @return void
     */
    private function register_scripts( $scripts ) {
        foreach ( $scripts as $handle => $script ) {
            $deps      = isset( $script['deps'] ) ? $script['deps'] : false;
            $in_footer = isset( $script['in_footer'] ) ? $script['in_footer'] : false;
            $version   = isset( $script['version'] ) ? $script['version'] : EVENTPLANNER_VERSION;

            wp_register_script( $handle, $script['src'], $deps, $version, $in_footer );
        }
    }

    /**
     * Register styles
     *
     * @param  array $styles
     *
     * @return void
     */
    public function register_styles( $styles ) {
        foreach ( $styles as $handle => $style ) {
            $deps = isset( $style['deps'] ) ? $style['deps'] : false;

            wp_register_style( $handle, $style['src'], $deps, EVENTPLANNER_VERSION );
        }
    }

    /**
     * Get all registered scripts
     *
     * @return array
     */
    public function get_scripts() {
        $prefix = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '.min' : '';

        $scripts = [
            'eventplanner-runtime' => [
                'src'       => EVENTPLANNER_ASSETS . '/js/runtime.js',
                'version'   => filemtime( EVENTPLANNER_PATH . '/assets/js/runtime.js' ),
                'in_footer' => true
            ],
            'eventplanner-vendor' => [
                'src'       => EVENTPLANNER_ASSETS . '/js/vendors.js',
                'version'   => filemtime( EVENTPLANNER_PATH . '/assets/js/vendors.js' ),
                'in_footer' => true
            ],
            'eventplanner-frontend' => [
                'src'       => EVENTPLANNER_ASSETS . '/js/frontend.js',
                'deps'      => [ 'jquery', 'eventplanner-vendor', 'eventplanner-runtime' ],
                'version'   => filemtime( EVENTPLANNER_PATH . '/assets/js/frontend.js' ),
                'in_footer' => true
            ],
            'eventplanner-admin' => [
                'src'       => EVENTPLANNER_ASSETS . '/js/admin.js',
                'deps'      => [ 'jquery', 'eventplanner-vendor', 'eventplanner-runtime' ],
                'version'   => filemtime( EVENTPLANNER_PATH . '/assets/js/admin.js' ),
                'in_footer' => true
            ]
        ];

        return $scripts;
    }

    /**
     * Get registered styles
     *
     * @return array
     */
    public function get_styles() {
        $styles = [
            'eventplanner-style' => [
                'src' =>  EVENTPLANNER_ASSETS . '/css/style.css'
            ],
            'eventplanner-frontend' => [
                'src' =>  EVENTPLANNER_ASSETS . '/css/frontend.css'
            ],
            'eventplanner-admin' => [
                'src' =>  EVENTPLANNER_ASSETS . '/css/admin.css'
            ],
            'eventplanner-fa' => [
                'src' => "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0/css/all.min.css"
            ]
        ];

        return $styles;
    }

}
