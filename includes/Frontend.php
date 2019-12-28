<?php
namespace Epp;

/**
 * Frontend Pages Handler
 */
class Frontend {

    public function __construct() {
        add_shortcode( 'eventplanner', [ $this, 'render_frontend' ] );
    }

    /**
     * Render frontend app
     *
     * @param  array $atts
     * @param  string $content
     *
     * @return string
     */
    public function render_frontend( $atts = [], $content = '' ) {
        wp_enqueue_style( 'eventplanner-frontend' );
        wp_enqueue_script( 'eventplanner-frontend' );

        // localize data for script
        wp_localize_script( 'eventplanner-frontend', 'eventPlannerApp', array(
            'rest_url' => esc_url_raw( rest_url() ),
            'nonce' => wp_create_nonce( 'wp_rest' ),
            'admin' => current_user_can('administrator')
        ));

        $attributes = shortcode_atts( array(
            'static' => false,
            'years'  => date("Y")
        ), $atts );

        return $attributes['static'] ? '<div id="epp_app_static_wrapper" data-years="' . $attributes['years'] . '"><div id="epp_app_static"></div></div>'
                                     : "<div id='epp_app'></div>";
    }
}
