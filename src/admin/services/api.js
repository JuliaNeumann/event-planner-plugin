import axios from 'axios'

const restRoot = window.eventPlannerApp ? window.eventPlannerApp.rest_url : 'http://127.0.0.1:8000/wp-json/'
const baseUrl = restRoot + 'event-planner/v1/'
axios.defaults.headers.common['X-WP-Nonce'] = window.eventPlannerApp ? window.eventPlannerApp.nonce : null

