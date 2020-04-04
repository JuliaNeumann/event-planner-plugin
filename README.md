# WordPress plugin for planning events

A WordPress plugin that allows you to create a frontend-editable table for event planning, aimed at churches to plan their services.
For now, only available in German.

## Installation

Download this repository as a zip and copy the unzipped folder to the plugins directory of your WordPress site.
Find the entry for "Event Planner" in your plugin list and activate it.

## Development

(Requires to be run in the context of a WordPress instance)
1. Run `npm install`
2. To start developing, run `npm run dev`
3. For production build, run `npm run build`


## Tests

[Testcafe](https://devexpress.github.io/testcafe/) is used for testing. Run the tests with `npm run test`.
This assumes you have a WordPress instance running on port 8000, with two example pages set up (test-event-planner & test-event-planner-static, the last one must include the year 2019 - see instructions in the plugin dashboard).

## Built with

[Vue.js](https://vuejs.org/) and the [WordPress Vue.js starter plugin](https://github.com/tareq1988/vue-wp-starter) by [Tareq Hasan](https://github.com/tareq1988).