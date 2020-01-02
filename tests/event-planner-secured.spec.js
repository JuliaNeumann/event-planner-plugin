import { SELECTORS } from './utils/domHelpers';

const URL = `http://127.0.0.1:8000/test-event-planner/`;
const URL_STATIC = `http://127.0.0.1:8000/test-event-planner-static/`;

fixture `Event Planner Secured`

test('Event Planner Page shows an alert when no API response (user is not logged in) and does not display table', async t => {
  await t
          .setNativeDialogHandler(() => true)
          .navigateTo(URL);

  const dialogHistory = await t.getNativeDialogHistory();

  await t
          .expect(dialogHistory[0].type).eql('alert')
          .expect(SELECTORS.app.count).eql(1)
          .expect(SELECTORS.table.count).eql(0);
});

test('Event Planner Static Page shows an alert when no API response (user is not logged in) and does not display table', async t => {
        await t
                .setNativeDialogHandler(() => true)
                .navigateTo(URL_STATIC);
      
        const dialogHistory = await t.getNativeDialogHistory();
      
        await t
                .expect(dialogHistory[0].type).eql('alert')
                .expect(SELECTORS.appStatic.count).eql(1)
                .expect(SELECTORS.tableStatic.count).eql(0);
      });