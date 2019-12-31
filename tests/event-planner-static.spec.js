import { RequestMock, Selector } from 'testcafe';
import mockData from './__mocks__/all.json';

const mock = RequestMock()
  .onRequestTo('http://127.0.0.1:8000/wp-json/event-planner/v1/all')
  .respond(mockData);  

fixture `Event Planner Static`
  .page `http://127.0.0.1:8000/test-event-planner-static/`
  .requestHooks(mock)
  .clientScripts([{module: 'mockdate'}, {content: "MockDate.set('2019-11-02')"}]);

test('Event Planner Static Page shows table', async t => {
  await t
          .expect(Selector('#epp_app_static').count).eql(1)
          .expect(Selector('.table').count).gt(0);
});