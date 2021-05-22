<?php

if (!defined('WP_UNINSTALL_PLUGIN')) {
    die;
}
  
delete_option( 'epp_version' );
delete_option( 'epp_db_version' );
delete_option( 'epp_installed' );

global $wpdb;

$prefix = $wpdb->prefix . 'epp_';

$tables = array("config", "events", "events2headers", "headers", "header_groups", "header_footnotes");
foreach ($tables as &$value) {
    $value = $prefix . $value;
}
unset($value);

$wpdb->query( "DROP TABLE IF EXISTS " . implode(", ", $tables) . ";" );