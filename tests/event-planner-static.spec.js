import { RequestMock } from 'testcafe';
import mockData from './__mocks__/all.json';
import { SELECTORS } from './utils/domHelpers';

const mock = RequestMock()
  .onRequestTo('http://127.0.0.1:8000/wp-json/event-planner/v1/all')
  .respond(mockData);  

fixture `Event Planner Static`
  .page `http://127.0.0.1:8000/test-event-planner-static/`
  .requestHooks(mock)
  .clientScripts([{module: 'mockdate'}, {content: "MockDate.set('2019-11-02')"}]);

test('Event Planner Static Page shows table', async t => {
  await t
          .maximizeWindow()
          .setNativeDialogHandler(() => true)
          .expect(SELECTORS.appStatic.count).eql(1)
          .expect(SELECTORS.tableStatic.count).gt(0);
});

test('Event Planner Static shows correct table rows and filters in desktop view', async t => {
  const textDate = await SELECTORS.cellDateStatic.nth(0).innerText;

  await t
          .maximizeWindow()
          // we see two tables: one for 2019, one for 2020
          .expect(SELECTORS.tableStatic.count).eql(2)
          // the current quarter of the year should be opened
          .expect(SELECTORS.groupHeaderOpenText.withText("Quartal 4").count).eql(1)
          // the first displayed date should be the first date in the current quarter
          .expect(textDate.trim()).eql('6.10.2019')
          // there are filters for all headers, except the date
          .expect(SELECTORS.filter.count).eql(19)
          // 4 filters are initially checked
          .expect(SELECTORS.filterChecked.count).eql(4);
});

test('Filters visibility can be toggled and filters can be used to toggle columns', async t => {
  const firstFilter = SELECTORS.filter.nth(0);
  const filterToggle = SELECTORS.filterToggle;

  await t
          .maximizeWindow()
          // we have two tables and five active headers (date + the four selected ones) by default
          .expect(SELECTORS.tableHeadStatic.count).eql(10)
          .expect(SELECTORS.tableHeadStatic.withText("Besonderes").count).eql(2)
          .expect(SELECTORS.filterList.visible).notOk()
          // we click on the filters title
          .click(filterToggle)
          // and the list of filters appears
          .expect(SELECTORS.filterList.visible).ok()
          // we click on the filter for the first row
          .click(firstFilter)
          // the columns with the respective headers should disappear
          .expect(SELECTORS.tableHeadStatic.count).eql(8)
          .expect(SELECTORS.tableHeadStatic.withText("Besonderes").count).eql(0)
          // we click again on the filter
          .click(firstFilter)
          // the columns with the respective header should reappear
          .expect(SELECTORS.tableHeadStatic.count).eql(10)
          .expect(SELECTORS.tableHeadStatic.withText("Besonderes").count).eql(2)
          // we click on the filters title again
          .click(filterToggle)
          // and the list of filters disappears
          .expect(SELECTORS.filterList.visible).notOk();
});


test('Visibility of quarters can be toggled', async t => {
  await t
          .maximizeWindow()
          // only quarter 4 is open initially
          .expect(SELECTORS.groupHeaderOpenText.withText("Quartal 4").count).eql(1)
          .expect(SELECTORS.groupHeaderOpenText.withText("Quartal 3").count).eql(0)
          // so we also see the events / dates belonging to this quarter
          .expect(SELECTORS.cellDateStatic.count).eql(15)
          // we click on it to close it
          .click(SELECTORS.groupHeaderOpenText.withText("Quartal 4"))
          // and it should not be open anymore
          .expect(SELECTORS.groupHeaderOpenText.withText("Quartal 4").count).eql(0)
          // so we should also see no events / dates at all at this point
          .expect(SELECTORS.cellDateStatic.count).eql(0)
          // we click on it again
          .click(SELECTORS.groupHeader.withText("Quartal 4").nth(0))
          // and it should be open again
          .expect(SELECTORS.groupHeaderOpenText.withText("Quartal 4").count).eql(1)
          // and we should also see the events / dates again
          .expect(SELECTORS.cellDateStatic.count).eql(15)
          // we click on another quarter
          .click(SELECTORS.groupHeader.withText("Quartal 3").nth(0))
          // so it is now also open
          .expect(SELECTORS.groupHeaderOpenText.withText("Quartal 3").count).eql(1)
          // and we see the events / dates for both quarters
          .expect(SELECTORS.cellDateStatic.count).eql(28);
});