import { RequestMock, Selector } from 'testcafe';
import mockData from './__mocks__/all.json';

const mock = RequestMock()
  .onRequestTo('http://127.0.0.1:8000/wp-json/event-planner/v1/all')
  .respond(mockData);  

fixture `Event Planner`
  .page `http://127.0.0.1:8000/test-event-planner/`
  .requestHooks(mock)
  .clientScripts([{module: 'mockdate'}, {content: "MockDate.set('2019-11-02')"}]);

test('Event Planner Page shows table', async t => {
  await t
          .expect(Selector('#epp_app').count).eql(1)
          .expect(Selector('.table-view').count).gt(0);
});