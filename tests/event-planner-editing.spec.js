import { RequestMock, Selector } from 'testcafe';
import mockData from './__mocks__/all.json';
import { SELECTORS, SELECTOR_STRINGS } from './utils/domHelpers';

const mock = RequestMock()
  .onRequestTo('http://127.0.0.1:8000/wp-json/event-planner/v1/all')
  .respond(mockData)
  .onRequestTo('http://127.0.0.1:8000/wp-json/event-planner/v1/update-event')
  .respond({success: 'Änderungen gespeichert!'});  

fixture `Event Planner`
  .page `http://127.0.0.1:8000/test-event-planner/`
  .requestHooks(mock)
  .clientScripts([{module: 'mockdate'}, {content: "MockDate.set('2019-11-02')"}]);

test('Event Planner Page shows table', async t => {
  await t
          .maximizeWindow()
          .expect(SELECTORS.app.count).eql(1)
          .expect(SELECTORS.table.count).gt(0);
});

test('Date of event can be edited', async t => {
  await t
          .maximizeWindow()
          .expect(SELECTORS.cellDate.withText('3.11.2019').count).eql(1)
          .expect(SELECTORS.cellDate.withText('4.11.2019').count).eql(0)
          .expect(SELECTORS.datepicker.count).eql(0)
          // we click on the cell to open edit mode
          .click(SELECTORS.cellDate.withText('3.11.2019'))
          // and the datepicker opens
          .expect(SELECTORS.datepicker.count).eql(1)
          // we click on the new date in the datepicker
          .click(SELECTORS.datepickerDate.withText('4'))
          // we click outside
          .click(SELECTORS.pageTitle)
          // and the datepicker closes and new date is shown instead of old one
          .expect(SELECTORS.datepicker.count).eql(0)
          .expect(SELECTORS.cellDate.withText('3.11.2019').count).eql(0)
          .expect(SELECTORS.cellDate.withText('4.11.2019').count).eql(1);
});

test('Icon selection of event can be edited', async t => {
  await t
          .maximizeWindow()
          .expect(SELECTORS.cellIcons.nth(0).find(SELECTOR_STRINGS.iconCafe).count).eql(1)
          .expect(SELECTORS.cellIcons.nth(0).find(SELECTOR_STRINGS.iconFamigo).count).eql(0)
          // we click on the cell to open edit mode
          .click(SELECTORS.cellIcons)
          // we select the Famigo icon
          .click(SELECTORS.iconSelectFamigo)
          // we click outside
          .click(SELECTORS.pageTitle) // TODO: check if this can be done with just one click
          .click(SELECTORS.pageTitle)
          // and we now see both icons
          .expect(SELECTORS.cellIcons.nth(0).find(SELECTOR_STRINGS.iconCafe).count).eql(1)
          .expect(SELECTORS.cellIcons.nth(0).find(SELECTOR_STRINGS.iconFamigo).count).eql(1)
          // we click on the cell again to open edit mode
          .click(SELECTORS.cellIcons)
          // we unselect both icons
          .click(SELECTORS.iconSelectFamigo)
          .click(SELECTORS.iconSelectCafe)
          // we click outside
          .click(SELECTORS.pageTitle)
          .click(SELECTORS.pageTitle)
          // and we now see no icons
          .expect(SELECTORS.cellIcons.nth(0).find(SELECTOR_STRINGS.iconCafe).count).eql(0)
          .expect(SELECTORS.cellIcons.nth(0).find(SELECTOR_STRINGS.iconFamigo).count).eql(0);
});

test('Text of simple text field can be edited', async t => {
  await t
          .maximizeWindow()
          .expect(SELECTORS.cellText.withText("John Doe").count).eql(1)
          .expect(SELECTORS.cellText.withText("Foo Bar").count).eql(0)
          // we click on the cell to open edit mode
          .click(SELECTORS.cellText.withText("John Doe"))
          // and enter new text
          .typeText(SELECTORS.textInput, "Foo Bar", { replace: true})
          // we click outside
          .click(SELECTORS.pageTitle)
          // and see the new text instead of the old one
          .expect(SELECTORS.cellText.withText("John Doe").count).eql(0)
          .expect(SELECTORS.cellText.withText("Foo Bar").count).eql(1);
});

test('Text of multiline text field can be edited', async t => {
  await t
          .maximizeWindow()
          .expect(SELECTORS.cellMultilineText.withText("Special").count).eql(1)
          .expect(SELECTORS.cellMultilineText.withText("Foo\nBar").count).eql(0)
          // we click on the cell to open edit mode
          .click(SELECTORS.cellMultilineText.withText("Special"))
          // and enter new text
          .typeText(SELECTORS.textArea, "Foo", { replace: true})
          .pressKey('enter')
          .typeText(SELECTORS.textArea, "Bar")
          // we click outside
          .click(SELECTORS.pageTitle)
          // and see the new text instead of the old one
          .expect(SELECTORS.cellMultilineText.withText("Special").count).eql(0)
          .expect(SELECTORS.cellMultilineText.withText("Foo\nBar").count).eql(1);
});