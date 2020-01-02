import { Selector } from 'testcafe';

export const SELECTORS = {
  app: Selector('#epp_app'),
  appStatic: Selector('#epp_app_static'),

  table: Selector('.table-view'),
  tableStatic: Selector('.table'),
  tableHead: Selector('.head'),
  tableHeadStatic: Selector('.cell--head'),
  tableRow: Selector('.row'),

  cellDate: Selector('.cell__content--date'),
  cellDateStatic: Selector('.cell--date span'),
  cellIcons: Selector('.cell__content--icons'),
  cellText: Selector('.cell__content--text span'),
  cellMultilineText: Selector('.cell__content--longtext span'),

  datepicker: Selector('.vdp-datepicker'),
  datepickerDate: Selector('.vdp-datepicker__calendar .cell.day'),

  iconSelectFamigo: Selector('label').withText("Familiengottesdienst"),
  iconSelectCafe: Selector('label').withText("Gemeindecafé im Anschluss"),

  textInput: Selector(".input"),
  textArea: Selector(".textarea"),

  groupHeader: Selector('.group-header'),
  groupHeaderOpenText: Selector('.group-header--open'),
  groupRow: Selector('.row--group'),

  filter: Selector('.filters__item input'),
  filterList: Selector('.filters__list'),
  filterChecked: Selector('.filters__item input:checked'),
  filterToggle: Selector('.filters__title'),

  pagination: Selector('.pagination'),
  paginationNext: Selector('.pagination-next'),
  paginationPrevious: Selector('.pagination-previous'),
  paginationCurrent: Selector('.pagination-link.is-current'),
  
  pageTitle: Selector('.page-title')
}

export const SELECTOR_STRINGS = {
  iconFamigo: 'i[title="Familiengottesdienst"]',
  iconCafe: 'i[title="Gemeindecafé im Anschluss"]'
}