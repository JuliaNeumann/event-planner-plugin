<?php
namespace Epp;

/**
 * Frontend Pages Handler
 */
class Frontend {

    public function __construct() {
        $this->includes();
        add_shortcode( 'eventplanner', [ $this, 'render_frontend' ] );
        add_shortcode( 'eventplanner_current', [ $this, 'render_current_snippet' ] );
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
     * Render main frontend app (table with all the events)
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

    /**
     * Render the snippet displaying the current upcoming event
     *
     * @param  array $atts
     * @param  string $content
     *
     * @return string
     */
    public function render_current_snippet( $atts = [], $content = '' ) {
        $db = new Api\DatabaseActions();

        $date = new \DateTime();
        if (date('N') !== "7") { // today is sunday
            $date->modify('next sunday');
        }
        
        $headerId = $db->getConfigValue($db->config_header_for_widget);
        $eventInfo = $db->getEventInfoByDateAndHeader($date->format('Y-m-d'), $headerId);

        $features = array();
        if (!empty($eventInfo)) {
            $features = json_decode($eventInfo);
        }

        if (!empty($eventInfo) &&  (count($features) > 0) && in_array('ban', $features)) {
            $text = "<p>Am kommenden Sonntag, den ". $date->format('d.m.') . ", findet bei uns leider <strong>kein</strong> Gottesdienst statt.</p>";
        }
        else {
            $text = '<p>Wir feiern Gottesdienst, am kommenden <strong>Sonntag, den ' . $date->format('d.m.') . ', um 17 Uhr</strong> in der Comeniusstraße 28.
                    Jeder ist herzlich eingeladen!<br>
                    Parallel findet ein Kinderprogramm (ab 4 Jahre) statt.</p>';
            if (!empty($eventInfo) &&  (count($features) > 0)) {
                $header = $db->getHeaderById($headerId);

                if (!empty($header) && !empty($header->additional)) {
                    $icons = json_decode($header->additional);

                    $text .= "<p>";
                    foreach ($icons as $icon) {
                        if (in_array($icon->icon, $features)) {
                            $text .= '<i class="fa fa-fw fa-' . $icon->icon . '"></i> ' . $icon->name . '<br/>';
                        }
                    }
                    $text .= "</p>";
                }
            }
        }

        return $text;
    }
}
