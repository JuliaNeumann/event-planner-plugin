import { RequestMock, Selector } from 'testcafe';
import mockData from './__mocks__/all.json';

const mock = RequestMock()
  .onRequestTo('http://127.0.0.1:8000/wp-json/event-planner/v1/all')
  .respond(mockData);  

fixture `Event Planner`
  .page `http://127.0.0.1:8000/test-event-planner/`
  .requestHooks(mock)
  .clientScripts([{module: 'mockdate'}, {content: "MockDate.set('2019-11-02')"}]);

test('Event Planner Page shows table in desktop view', async t => {
  await t
          .maximizeWindow()
          .expect(Selector('#epp_app').count).eql(1)
          .expect(Selector('.table-view').count).gt(1);
});

test('Event Planner Page shows table rows in desktop view', async t => {
  await t
          .maximizeWindow()
          // on desktop, we have one big table
          .expect(Selector('.table-view').count).eql(1)
          // with rows for all the headers + one for the header group
          .expect(Selector('.row').count).eql(21);
});

test('Event Planner Page shows filters', async t => {
  await t
          .maximizeWindow()
          // there are filters for all rows, except the date
          .expect(Selector('.filters__item input').count).eql(19)
          // all filters are initially checked
          .expect(Selector('.filters__item input:checked').count).eql(19);
});