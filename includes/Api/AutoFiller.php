<?php
namespace Epp\Api;

// exit if accessed directly
if (!defined('ABSPATH'))
    exit;

class AutoFiller {
    private $start_year;
    private $end_year;
    private $weekday;
    private $time;
    private $db_actions;

    /**
     * [__construct description]
     */
    public function __construct() {
        $this->includes();
        $this->db_actions = new DatabaseActions();
        $this->weekday = $this->db_actions->getConfigValue($this->db_actions->config_autofill_weekday);
        $this->time = $this->db_actions->getConfigValue($this->db_actions->config_autofill_time);
        $last_year = $this->db_actions->getConfigValue($this->db_actions->config_last_filled_year);
        $current_year = date("Y");
        if (empty($last_year) || $last_year < $current_year) {
            $this->start_year = $current_year;
            $this->end_year = $current_year + 1;
        }
        elseif ($last_year == $current_year) {
            $this->start_year = $current_year + 1;
            $this->end_year = $current_year + 1;
        }
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

    public function autoFill() {
        if (empty($this->start_year) || empty($this->end_year)) {
            return;
        }
        $datePeriod = $this->getAllDatesToAutoFill();
        foreach($datePeriod as $date){
            $result = $this->db_actions->addEventByDate($date->format('Y-m-d'), $this->time);
            if (!empty($result["error"])) {
                trigger_error($result["error"]);
            }
        }
        $this->db_actions->updateConfig($this->db_actions->config_last_filled_year, $this->end_year);
    }

    private function getAllDatesToAutoFill() {
        return new \DatePeriod(
            new \DateTime("first $this->weekday of $this->start_year-01"),
            \DateInterval::createFromDateString("next $this->weekday"),
            new \DateTime("last day of $this->end_year-12")
        );
    }
}
