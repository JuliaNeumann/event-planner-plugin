import { RequestMock } from "testcafe";
import mockData from "./__mocks__/all.json";
import { SELECTORS } from "./utils/domHelpers";

const mock = RequestMock()
    .onRequestTo("http://127.0.0.1:8000/wp-json/event-planner/v1/all")
    .respond(mockData);

fixture `Event Planner`
    .page `http://127.0.0.1:8000/test-event-planner/`
    .requestHooks(mock)
    .clientScripts([{module: "mockdate"}, {content: "MockDate.set('2019-11-02')"}]);

test("Event Planner Page shows table", async t => {
    await t
        .maximizeWindow()
        .expect(SELECTORS.app.count).eql(1)
        .expect(SELECTORS.table.count).gt(0);
});

test("Event Planner Page shows table rows and filters in desktop view", async t => {
    await t
        .maximizeWindow()
    // on desktop, we have one big table
        .expect(SELECTORS.table.count).eql(1)
    // with rows for all the headers + one for the header group
        .expect(SELECTORS.tableRow.count).eql(21)
    // there are filters for all rows, except the date
        .expect(SELECTORS.filter.count).eql(19)
    // all filters are initially checked
        .expect(SELECTORS.filterChecked.count).eql(19);
});

test("Filters visibility can be toggled and filters can be used to toggle rows", async t => {
    const firstFilter = SELECTORS.filter.nth(0);
    const filterToggle = SELECTORS.filterToggle;

    await t
        .maximizeWindow()
        .expect(SELECTORS.tableRow.count).eql(21)
        .expect(SELECTORS.tableHead.withText("Besonderes").count).eql(1)
        .expect(SELECTORS.filterList.visible).notOk()
    // we click on the filters title
        .click(filterToggle)
    // and the list of filters appears
        .expect(SELECTORS.filterList.visible).ok()
    // we click on the filter for the first row
        .click(firstFilter)
    // the row with the respective header should disappear
        .expect(SELECTORS.tableRow.count).eql(20)
        .expect(SELECTORS.tableHead.withText("Besonderes").count).eql(0)
    // we click again on the filter
        .click(firstFilter)
    // the row with the respective header should reappear
        .expect(SELECTORS.tableRow.count).eql(21)
        .expect(SELECTORS.tableHead.withText("Besonderes").count).eql(1)
    // we click on the filters title again
        .click(filterToggle)
    // and the list of filters disappears
        .expect(SELECTORS.filterList.visible).notOk();
});

test("Pagination is available and can be used to navigate between events", async t => {
    await t
        .maximizeWindow()
        .expect(SELECTORS.pagination.count).eql(1)
    // initially, pagination marks first page as the current one
        .expect(SELECTORS.paginationCurrent.withText("1").count).eql(1)
        .expect(SELECTORS.paginationCurrent.withText("2").count).eql(0)
    // and we see the first two dates in the table
        .expect(SELECTORS.cellDate.count).eql(2)
        .expect(SELECTORS.cellDate.withText("3.11.2019").count).eql(1)
        .expect(SELECTORS.cellDate.withText("10.11.2019").count).eql(1)
    // we click on the next arrow
        .click(SELECTORS.paginationNext)
    // pagination marks the second page as current
        .expect(SELECTORS.paginationCurrent.withText("1").count).eql(0)
        .expect(SELECTORS.paginationCurrent.withText("2").count).eql(1)
    // and we see the next two dates in the table
        .expect(SELECTORS.cellDate.count).eql(2)
        .expect(SELECTORS.cellDate.withText("17.11.2019").count).eql(1)
        .expect(SELECTORS.cellDate.withText("24.11.2019").count).eql(1)
    // we click on the previous arrow
        .click(SELECTORS.paginationPrevious)
    // pagination marks the first page as current again
        .expect(SELECTORS.paginationCurrent.withText("1").count).eql(1)
        .expect(SELECTORS.paginationCurrent.withText("2").count).eql(0)
    // and we see the first two dates in the table again
        .expect(SELECTORS.cellDate.count).eql(2)
        .expect(SELECTORS.cellDate.withText("3.11.2019").count).eql(1)
        .expect(SELECTORS.cellDate.withText("10.11.2019").count).eql(1);
});

test("Visibility of grouped rows can be toggled", async t => {
    await t
        .maximizeWindow()
        .expect(SELECTORS.groupHeader.count).eql(1)
        .expect(SELECTORS.groupRow.visible).notOk()
    // we click on the group header
        .click(SELECTORS.groupHeader)
    // and the group rows should appear
        .expect(SELECTORS.groupRow.visible).ok()
    // we click on the group header again
        .click(SELECTORS.groupHeader)
    // and the group rows should disappear
        .expect(SELECTORS.groupRow.visible).notOk();
});