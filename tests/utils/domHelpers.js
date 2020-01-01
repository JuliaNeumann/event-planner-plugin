import { Selector } from 'testcafe';

export const SELECTORS = {
  app: Selector('#epp_app'),
  appStatic: Selector('#epp_app_static'),

  table: Selector('.table'),
  tableView: Selector('.table-view'),
  tableHead: Selector('.head'),
  tableRow: Selector('.row'),

  cellDate: Selector('.cell__content--date'),

  groupHeader: Selector('.group-header'),
  groupRow: Selector('.row--group'),

  filter: Selector('.filters__item input'),
  filterList: Selector('.filters__list'),
  filterChecked: Selector('.filters__item input:checked'),
  filterToggle: Selector('.filters__title'),

  pagination: Selector('.pagination'),
  paginationNext: Selector('.pagination-next'),
  paginationPrevious: Selector('.pagination-previous'),
  paginationCurrent: Selector('.pagination-link.is-current')
}