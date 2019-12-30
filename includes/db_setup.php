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
            'data' => '[1,2,4,5,19]',
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
            'data' => '2',
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

    $wpdb->insert(
        $wpdb->prefix . 'epp_headers',
        array(
            'name' => 'Besonderes',
            'order_id' => 2,
            'type' => 'icons',
            'additional' => '[{"name":"Familiengottesdienst","icon":"child"},{"name":"Abendmahl","icon":"trophy"},{"name":"Gemeindecafé im Anschluss","icon":"coffee"},{"name":"Fällt aus","icon":"ban"}]'
        )
    );

    $wpdb->insert(
        $wpdb->prefix . 'epp_headers',
        array(
            'name' => 'Moderator',
            'order_id' => 3,
            'type' => 'text',
            'description' => 'Der Moderator muss alle wichtigen Informationen zum Ablauf des Gottesdienstes vorher erhalten.'
        )
    );

    $wpdb->insert(
        $wpdb->prefix . 'epp_headers',
        array(
            'name' => 'Prediger',
            'order_id' => 4,
            'type' => 'text'
        )
    );

    $wpdb->insert(
        $wpdb->prefix . 'epp_headers',
        array(
            'name' => 'Predigtthema',
            'order_id' => 5,
            'type' => 'text'
        )
    );

    $wpdb->insert(
        $wpdb->prefix . 'epp_headers',
        array(
            'name' => 'Techniker',
            'order_id' => 6,
            'type' => 'text'
        )
    );

    $wpdb->insert(
        $wpdb->prefix . 'epp_headers',
        array(
            'name' => 'Beamer',
            'order_id' => 7,
            'type' => 'text'
        )
    );

    $wpdb->insert(
        $wpdb->prefix . 'epp_headers',
        array(
            'name' => 'Kindergottesdienst',
            'order_id' => 8,
            'type' => 'text'
        )
    );

    $wpdb->insert(
        $wpdb->prefix . 'epp_headers',
        array(
            'name' => 'Musiker',
            'order_id' => 9,
            'type' => 'longtext'
        )
    );

    $wpdb->insert(
        $wpdb->prefix . 'epp_headers',
        array(
            'name' => 'Musikverantwortlicher',
            'order_id' => 10,
            'type' => 'text'
        )
    );

    $wpdb->insert(
        $wpdb->prefix . 'epp_headers',
        array(
            'name' => 'Instrumente & Mikrofone',
            'order_id' => 11,
            'type' => 'longtext',
            'group_id' => 1,
            'description' => 'Bitte für die Technik angeben - welche Instrumente werden gespielt, welche Mikros gebraucht.'
        )
    );

    $wpdb->insert(
        $wpdb->prefix . 'epp_headers',
        array(
            'name' => 'Intro-Lied',
            'order_id' => 12,
            'type' => 'text',
            'group_id' => 1
        )
    );

    $wpdb->insert(
        $wpdb->prefix . 'epp_headers',
        array(
            'name' => 'Lobpreisteil',
            'order_id' => 13,
            'type' => 'longtext',
            'group_id' => 1
        )
    );

    $wpdb->insert(
        $wpdb->prefix . 'epp_headers',
        array(
            'name' => 'Predigt-Lied',
            'order_id' => 14,
            'type' => 'text',
            'group_id' => 1
        )
    );

    $wpdb->insert(
        $wpdb->prefix . 'epp_headers',
        array(
            'name' => 'Dankopfer-Lied',
            'order_id' => 15,
            'type' => 'text',
            'group_id' => 1
        )
    );

    $wpdb->insert(
        $wpdb->prefix . 'epp_headers',
        array(
            'name' => 'Outro-Lied',
            'order_id' => 16,
            'type' => 'text',
            'group_id' => 1
        )
    );

    $wpdb->insert(
        $wpdb->prefix . 'epp_headers',
        array(
            'name' => 'Sonstige Lieder',
            'order_id' => 17,
            'type' => 'longtext',
            'group_id' => 1
        )
    );

    $wpdb->insert(
        $wpdb->prefix . 'epp_headers',
        array(
            'name' => 'Probentermin',
            'order_id' => 18,
            'type' => 'text',
            'group_id' => 1
        )
    );

    $wpdb->insert(
        $wpdb->prefix . 'epp_headers',
        array(
            'name' => 'Anmerkungen',
            'order_id' => 19,
            'type' => 'longtext'
        )
    );

    $wpdb->insert(
        $wpdb->prefix . 'epp_headers',
        array(
            'name' => 'Café-Team',
            'order_id' => 20,
            'type' => 'text'
        )
    );

    // GROUPS:

    $wpdb->insert(
        $wpdb->prefix . 'epp_header_groups',
        array(
            'name' => 'Musik'
        )
    );

    // FOOTNOTES:

    $wpdb->insert(
        $wpdb->prefix . 'epp_header_footnotes',
        array(
            'header_id' => 3,
            'text' => 'Moderator, Prediger, Techniker und Beamer sind (hoffentlich) immer vorgetragen. Wenn nicht? -> Mail an Johanna ;)'
        )
    );

    $wpdb->insert(
        $wpdb->prefix . 'epp_header_footnotes',
        array(
            'header_id' => 3,
            'text' => 'Der Moderator ist für den ganzen Gottesdienst verantwortlich - bei Fragen an ihn wenden.'
        )
    );

    $wpdb->insert(
        $wpdb->prefix . 'epp_header_footnotes',
        array(
            'header_id' => 3,
            'text' => 'Kontaktdaten des Moderators und Predigers sind aus dem Dokument “Mitarbeiter Gottesdienst LKG Leipzig” zu entnehmen.'
        )
    );

    $wpdb->insert(
        $wpdb->prefix . 'epp_header_footnotes',
        array(
            'header_id' => 9,
            'text' => 'Musiker und Musikverantwortliche sollen zwei Monate vor dem Gottesdienst feststehen (Ende März: bis Ende Mai, Mitte Mai: bis Mitte Juli).'
        )
    );

    $wpdb->insert(
        $wpdb->prefix . 'epp_header_footnotes',
        array(
            'header_id' => 9,
            'text' => 'Es ist überhaupt nicht schlimm, wenn man einmal doch nicht kann! Aber in diesem Falle ist die Person selbst für Ersatz verantwortlich!'
        )
    );

    $wpdb->insert(
        $wpdb->prefix . 'epp_header_footnotes',
        array(
            'header_id' => 10,
            'text' => 'Der Musikverantwortliche hat folgende Aufgaben: Ansprechpartner für die Musik vor dem Godi, Musikteam zusammen suchen, Liederauswahl, Probentermin finden, Probenleitung, Musikleitung im Gottesdienst, Lieder/Ablauf an Tontechnik/Beamer schicken.'
        )
    );

    $wpdb->insert(
        $wpdb->prefix . 'epp_header_footnotes',
        array(
            'header_id' => 10,
            'text' => 'Der Musikverantwortliche darf die Aufgaben sehr gern verteilen!'
        )
    );

    $wpdb->insert(
        $wpdb->prefix . 'epp_header_footnotes',
        array(
            'header_id' => 12,
            'text' => 'Hier und in den folgenden Feldern werden alle Lieder, die an diesem Sonntag gesungen werden so kurz wie möglich eingetragen um Dopplungen zu vermeiden.'
        )
    );

    $wpdb->insert(
        $wpdb->prefix . 'epp_header_footnotes',
        array(
            'header_id' => 12,
            'text' => 'Die Liederauswahl ist bitte, bis spätestens Samstag vor dem Gottesdienst 17 Uhr, an die Ton-/Bildtechnik weiterzugeben!'
        )
    );

    $wpdb->insert(
        $wpdb->prefix . 'epp_header_footnotes',
        array(
            'header_id' => 19,
            'text' => 'Hier werden Dinge, wie besondere Uhrzeiten, besondere Räumlichkeiten, "Adventsfeier", etc. … vermerkt sein.'
        )
    );

}

?>
