<?php

global $epp_db_version;
$epp_db_version = '1.0';

function epp_install() {
    global $wpdb;
    global $epp_db_version;

    require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );

    $charset_collate = $wpdb->get_charset_collate();

    $table_name = $wpdb->prefix . 'epp_config';
    $sql = "CREATE TABLE $table_name (
		id mediumint(9) NOT NULL AUTO_INCREMENT,
		name varchar(50) NOT NULL,
		data text NOT NULL,
		PRIMARY KEY  (id)
	) $charset_collate;";
    dbDelta( $sql );

    $table_name = $wpdb->prefix . 'epp_events';
    $sql = "CREATE TABLE $table_name (
		id mediumint(9) NOT NULL AUTO_INCREMENT,
		created timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
		PRIMARY KEY  (id)
	) $charset_collate;";
    dbDelta( $sql );

    $table_name = $wpdb->prefix . 'epp_events2headers';
    $sql = "CREATE TABLE $table_name (
		event_id mediumint(9) NOT NULL,
		header_id mediumint(9) NOT NULL,
		content text NOT NULL,
		PRIMARY KEY  (event_id, header_id)
	) $charset_collate;";
    dbDelta( $sql );

    $table_name = $wpdb->prefix . 'epp_headers';
    $sql = "CREATE TABLE $table_name (
		id mediumint(9) NOT NULL AUTO_INCREMENT,
		name varchar(200) NOT NULL,
		order_id int(10) NOT NULL,
		type varchar(50) NOT NULL,
		group_id mediumint(9),
		description text,
		additional text,
		PRIMARY KEY  (id)
	) $charset_collate;";
    dbDelta( $sql );

    $table_name = $wpdb->prefix . 'epp_header_groups';
    $sql = "CREATE TABLE $table_name (
		id mediumint(9) NOT NULL AUTO_INCREMENT,
		name varchar(50) NOT NULL,
		PRIMARY KEY  (id)
	) $charset_collate;";
    dbDelta( $sql );

    $table_name = $wpdb->prefix . 'epp_header_footnotes';
    $sql = "CREATE TABLE $table_name (
		id mediumint(9) NOT NULL AUTO_INCREMENT,
		header_id mediumint(9),
		text varchar(500) NOT NULL,
		PRIMARY KEY  (id)
	) $charset_collate;";
    dbDelta( $sql );

    add_option( 'epp_db_version', $epp_db_version );
}

function epp_install_data() {
    global $wpdb;

    // CONFIG

    $wpdb->insert(
        $wpdb->prefix . 'epp_config',
        array(
            'name' => 'static_fields',
            'data' => '[1]',
        )
    );

    $wpdb->insert(
        $wpdb->prefix . 'epp_config',
        array(
            'name' => 'last_filled_year',
            'data' => '',
        )
    );

    $wpdb->insert(
        $wpdb->prefix . 'epp_config',
        array(
            'name' => 'autofill_weekday',
            'data' => 'sunday',
        )
    );

    $wpdb->insert(
        $wpdb->prefix . 'epp_config',
        array(
            'name' => 'header_for_widget',
            'data' => '',
        )
    );

    $wpdb->insert(
        $wpdb->prefix . 'epp_config',
        array(
            'name' => 'teaser_main_text',
            'data' => '',
        )
    );

    $wpdb->insert(
        $wpdb->prefix . 'epp_config',
        array(
            'name' => 'teaser_cancel_text',
            'data' => '',
        )
    );

    $wpdb->insert(
        $wpdb->prefix . 'epp_config',
        array(
            'name' => 'icon_for_cancel',
            'data' => '',
        )
    );

    $wpdb->insert(
        $wpdb->prefix . 'epp_config',
        array(
            'name' => 'teaser_show_icons',
            'data' => '',
        )
    );

    $wpdb->insert(
        $wpdb->prefix . 'epp_config',
        array(
            'name' => 'teaser_icons_headline',
            'data' => '',
        )
    );

    $wpdb->insert(
        $wpdb->prefix . 'epp_config',
        array(
            'name' => 'use_autofill',
            'data' => '',
        )
    );

    // HEADERS:

    $wpdb->insert(
        $wpdb->prefix . 'epp_headers',
        array(
            'name' => 'Datum',
            'order_id' => 1,
            'type' => 'date'
        )
    );
}

?>
