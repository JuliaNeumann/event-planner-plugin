(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["frontend"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/App.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_EditTable_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/EditTable.vue */ \"./src/frontend/components/EditTable.vue\");\n/* harmony import */ var _assets_css_general_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/css/general_styles.css */ \"./src/frontend/assets/css/general_styles.css\");\n/* harmony import */ var _assets_css_general_styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_css_general_styles_css__WEBPACK_IMPORTED_MODULE_1__);\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'app',\n  components: {\n    EditTable: _components_EditTable_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  }\n});\n\n//# sourceURL=webpack:///./src/frontend/App.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/AppStatic.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/AppStatic.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_StaticTable_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/StaticTable.vue */ \"./src/frontend/components/StaticTable.vue\");\n/* harmony import */ var _assets_css_general_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/css/general_styles.css */ \"./src/frontend/assets/css/general_styles.css\");\n/* harmony import */ var _assets_css_general_styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_css_general_styles_css__WEBPACK_IMPORTED_MODULE_1__);\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'app',\n  components: {\n    StaticTable: _components_StaticTable_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  }\n});\n\n//# sourceURL=webpack:///./src/frontend/AppStatic.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/AddButton.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/components/AddButton.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuejs-datepicker */ \"./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js\");\n/* harmony import */ var _node_modules_vuejs_datepicker_src_locale_translations_de__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vuejs-datepicker/src/locale/translations/de */ \"./node_modules/vuejs-datepicker/src/locale/translations/de.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'AddButton',\n  components: {\n    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  data: function () {\n    return {\n      datepickerTranslations: _node_modules_vuejs_datepicker_src_locale_translations_de__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n      showOverlay: false,\n      date: '',\n      lastDate: new Date()\n    };\n  },\n  computed: {\n    formatDate() {\n      if (this.date) {\n        const dateObj = new Date(this.date);\n        return dateObj.toLocaleDateString();\n      }\n\n      return '';\n    }\n\n  },\n  methods: {\n    addDate() {\n      this.$emit('addDate', this.date);\n      this.lastDate = this.date;\n      this.date = '';\n    },\n\n    addDateAndClose() {\n      this.addDate();\n      this.date = '';\n      this.showOverlay = false;\n    }\n\n  }\n});\n\n//# sourceURL=webpack:///./src/frontend/components/AddButton.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/ArrowToggle.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/components/ArrowToggle.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'ArrowToggle',\n  props: ['direction']\n});\n\n//# sourceURL=webpack:///./src/frontend/components/ArrowToggle.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/CardView.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/components/CardView.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TableView_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableView.vue */ \"./src/frontend/components/TableView.vue\");\n/* harmony import */ var _ArrowToggle_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ArrowToggle.vue */ \"./src/frontend/components/ArrowToggle.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'CardView',\n  components: {\n    TableView: _TableView_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    ArrowToggle: _ArrowToggle_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n  props: ['row', 'heads', 'groups', 'index'],\n\n  data() {\n    return {\n      show: this.index === 0\n    };\n  },\n\n  methods: {\n    toggleShow: function () {\n      this.show = !this.show;\n    },\n    deleteRow: function (rowId) {\n      this.$emit('deleteRow', rowId);\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/frontend/components/CardView.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/CellContent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/components/CellContent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _IconList_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IconList.vue */ \"./src/frontend/components/IconList.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'CellContent',\n  props: ['head', 'content'],\n  components: {\n    IconList: _IconList_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  }\n});\n\n//# sourceURL=webpack:///./src/frontend/components/CellContent.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/EditButton.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/components/EditButton.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TableCell_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableCell.vue */ \"./src/frontend/components/TableCell.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'EditButton',\n  components: {\n    TableCell: _TableCell_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  data: function () {\n    return {\n      showOverlay: false\n    };\n  },\n  props: ['row', 'heads'],\n  methods: {\n    handleClose() {\n      this.$emit('updated');\n    },\n\n    saveAndClose() {\n      this.$refs.intro.click();\n      this.showOverlay = false;\n      this.handleClose();\n    }\n\n  }\n});\n\n//# sourceURL=webpack:///./src/frontend/components/EditButton.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/EditTable.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/components/EditTable.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CardView_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardView.vue */ \"./src/frontend/components/CardView.vue\");\n/* harmony import */ var _FootnoteList_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FootnoteList.vue */ \"./src/frontend/components/FootnoteList.vue\");\n/* harmony import */ var _TableView_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TableView.vue */ \"./src/frontend/components/TableView.vue\");\n/* harmony import */ var _AddButton_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AddButton.vue */ \"./src/frontend/components/AddButton.vue\");\n/* harmony import */ var _RowFilters_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RowFilters.vue */ \"./src/frontend/components/RowFilters.vue\");\n/* harmony import */ var _mixins_responsive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mixins/responsive */ \"./src/frontend/components/mixins/responsive.js\");\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/api */ \"./src/frontend/services/api.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'EditTable',\n  components: {\n    TableView: _TableView_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    CardView: _CardView_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    AddButton: _AddButton_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    RowFilters: _RowFilters_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    FootnoteList: _FootnoteList_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n  mixins: [_mixins_responsive__WEBPACK_IMPORTED_MODULE_5__[\"responsiveMixin\"]],\n\n  data() {\n    return {\n      heads: [],\n      groups: {},\n      rows: [],\n      activeHeads: [],\n      loaded: false\n    };\n  },\n\n  computed: {\n    getActiveHeads: function () {\n      return this.heads.filter(head => head.active);\n    }\n  },\n  watch: {\n    activeHeads: function () {\n      localStorage.setItem('activeHeads', JSON.stringify(this.activeHeads));\n      this.heads.forEach((head, index) => {\n        head.active = this.activeHeads[index];\n      });\n    }\n  },\n\n  async mounted() {\n    const data = await Object(_services_api__WEBPACK_IMPORTED_MODULE_6__[\"getData\"])();\n\n    if (data === false) {\n      return;\n    }\n\n    this.heads = Object(_services_api__WEBPACK_IMPORTED_MODULE_6__[\"getHeaders\"])(data);\n    this.groups = Object(_services_api__WEBPACK_IMPORTED_MODULE_6__[\"getGroups\"])(data);\n    this.rows = Object(_services_api__WEBPACK_IMPORTED_MODULE_6__[\"getRowsForEdit\"])(data);\n\n    if (localStorage.getItem('activeHeads')) {\n      const cachedActiveHeads = JSON.parse(localStorage.getItem('activeHeads'));\n\n      if (cachedActiveHeads.length === this.heads.length) {\n        this.activeHeads = cachedActiveHeads;\n      }\n    }\n\n    if (this.activeHeads.length !== this.heads.length) {\n      // that is, not used the ones from cache because not set or not fitting\n      this.activeHeads = this.heads.map(() => true);\n    }\n\n    this.loaded = true;\n  },\n\n  methods: {\n    addRow: async function (addDate) {\n      const apiResult = await Object(_services_api__WEBPACK_IMPORTED_MODULE_6__[\"addEvent\"])(addDate);\n\n      if (apiResult && apiResult.success) {\n        const data = await Object(_services_api__WEBPACK_IMPORTED_MODULE_6__[\"getData\"])();\n        this.rows = await Object(_services_api__WEBPACK_IMPORTED_MODULE_6__[\"getRowsForEdit\"])(data);\n        this.loaded = true;\n        return;\n      }\n\n      if (apiResult && apiResult.error) {\n        alert(`Beim Hinzufügen ist ein Fehler aufgetreten: ${apiResult.error}`);\n        return;\n      }\n\n      alert('Beim Hinzufügen ist ein unbekannter Fehler aufgetreten');\n    },\n    deleteRow: async function (rowId) {\n      const confirmed = window.confirm('Diese Veranstaltung und alle ihre Daten werden endgültig gelöscht. ' + 'Dies kann nicht rueckgängig gemacht werden. Bist du sicher?');\n\n      if (confirmed) {\n        const apiResult = await Object(_services_api__WEBPACK_IMPORTED_MODULE_6__[\"deleteEvent\"])(rowId);\n\n        if (apiResult && apiResult.success) {\n          const data = await Object(_services_api__WEBPACK_IMPORTED_MODULE_6__[\"getData\"])();\n          this.rows = await Object(_services_api__WEBPACK_IMPORTED_MODULE_6__[\"getRowsForEdit\"])(data);\n          return;\n        }\n\n        if (apiResult && apiResult.error) {\n          alert(`Beim Löschen ist ein Fehler aufgetreten: ${apiResult.error}`);\n          return;\n        }\n\n        alert(`Beim Löschen ist ein unbekannter Fehler aufgetreten`);\n      }\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/frontend/components/EditTable.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/FootnoteList.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/components/FootnoteList.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'FootnoteList',\n  props: ['heads'],\n  computed: {\n    footnotes: function () {\n      let footnotes = [];\n      this.heads.forEach(head => {\n        head.footnotes.forEach(footnote => {\n          footnotes.push(footnote);\n        });\n      });\n      return footnotes;\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/frontend/components/FootnoteList.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/IconList.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/components/IconList.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'IconList',\n  props: ['icons', 'additional'],\n  computed: {\n    cleanIcons() {\n      return this.icons ? JSON.parse(this.icons) : [];\n    },\n\n    descriptions() {\n      const map = {};\n      JSON.parse(this.icons).forEach(icon => {\n        map[icon] = false;\n        JSON.parse(this.additional).forEach(iconInfo => {\n          if (iconInfo.icon === icon) {\n            map[icon] = iconInfo.name;\n          }\n        });\n      });\n      return map;\n    }\n\n  }\n});\n\n//# sourceURL=webpack:///./src/frontend/components/IconList.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/InputField.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/components/InputField.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _inputs_DateInput_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputs/DateInput.vue */ \"./src/frontend/components/inputs/DateInput.vue\");\n/* harmony import */ var _inputs_SingleLineInput_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inputs/SingleLineInput.vue */ \"./src/frontend/components/inputs/SingleLineInput.vue\");\n/* harmony import */ var _inputs_MultiLineInput_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inputs/MultiLineInput.vue */ \"./src/frontend/components/inputs/MultiLineInput.vue\");\n/* harmony import */ var _inputs_IconInput_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inputs/IconInput.vue */ \"./src/frontend/components/inputs/IconInput.vue\");\n\n\n\n\nconst mapTypeToComponent = {\n  'date': _inputs_DateInput_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  'text': _inputs_SingleLineInput_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  'longtext': _inputs_MultiLineInput_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  'icons': _inputs_IconInput_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    DateInput: _inputs_DateInput_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    SingleLineInput: _inputs_SingleLineInput_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    MultiLineInput: _inputs_MultiLineInput_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  },\n  name: 'InputField',\n  props: ['value', 'type', 'additional'],\n  render: function (h) {\n    const self = this;\n    return h(mapTypeToComponent[this.type], {\n      props: {\n        value: this.value,\n        additional: this.additional\n      },\n      on: {\n        input: function (payload) {\n          self.$emit('input', payload);\n          self.$emit('stopEditMode');\n        }\n      },\n      domProps: {\n        value: self.value\n      }\n    });\n  }\n});\n\n//# sourceURL=webpack:///./src/frontend/components/InputField.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/RowFilters.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/components/RowFilters.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ArrowToggle_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArrowToggle.vue */ \"./src/frontend/components/ArrowToggle.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'RowFilters',\n  components: {\n    ArrowToggle: _ArrowToggle_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  props: {\n    heads: {\n      type: Array,\n      required: true\n    },\n    value: {\n      type: Array,\n      required: true\n    }\n  },\n\n  data() {\n    return {\n      show: false,\n      actives: []\n    };\n  },\n\n  watch: {\n    actives: function () {\n      this.$emit('input', this.actives);\n    },\n    value: function () {\n      this.actives = this.value;\n    }\n  },\n\n  mounted() {\n    this.actives = this.value;\n  }\n\n});\n\n//# sourceURL=webpack:///./src/frontend/components/RowFilters.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/StaticTable.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/components/StaticTable.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CellContent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CellContent.vue */ \"./src/frontend/components/CellContent.vue\");\n/* harmony import */ var _EditButton_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditButton.vue */ \"./src/frontend/components/EditButton.vue\");\n/* harmony import */ var _TableGroupHeader_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TableGroupHeader.vue */ \"./src/frontend/components/TableGroupHeader.vue\");\n/* harmony import */ var _RowFilters_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RowFilters.vue */ \"./src/frontend/components/RowFilters.vue\");\n/* harmony import */ var _mixins_responsive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mixins/responsive */ \"./src/frontend/components/mixins/responsive.js\");\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api */ \"./src/frontend/services/api.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'StaticTable',\n  components: {\n    CellContent: _CellContent_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    EditButton: _EditButton_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    TableGroupHeader: _TableGroupHeader_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    RowFilters: _RowFilters_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  },\n  mixins: [_mixins_responsive__WEBPACK_IMPORTED_MODULE_4__[\"responsiveMixin\"]],\n\n  data() {\n    return {\n      heads: [],\n      activeHeads: [],\n      configStaticFields: [],\n      yearData: [],\n      mobile: true,\n      activeQuarters: [],\n      years: [new Date().getFullYear()],\n      loaded: false\n    };\n  },\n\n  computed: {\n    getActiveHeads: function () {\n      return this.heads.filter(head => head.active);\n    }\n  },\n\n  async mounted() {\n    const wrapper = document.getElementById('epp_app_static_wrapper');\n\n    if (wrapper) {\n      this.years = wrapper.dataset.years.split(',').map(year => parseInt(year));\n    }\n\n    this.activeQuarters.push(new Date().getFullYear() + '_' + Math.floor(new Date().getMonth() / 3));\n    await this.setData();\n  },\n\n  watch: {\n    activeHeads: function () {\n      localStorage.setItem('activeHeadsStatic', JSON.stringify(this.activeHeads));\n      this.heads.forEach((head, index) => {\n        head.active = this.activeHeads[index];\n      });\n    }\n  },\n  methods: {\n    async setData() {\n      const data = await Object(_services_api__WEBPACK_IMPORTED_MODULE_5__[\"getData\"])();\n      this.configStaticFields = Object(_services_api__WEBPACK_IMPORTED_MODULE_5__[\"getConfig\"])(data).static_fields;\n      this.heads = Object(_services_api__WEBPACK_IMPORTED_MODULE_5__[\"getHeaders\"])(data);\n\n      while (this.yearData.length) {\n        this.yearData.pop();\n      }\n\n      this.years.forEach(year => {\n        this.yearData.push({\n          year,\n          rowsByQuarter: Object(_services_api__WEBPACK_IMPORTED_MODULE_5__[\"getRowsForYear\"])(data, year)\n        });\n      });\n\n      if (localStorage.getItem('activeHeadsStatic')) {\n        const cachedActiveHeads = JSON.parse(localStorage.getItem('activeHeadsStatic'));\n\n        if (cachedActiveHeads.length === this.heads.length) {\n          this.activeHeads = cachedActiveHeads;\n        }\n      }\n\n      if (this.activeHeads.length !== this.heads.length) {\n        // that is, not used the ones from cache because not set or not fitting\n        this.activeHeads = this.heads.map(head => {\n          return this.configStaticFields.indexOf(parseInt(head.id)) > -1;\n        });\n      }\n\n      this.loaded = true;\n    },\n\n    showQuarter(quarterId) {\n      return this.activeQuarters.indexOf(quarterId) > -1;\n    },\n\n    toggleQuarter(quarterId) {\n      const index = this.activeQuarters.indexOf(quarterId);\n\n      if (index === -1) {\n        this.activeQuarters.push(quarterId);\n        return;\n      }\n\n      this.activeQuarters.splice(index, 1);\n    }\n\n  }\n});\n\n//# sourceURL=webpack:///./src/frontend/components/StaticTable.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/TableCell.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/components/TableCell.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _InputField_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputField.vue */ \"./src/frontend/components/InputField.vue\");\n/* harmony import */ var _CellContent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CellContent.vue */ \"./src/frontend/components/CellContent.vue\");\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api */ \"./src/frontend/services/api.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'TableCell',\n  components: {\n    InputField: _InputField_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    CellContent: _CellContent_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n  props: ['head', 'row', 'tag'],\n  data: function () {\n    return {\n      editMode: false,\n      currentHeight: false,\n      cellContent: ''\n    };\n  },\n  computed: {\n    htmlTag() {\n      return this.tag || 'td';\n    },\n\n    inlineStyles() {\n      return this.currentHeight ? {\n        height: this.head.type !== 'icons' ? `${this.currentHeight}px` : 'auto'\n      } : {};\n    }\n\n  },\n  methods: {\n    startEdit: function () {\n      if (!this.editMode) {\n        this.currentHeight = this.$el.clientHeight;\n        this.editMode = true;\n      }\n    },\n    stopEdit: async function () {\n      this.editMode = false;\n      this.currentHeight = false;\n      const apiResult = await Object(_services_api__WEBPACK_IMPORTED_MODULE_2__[\"updateEvent\"])(this.row.id, this.head.id, this.cellContent, this.head.type);\n\n      if (apiResult && apiResult.error) {\n        alert(`Beim Bearbeiten ist ein Fehler aufgetreten: ${apiResult.error}`);\n      }\n    }\n  },\n  created: function () {\n    this.cellContent = this.row.fields[this.head.id];\n  }\n});\n\n//# sourceURL=webpack:///./src/frontend/components/TableCell.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/TableGroupHeader.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/components/TableGroupHeader.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ArrowToggle_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArrowToggle.vue */ \"./src/frontend/components/ArrowToggle.vue\");\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'TableGroupHeader',\n  components: {\n    ArrowToggle: _ArrowToggle_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  props: ['text', 'open', 'cols']\n});\n\n//# sourceURL=webpack:///./src/frontend/components/TableGroupHeader.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/TableHead.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/components/TableHead.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'TableHead',\n  props: ['text', 'description', 'footnotes']\n});\n\n//# sourceURL=webpack:///./src/frontend/components/TableHead.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/TableView.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/components/TableView.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TableHead_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableHead.vue */ \"./src/frontend/components/TableHead.vue\");\n/* harmony import */ var _TableCell_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableCell.vue */ \"./src/frontend/components/TableCell.vue\");\n/* harmony import */ var _TableGroupHeader_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TableGroupHeader.vue */ \"./src/frontend/components/TableGroupHeader.vue\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash.debounce */ \"./node_modules/lodash.debounce/index.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_3__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nconst COL_WIDTH = 305;\nconst HEAD_COL_WIDTH = 197;\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'TableView',\n  components: {\n    TableHead: _TableHead_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    TableCell: _TableCell_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    TableGroupHeader: _TableGroupHeader_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  },\n  props: ['heads', 'groups', 'rows', 'paginate'],\n\n  data() {\n    return {\n      activeGroups: [],\n      page: 1,\n      rowsPerPage: 2,\n      showActions: window.eventPlannerApp && window.eventPlannerApp.admin\n    };\n  },\n\n  computed: {\n    rowsToShow: function () {\n      if (this.paginate) {\n        const startRow = (this.page - 1) * this.rowsPerPage;\n        const endRow = startRow + this.rowsPerPage;\n        return this.rows.slice(startRow, endRow);\n      }\n\n      return this.rows;\n    },\n    tableViewClass: function () {\n      return {\n        'table--view-small': this.rowsToShow.length < 2\n      };\n    },\n    activeHeads: function () {\n      return this.heads.filter(head => head.active);\n    }\n  },\n  watch: {\n    activeGroups: function () {\n      localStorage.setItem('activeGroups', JSON.stringify(this.activeGroups));\n    }\n  },\n  mounted: function () {\n    if (localStorage.getItem('activeGroups')) {\n      this.activeGroups = JSON.parse(localStorage.getItem('activeGroups'));\n    }\n\n    this.calcColNum();\n    window.addEventListener('resize', lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default()(this.calcColNum, 500));\n  },\n  methods: {\n    startGroup: function (headIndex) {\n      return this.activeHeads[headIndex].group_id && ( // current head belongs to a group and ...\n      headIndex === 0 || !this.activeHeads[headIndex - 1].group_id); // ... is the first head or the head before it does not belong to a group\n    },\n    toggleGroup: function (groupID) {\n      const index = this.activeGroups.indexOf(groupID);\n\n      if (index === -1) {\n        this.activeGroups.push(groupID);\n        return;\n      }\n\n      this.activeGroups.splice(index, 1);\n    },\n    showRow: function (head) {\n      return !head.group_id || this.activeGroups.indexOf(head.group_id) > -1;\n    },\n    rowClass: function (head) {\n      return {\n        'row--group': head.group_id,\n        'row--highlight': head.id === '1'\n      };\n    },\n    calcColNum: function () {\n      this.rowsPerPage = Math.floor((this.$el.clientWidth - HEAD_COL_WIDTH) / COL_WIDTH);\n    },\n    deleteRow: function (rowId) {\n      this.$emit('deleteRow', rowId);\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/frontend/components/TableView.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/inputs/DateInput.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/components/inputs/DateInput.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuejs-datepicker */ \"./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js\");\n/* harmony import */ var _node_modules_vuejs_datepicker_src_locale_translations_de__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vuejs-datepicker/src/locale/translations/de */ \"./node_modules/vuejs-datepicker/src/locale/translations/de.js\");\n/* harmony import */ var vue_click_outside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-click-outside */ \"./node_modules/vue-click-outside/index.js\");\n/* harmony import */ var vue_click_outside__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_click_outside__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mixins_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/input */ \"./src/frontend/components/mixins/input.js\");\n//\n//\n//\n//\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'DateInput',\n  components: {\n    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  data: () => {\n    return {\n      datepickerTranslations: _node_modules_vuejs_datepicker_src_locale_translations_de__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n      firstClick: true\n    };\n  },\n  directives: {\n    ClickOutside: (vue_click_outside__WEBPACK_IMPORTED_MODULE_2___default())\n  },\n  mixins: [_mixins_input__WEBPACK_IMPORTED_MODULE_3__[\"inputMixin\"]],\n  methods: {\n    saveNewValue: function (date) {\n      if (this.firstClick) {\n        this.firstClick = false;\n        return;\n      }\n\n      if (date && typeof date.getTime === 'function') {\n        this.inputContent = date.getTime();\n      }\n\n      _mixins_input__WEBPACK_IMPORTED_MODULE_3__[\"inputMixin\"].methods.saveNewValue.call(this);\n    }\n  },\n  created: function () {\n    this.inputContent = new Date(this.value);\n  }\n});\n\n//# sourceURL=webpack:///./src/frontend/components/inputs/DateInput.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/inputs/IconInput.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/components/inputs/IconInput.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue_click_outside__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-click-outside */ \"./node_modules/vue-click-outside/index.js\");\n/* harmony import */ var vue_click_outside__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_click_outside__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mixins_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixins/input */ \"./src/frontend/components/mixins/input.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'IconInput',\n  data: () => {\n    return {\n      firstClick: true\n    };\n  },\n  props: ['additional'],\n  directives: {\n    ClickOutside: (vue_click_outside__WEBPACK_IMPORTED_MODULE_0___default())\n  },\n  mixins: [_mixins_input__WEBPACK_IMPORTED_MODULE_1__[\"inputMixin\"]],\n  methods: {\n    saveNewValue: function () {\n      if (this.firstClick) {\n        this.firstClick = false;\n        return;\n      }\n\n      this.inputContent = this.inputContent && this.inputContent.length > 0 ? JSON.stringify(this.inputContent) : '[]';\n      _mixins_input__WEBPACK_IMPORTED_MODULE_1__[\"inputMixin\"].methods.saveNewValue.call(this);\n    }\n  },\n  computed: {\n    options() {\n      return JSON.parse(this.additional);\n    }\n\n  },\n  created: function () {\n    this.inputContent = this.value ? JSON.parse(this.value) : [];\n  }\n});\n\n//# sourceURL=webpack:///./src/frontend/components/inputs/IconInput.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/inputs/MultiLineInput.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/components/inputs/MultiLineInput.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mixins_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mixins/input */ \"./src/frontend/components/mixins/input.js\");\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'MultiLineInput',\n  data: function () {\n    return {\n      focusOnStart: true\n    };\n  },\n  mixins: [_mixins_input__WEBPACK_IMPORTED_MODULE_0__[\"inputMixin\"]]\n});\n\n//# sourceURL=webpack:///./src/frontend/components/inputs/MultiLineInput.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/inputs/SingleLineInput.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/components/inputs/SingleLineInput.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mixins_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mixins/input */ \"./src/frontend/components/mixins/input.js\");\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'SingleLineInput',\n  data: function () {\n    return {\n      focusOnStart: true\n    };\n  },\n  mixins: [_mixins_input__WEBPACK_IMPORTED_MODULE_0__[\"inputMixin\"]]\n});\n\n//# sourceURL=webpack:///./src/frontend/components/inputs/SingleLineInput.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/App.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/App.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/frontend/App.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/AppStatic.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/AppStatic.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/frontend/AppStatic.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/AddButton.vue?vue&type=style&index=0&id=2c18daa4&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/components/AddButton.vue?vue&type=style&index=0&id=2c18daa4&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/frontend/components/AddButton.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/ArrowToggle.vue?vue&type=style&index=0&id=6d8c1278&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/components/ArrowToggle.vue?vue&type=style&index=0&id=6d8c1278&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/frontend/components/ArrowToggle.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/CardView.vue?vue&type=style&index=0&id=9800b1ac&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/components/CardView.vue?vue&type=style&index=0&id=9800b1ac&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/frontend/components/CardView.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/EditButton.vue?vue&type=style&index=0&id=0e552071&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/components/EditButton.vue?vue&type=style&index=0&id=0e552071&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/frontend/components/EditButton.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/FootnoteList.vue?vue&type=style&index=0&id=35249c73&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/components/FootnoteList.vue?vue&type=style&index=0&id=35249c73&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/frontend/components/FootnoteList.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/IconList.vue?vue&type=style&index=0&id=02b0c10c&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/components/IconList.vue?vue&type=style&index=0&id=02b0c10c&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/frontend/components/IconList.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/RowFilters.vue?vue&type=style&index=0&id=5d886cd6&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/components/RowFilters.vue?vue&type=style&index=0&id=5d886cd6&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/frontend/components/RowFilters.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/StaticTable.vue?vue&type=style&index=0&id=39704b8a&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/components/StaticTable.vue?vue&type=style&index=0&id=39704b8a&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/frontend/components/StaticTable.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/TableCell.vue?vue&type=style&index=0&id=2bc28f4b&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/components/TableCell.vue?vue&type=style&index=0&id=2bc28f4b&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/frontend/components/TableCell.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/TableGroupHeader.vue?vue&type=style&index=0&id=d7c535da&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/components/TableGroupHeader.vue?vue&type=style&index=0&id=d7c535da&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/frontend/components/TableGroupHeader.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/TableHead.vue?vue&type=style&index=0&id=1ff264c9&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/components/TableHead.vue?vue&type=style&index=0&id=1ff264c9&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/frontend/components/TableHead.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/TableView.vue?vue&type=style&index=0&id=ac8a31e4&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/components/TableView.vue?vue&type=style&index=0&id=ac8a31e4&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/frontend/components/TableView.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/inputs/IconInput.vue?vue&type=style&index=0&id=ed248180&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/components/inputs/IconInput.vue?vue&type=style&index=0&id=ed248180&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/frontend/components/inputs/IconInput.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/inputs/MultiLineInput.vue?vue&type=style&index=0&id=558e271e&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/components/inputs/MultiLineInput.vue?vue&type=style&index=0&id=558e271e&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/frontend/components/inputs/MultiLineInput.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/inputs/SingleLineInput.vue?vue&type=style&index=0&id=6edeed06&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/components/inputs/SingleLineInput.vue?vue&type=style&index=0&id=6edeed06&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/frontend/components/inputs/SingleLineInput.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/App.vue?vue&type=template&id=82d33a46&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/App.vue?vue&type=template&id=82d33a46& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { attrs: { id: \"epp_app\" } }, [_c(\"EditTable\")], 1)\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/frontend/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/AppStatic.vue?vue&type=template&id=c391c2aa&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/AppStatic.vue?vue&type=template&id=c391c2aa& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { attrs: { id: \"epp_app_static\" } }, [_c(\"StaticTable\")], 1)\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/frontend/AppStatic.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/AddButton.vue?vue&type=template&id=2c18daa4&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/components/AddButton.vue?vue&type=template&id=2c18daa4&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    [\n      _c(\n        \"button\",\n        {\n          on: {\n            click: function($event) {\n              _vm.showOverlay = true\n            }\n          }\n        },\n        [_vm._v(\"+ Gottesdienst hinzufügen\")]\n      ),\n      _vm._v(\" \"),\n      _c(\n        \"b-modal\",\n        {\n          attrs: { active: _vm.showOverlay },\n          on: {\n            \"update:active\": function($event) {\n              _vm.showOverlay = $event\n            }\n          }\n        },\n        [\n          _c(\n            \"div\",\n            { staticClass: \"add\" },\n            [\n              _vm._v(\"\\n            Bitte Datum auswählen:\\n            \"),\n              _c(\"datepicker\", {\n                staticClass: \"add__datepicker\",\n                attrs: {\n                  language: _vm.datepickerTranslations,\n                  inline: true,\n                  \"open-date\": _vm.lastDate\n                },\n                model: {\n                  value: _vm.date,\n                  callback: function($$v) {\n                    _vm.date = $$v\n                  },\n                  expression: \"date\"\n                }\n              }),\n              _vm._v(\" \"),\n              _c(\"div\", { staticClass: \"add__date\" }, [\n                _vm._v(\n                  \"\\n                \" +\n                    _vm._s(_vm.formatDate) +\n                    \"\\n            \"\n                )\n              ]),\n              _vm._v(\" \"),\n              _c(\n                \"button\",\n                {\n                  staticClass: \"add__button\",\n                  attrs: { disabled: this.date ? false : \"disabled\" },\n                  on: { click: _vm.addDate }\n                },\n                [_vm._v(\"\\n                Hinzufügen\\n            \")]\n              ),\n              _vm._v(\" \"),\n              _c(\n                \"button\",\n                {\n                  staticClass: \"add__button\",\n                  attrs: { disabled: this.date ? false : \"disabled\" },\n                  on: { click: _vm.addDateAndClose }\n                },\n                [\n                  _vm._v(\n                    \"\\n                Hinzufügen & schließen\\n            \"\n                  )\n                ]\n              )\n            ],\n            1\n          )\n        ]\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/frontend/components/AddButton.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/ArrowToggle.vue?vue&type=template&id=6d8c1278&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/components/ArrowToggle.vue?vue&type=template&id=6d8c1278&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"i\", { staticClass: \"arrow\", class: \"arrow--\" + _vm.direction })\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/frontend/components/ArrowToggle.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/CardView.vue?vue&type=template&id=9800b1ac&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/components/CardView.vue?vue&type=template&id=9800b1ac&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"article\",\n    { staticClass: \"card\" },\n    [\n      _c(\n        \"h2\",\n        { staticClass: \"card__title\", on: { click: _vm.toggleShow } },\n        [\n          _c(\"ArrowToggle\", {\n            staticClass: \"arrow--big\",\n            attrs: { direction: _vm.show ? \"down\" : \"right\" }\n          }),\n          _vm._v(\n            \"\\n        \" +\n              _vm._s(_vm._f(\"timestampToLocalString\")(_vm.row.fields[1])) +\n              \"\\n    \"\n          )\n        ],\n        1\n      ),\n      _vm._v(\" \"),\n      _c(\"TableView\", {\n        directives: [\n          {\n            name: \"show\",\n            rawName: \"v-show\",\n            value: _vm.show,\n            expression: \"show\"\n          }\n        ],\n        attrs: {\n          paginate: false,\n          rows: [_vm.row],\n          heads: _vm.heads.slice(1),\n          groups: _vm.groups\n        },\n        on: { deleteRow: _vm.deleteRow }\n      })\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/frontend/components/CardView.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/CellContent.vue?vue&type=template&id=6682b51c&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/components/CellContent.vue?vue&type=template&id=6682b51c&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"span\",\n    [\n      _vm.head.type === \"date\"\n        ? [\n            _vm._v(\n              \"\\n    \" +\n                _vm._s(_vm._f(\"timestampToLocalString\")(_vm.content)) +\n                \"\\n  \"\n            )\n          ]\n        : _vm.head.type === \"icons\"\n        ? [\n            _c(\"IconList\", {\n              attrs: { additional: _vm.head.additional, icons: _vm.content }\n            })\n          ]\n        : [_vm._v(\"\\n    \" + _vm._s(_vm.content) + \"\\n  \")]\n    ],\n    2\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/frontend/components/CellContent.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/EditButton.vue?vue&type=template&id=0e552071&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/components/EditButton.vue?vue&type=template&id=0e552071&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    [\n      _c(\n        \"button\",\n        {\n          on: {\n            click: function($event) {\n              _vm.showOverlay = true\n            }\n          }\n        },\n        [_vm._v(\"\\n        Bearbeiten\\n    \")]\n      ),\n      _vm._v(\" \"),\n      _c(\n        \"b-modal\",\n        {\n          attrs: { active: _vm.showOverlay },\n          on: {\n            \"update:active\": function($event) {\n              _vm.showOverlay = $event\n            },\n            close: _vm.handleClose\n          }\n        },\n        [\n          _c(\n            \"div\",\n            { staticClass: \"edit\" },\n            [\n              _c(\"div\", { ref: \"intro\", staticClass: \"edit__intro\" }, [\n                _vm._v(\"Zum Bearbeiten auf die Felder klicken.\")\n              ]),\n              _vm._v(\" \"),\n              _vm._l(_vm.heads, function(head) {\n                return _c(\n                  \"div\",\n                  { key: head.id },\n                  [\n                    _c(\"strong\", [_vm._v(_vm._s(head.name) + \":\")]),\n                    _c(\"br\"),\n                    _vm._v(\" \"),\n                    _c(\"TableCell\", {\n                      staticClass: \"edit__cell\",\n                      attrs: { head: head, row: _vm.row, tag: \"div\" }\n                    })\n                  ],\n                  1\n                )\n              }),\n              _vm._v(\" \"),\n              _c(\"div\", { staticClass: \"edit__button-wrapper\" }, [\n                _c(\n                  \"button\",\n                  {\n                    staticClass: \"edit__button\",\n                    on: { click: _vm.saveAndClose }\n                  },\n                  [\n                    _vm._v(\n                      \"\\n                    Speichern & Schließen\\n                \"\n                    )\n                  ]\n                )\n              ])\n            ],\n            2\n          )\n        ]\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/frontend/components/EditButton.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/EditTable.vue?vue&type=template&id=9b0dd242&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/components/EditTable.vue?vue&type=template&id=9b0dd242& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    [\n      _c(\"RowFilters\", {\n        directives: [\n          {\n            name: \"show\",\n            rawName: \"v-show\",\n            value: _vm.loaded,\n            expression: \"loaded\"\n          }\n        ],\n        attrs: { heads: _vm.heads },\n        model: {\n          value: _vm.activeHeads,\n          callback: function($$v) {\n            _vm.activeHeads = $$v\n          },\n          expression: \"activeHeads\"\n        }\n      }),\n      _vm._v(\" \"),\n      _vm.mobile && _vm.loaded\n        ? _c(\n            \"div\",\n            _vm._l(_vm.rows, function(row, rowIndex) {\n              return _c(\"CardView\", {\n                key: rowIndex,\n                attrs: {\n                  row: row,\n                  heads: _vm.heads,\n                  groups: _vm.groups,\n                  index: rowIndex\n                },\n                on: { deleteRow: _vm.deleteRow }\n              })\n            }),\n            1\n          )\n        : _vm.loaded\n        ? _c(\"TableView\", {\n            attrs: {\n              paginate: true,\n              heads: _vm.heads,\n              rows: _vm.rows,\n              groups: _vm.groups\n            },\n            on: { deleteRow: _vm.deleteRow }\n          })\n        : _vm._e(),\n      _vm._v(\" \"),\n      _vm.loaded ? _c(\"AddButton\", { on: { addDate: _vm.addRow } }) : _vm._e(),\n      _vm._v(\" \"),\n      _c(\"FootnoteList\", { attrs: { heads: _vm.getActiveHeads } })\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/frontend/components/EditTable.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/FootnoteList.vue?vue&type=template&id=35249c73&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/components/FootnoteList.vue?vue&type=template&id=35249c73&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _vm.footnotes.length > 0\n    ? _c(\"div\", { staticClass: \"footnotes\" }, [\n        _c(\"h3\", [_vm._v(\"Anmerkungen:\")]),\n        _vm._v(\" \"),\n        _c(\n          \"ol\",\n          { staticClass: \"footnote__list\" },\n          _vm._l(_vm.footnotes, function(footnote) {\n            return _c(\n              \"li\",\n              {\n                key: footnote.number,\n                staticClass: \"footnote__item\",\n                attrs: { id: \"footnote_\" + footnote.number }\n              },\n              [\n                _c(\"sup\", [\n                  _vm._v(\n                    \"\\n          \" + _vm._s(footnote.number) + \"\\n        \"\n                  )\n                ]),\n                _vm._v(\"\\n        \" + _vm._s(footnote.text) + \"\\n    \")\n              ]\n            )\n          }),\n          0\n        )\n      ])\n    : _vm._e()\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/frontend/components/FootnoteList.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/IconList.vue?vue&type=template&id=02b0c10c&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/components/IconList.vue?vue&type=template&id=02b0c10c&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"icon-list\" },\n    _vm._l(_vm.cleanIcons, function(icon) {\n      return _c(\"i\", {\n        key: icon,\n        staticClass: \"fa fa-fw\",\n        class: \"fa-\" + icon,\n        attrs: { title: _vm.descriptions[icon] }\n      })\n    }),\n    0\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/frontend/components/IconList.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/RowFilters.vue?vue&type=template&id=5d886cd6&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/components/RowFilters.vue?vue&type=template&id=5d886cd6&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"filters\" }, [\n    _c(\n      \"div\",\n      {\n        staticClass: \"filters__title\",\n        on: {\n          click: function($event) {\n            _vm.show = !_vm.show\n          }\n        }\n      },\n      [\n        _c(\"ArrowToggle\", {\n          attrs: { direction: _vm.show ? \"down\" : \"right\" }\n        }),\n        _vm._v(\" \"),\n        _c(\"strong\", [_vm._v(\"Filter\")])\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _c(\n      \"ul\",\n      {\n        directives: [\n          {\n            name: \"show\",\n            rawName: \"v-show\",\n            value: _vm.show,\n            expression: \"show\"\n          }\n        ],\n        staticClass: \"filters__list\"\n      },\n      _vm._l(_vm.heads, function(head, index) {\n        return _c(\"li\", { key: index, staticClass: \"filters__item\" }, [\n          index > 0\n            ? _c(\"input\", {\n                directives: [\n                  {\n                    name: \"model\",\n                    rawName: \"v-model\",\n                    value: _vm.actives[index],\n                    expression: \"actives[index]\"\n                  }\n                ],\n                attrs: {\n                  type: \"checkbox\",\n                  name: \"filter\",\n                  id: \"filter_\" + index\n                },\n                domProps: {\n                  checked: Array.isArray(_vm.actives[index])\n                    ? _vm._i(_vm.actives[index], null) > -1\n                    : _vm.actives[index]\n                },\n                on: {\n                  change: function($event) {\n                    var $$a = _vm.actives[index],\n                      $$el = $event.target,\n                      $$c = $$el.checked ? true : false\n                    if (Array.isArray($$a)) {\n                      var $$v = null,\n                        $$i = _vm._i($$a, $$v)\n                      if ($$el.checked) {\n                        $$i < 0 &&\n                          _vm.$set(_vm.actives, index, $$a.concat([$$v]))\n                      } else {\n                        $$i > -1 &&\n                          _vm.$set(\n                            _vm.actives,\n                            index,\n                            $$a.slice(0, $$i).concat($$a.slice($$i + 1))\n                          )\n                      }\n                    } else {\n                      _vm.$set(_vm.actives, index, $$c)\n                    }\n                  }\n                }\n              })\n            : _vm._e(),\n          _vm._v(\" \"),\n          index > 0\n            ? _c(\"label\", { attrs: { for: \"filter_\" + index } }, [\n                _vm._v(\n                  \"\\n                \" + _vm._s(head.name) + \"\\n            \"\n                )\n              ])\n            : _vm._e()\n        ])\n      }),\n      0\n    )\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/frontend/components/RowFilters.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/StaticTable.vue?vue&type=template&id=39704b8a&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/components/StaticTable.vue?vue&type=template&id=39704b8a&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    [\n      _c(\"RowFilters\", {\n        directives: [\n          {\n            name: \"show\",\n            rawName: \"v-show\",\n            value: _vm.loaded,\n            expression: \"loaded\"\n          }\n        ],\n        attrs: { heads: _vm.heads },\n        model: {\n          value: _vm.activeHeads,\n          callback: function($$v) {\n            _vm.activeHeads = $$v\n          },\n          expression: \"activeHeads\"\n        }\n      }),\n      _vm._v(\" \"),\n      _vm._l(_vm.yearData, function(year) {\n        return [\n          _c(\"h2\", { key: \"header_\" + year.year, staticClass: \"header\" }, [\n            _vm._v(_vm._s(year.year))\n          ]),\n          _vm._v(\" \"),\n          _vm.getActiveHeads.length > 0\n            ? _c(\"table\", { key: \"table_\" + year.year, staticClass: \"table\" }, [\n                _c(\n                  \"tbody\",\n                  [\n                    _vm.mobile\n                      ? [\n                          _c(\"tr\", [\n                            _c(\"th\", { staticClass: \"cell\" }, [\n                              _vm._v(\" \" + _vm._s(_vm.heads[0].name))\n                            ]),\n                            _vm._v(\" \"),\n                            _c(\"th\", { staticClass: \"cell\" }, [\n                              _vm._v(\" Information \")\n                            ])\n                          ]),\n                          _vm._v(\" \"),\n                          _vm._l(year.rowsByQuarter, function(quarter, index) {\n                            return [\n                              _c(\n                                \"tr\",\n                                { key: \"quarter_\" + index },\n                                [\n                                  _c(\"TableGroupHeader\", {\n                                    attrs: {\n                                      text: \"Quartal \" + (index + 1),\n                                      cols: 2,\n                                      open: _vm.showQuarter(\n                                        year.year + \"_\" + index\n                                      )\n                                    },\n                                    nativeOn: {\n                                      click: function($event) {\n                                        return _vm.toggleQuarter(\n                                          year.year + \"_\" + index\n                                        )\n                                      }\n                                    }\n                                  })\n                                ],\n                                1\n                              ),\n                              _vm._v(\" \"),\n                              _vm.showQuarter(year.year + \"_\" + index)\n                                ? _vm._l(quarter, function(row) {\n                                    return _c(\n                                      \"tr\",\n                                      { key: row.fields[_vm.heads[0].id] },\n                                      [\n                                        _c(\n                                          \"td\",\n                                          { staticClass: \"cell\" },\n                                          [\n                                            _c(\"CellContent\", {\n                                              attrs: {\n                                                head: _vm.heads[0],\n                                                content:\n                                                  row.fields[_vm.heads[0].id]\n                                              }\n                                            }),\n                                            _vm._v(\" \"),\n                                            _c(\"EditButton\", {\n                                              attrs: {\n                                                heads: _vm.getActiveHeads.slice(\n                                                  1\n                                                ),\n                                                row: row\n                                              },\n                                              on: { updated: _vm.setData }\n                                            })\n                                          ],\n                                          1\n                                        ),\n                                        _vm._v(\" \"),\n                                        _c(\"td\", { staticClass: \"cell\" }, [\n                                          _c(\n                                            \"ul\",\n                                            { staticClass: \"list\" },\n                                            _vm._l(\n                                              _vm.getActiveHeads.slice(1),\n                                              function(head) {\n                                                return _c(\n                                                  \"li\",\n                                                  { key: head.id },\n                                                  [\n                                                    _c(\"strong\", [\n                                                      _vm._v(\n                                                        \" \" +\n                                                          _vm._s(head.name) +\n                                                          \": \"\n                                                      )\n                                                    ]),\n                                                    _vm._v(\" \"),\n                                                    _c(\"CellContent\", {\n                                                      attrs: {\n                                                        head: head,\n                                                        content:\n                                                          row.fields[head.id]\n                                                      }\n                                                    })\n                                                  ],\n                                                  1\n                                                )\n                                              }\n                                            ),\n                                            0\n                                          )\n                                        ])\n                                      ]\n                                    )\n                                  })\n                                : _vm._e()\n                            ]\n                          })\n                        ]\n                      : [\n                          _c(\n                            \"tr\",\n                            _vm._l(_vm.getActiveHeads, function(head) {\n                              return _c(\n                                \"th\",\n                                { key: head.id, staticClass: \"cell\" },\n                                [\n                                  _vm._v(\n                                    \"\\n              \" +\n                                      _vm._s(head.name) +\n                                      \"\\n            \"\n                                  )\n                                ]\n                              )\n                            }),\n                            0\n                          ),\n                          _vm._v(\" \"),\n                          _vm._l(year.rowsByQuarter, function(quarter, index) {\n                            return [\n                              _c(\n                                \"tr\",\n                                { key: \"quarter_\" + index },\n                                [\n                                  _c(\"TableGroupHeader\", {\n                                    attrs: {\n                                      text: \"Quartal \" + (index + 1),\n                                      cols: _vm.getActiveHeads.length,\n                                      open: _vm.showQuarter(\n                                        year.year + \"_\" + index\n                                      )\n                                    },\n                                    nativeOn: {\n                                      click: function($event) {\n                                        return _vm.toggleQuarter(\n                                          year.year + \"_\" + index\n                                        )\n                                      }\n                                    }\n                                  })\n                                ],\n                                1\n                              ),\n                              _vm._v(\" \"),\n                              _vm.showQuarter(year.year + \"_\" + index)\n                                ? _vm._l(quarter, function(row) {\n                                    return _c(\n                                      \"tr\",\n                                      { key: row.fields[_vm.heads[0].id] },\n                                      _vm._l(_vm.getActiveHeads, function(\n                                        head,\n                                        headIndex\n                                      ) {\n                                        return _c(\n                                          \"td\",\n                                          { key: head.id, staticClass: \"cell\" },\n                                          [\n                                            _c(\"CellContent\", {\n                                              attrs: {\n                                                head: head,\n                                                content: row.fields[head.id]\n                                              }\n                                            }),\n                                            _vm._v(\" \"),\n                                            headIndex === 0\n                                              ? _c(\"EditButton\", {\n                                                  attrs: {\n                                                    heads: _vm.getActiveHeads.slice(\n                                                      1\n                                                    ),\n                                                    row: row\n                                                  },\n                                                  on: { updated: _vm.setData }\n                                                })\n                                              : _vm._e()\n                                          ],\n                                          1\n                                        )\n                                      }),\n                                      0\n                                    )\n                                  })\n                                : _vm._e()\n                            ]\n                          })\n                        ]\n                  ],\n                  2\n                )\n              ])\n            : _vm._e()\n        ]\n      })\n    ],\n    2\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/frontend/components/StaticTable.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/TableCell.vue?vue&type=template&id=2bc28f4b&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/components/TableCell.vue?vue&type=template&id=2bc28f4b&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    _vm.htmlTag,\n    {\n      tag: \"component\",\n      staticClass: \"cell\",\n      style: _vm.inlineStyles,\n      on: { click: _vm.startEdit, focus: _vm.startEdit }\n    },\n    [\n      !_vm.editMode\n        ? _c(\n            \"div\",\n            {\n              staticClass: \"cell__content\",\n              class: \"cell__content--\" + _vm.head.type\n            },\n            [\n              _c(\"CellContent\", {\n                attrs: { head: _vm.head, content: _vm.cellContent }\n              })\n            ],\n            1\n          )\n        : _c(\"InputField\", {\n            attrs: { type: _vm.head.type, additional: _vm.head.additional },\n            on: { stopEditMode: _vm.stopEdit },\n            model: {\n              value: _vm.cellContent,\n              callback: function($$v) {\n                _vm.cellContent = $$v\n              },\n              expression: \"cellContent\"\n            }\n          })\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/frontend/components/TableCell.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/TableGroupHeader.vue?vue&type=template&id=d7c535da&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/components/TableGroupHeader.vue?vue&type=template&id=d7c535da&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"td\",\n    { staticClass: \"group-header\", attrs: { colspan: _vm.cols } },\n    [\n      _c(\"ArrowToggle\", { attrs: { direction: this.open ? \"down\" : \"right\" } }),\n      _vm._v(\" \"),\n      _c(\"strong\", [_vm._v(_vm._s(_vm.text))])\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/frontend/components/TableGroupHeader.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/TableHead.vue?vue&type=template&id=1ff264c9&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/components/TableHead.vue?vue&type=template&id=1ff264c9&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"th\", { staticClass: \"head\" }, [\n    _vm._v(\"\\n    \" + _vm._s(_vm.text) + \"\\n    \"),\n    _vm.footnotes\n      ? _c(\n          \"sup\",\n          _vm._l(_vm.footnotes, function(footnote) {\n            return _c(\n              \"a\",\n              {\n                key: footnote.number,\n                staticClass: \"head__footnote\",\n                attrs: { href: \"#footnote_\" + footnote.number }\n              },\n              [_vm._v(\"\\n        \" + _vm._s(footnote.number) + \"\\n      \")]\n            )\n          }),\n          0\n        )\n      : _vm._e(),\n    _vm._v(\" \"),\n    _vm.description\n      ? _c(\"small\", { staticClass: \"head__tooltip\" }, [\n          _vm._v(\"\\n      \" + _vm._s(_vm.description) + \"\\n    \")\n        ])\n      : _vm._e()\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/frontend/components/TableHead.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/TableView.vue?vue&type=template&id=ac8a31e4&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/components/TableView.vue?vue&type=template&id=ac8a31e4&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"table-view\", class: _vm.tableViewClass },\n    [\n      _c(\"table\", { staticClass: \"table\" }, [\n        _c(\n          \"tbody\",\n          [\n            _vm._l(_vm.activeHeads, function(head, index) {\n              return [\n                _vm.startGroup(index)\n                  ? _c(\n                      \"tr\",\n                      { key: \"group_head_\" + index, staticClass: \"row\" },\n                      [\n                        _c(\"TableGroupHeader\", {\n                          attrs: {\n                            text: _vm.groups[head.group_id],\n                            open: _vm.activeGroups.indexOf(head.group_id) > -1,\n                            cols: _vm.paginate ? _vm.rowsPerPage + 1 : 2\n                          },\n                          nativeOn: {\n                            click: function($event) {\n                              return _vm.toggleGroup(head.group_id)\n                            }\n                          }\n                        })\n                      ],\n                      1\n                    )\n                  : _vm._e(),\n                _vm._v(\" \"),\n                _c(\n                  \"tr\",\n                  {\n                    directives: [\n                      {\n                        name: \"show\",\n                        rawName: \"v-show\",\n                        value: _vm.showRow(head),\n                        expression: \"showRow(head)\"\n                      }\n                    ],\n                    key: head.id,\n                    staticClass: \"row\",\n                    class: _vm.rowClass(head)\n                  },\n                  [\n                    _c(\"TableHead\", {\n                      attrs: {\n                        text: head.name,\n                        description: head.description,\n                        footnotes: head.footnotes\n                      }\n                    }),\n                    _vm._v(\" \"),\n                    _vm._l(_vm.rowsToShow, function(row, rowIndex) {\n                      return _c(\"TableCell\", {\n                        key: \"row_\" + row.id + \"_\" + rowIndex,\n                        attrs: { head: head, row: row }\n                      })\n                    })\n                  ],\n                  2\n                )\n              ]\n            }),\n            _vm._v(\" \"),\n            _vm.showActions\n              ? _c(\n                  \"tr\",\n                  { staticClass: \"row\" },\n                  [\n                    _c(\"TableHead\", { attrs: { text: \"Aktionen\" } }),\n                    _vm._v(\" \"),\n                    _vm._l(_vm.rowsToShow, function(row, rowIndex) {\n                      return _c(\n                        \"td\",\n                        { key: row.id, staticClass: \"table__cell\" },\n                        [\n                          _c(\n                            \"button\",\n                            {\n                              key: \"delete_\" + row.id + \"_\" + rowIndex,\n                              on: {\n                                click: function($event) {\n                                  return _vm.deleteRow(row.id)\n                                }\n                              }\n                            },\n                            [_vm._v(\"\\n                Löschen\\n            \")]\n                          )\n                        ]\n                      )\n                    })\n                  ],\n                  2\n                )\n              : _vm._e()\n          ],\n          2\n        )\n      ]),\n      _vm._v(\" \"),\n      _vm.paginate\n        ? _c(\"b-pagination\", {\n            attrs: {\n              total: _vm.rows.length,\n              current: _vm.page,\n              simple: false,\n              rounded: false,\n              \"per-page\": _vm.rowsPerPage\n            },\n            on: {\n              \"update:current\": function($event) {\n                _vm.page = $event\n              }\n            }\n          })\n        : _vm._e()\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/frontend/components/TableView.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/inputs/DateInput.vue?vue&type=template&id=235dd7ab&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/components/inputs/DateInput.vue?vue&type=template&id=235dd7ab& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"datepicker\", {\n    directives: [\n      {\n        name: \"click-outside\",\n        rawName: \"v-click-outside\",\n        value: _vm.saveNewValue,\n        expression: \"saveNewValue\"\n      }\n    ],\n    attrs: { language: _vm.datepickerTranslations, inline: true },\n    on: { selected: _vm.saveNewValue },\n    model: {\n      value: _vm.inputContent,\n      callback: function($$v) {\n        _vm.inputContent = $$v\n      },\n      expression: \"inputContent\"\n    }\n  })\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/frontend/components/inputs/DateInput.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/inputs/IconInput.vue?vue&type=template&id=ed248180&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/components/inputs/IconInput.vue?vue&type=template&id=ed248180&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    {\n      directives: [\n        {\n          name: \"click-outside\",\n          rawName: \"v-click-outside\",\n          value: _vm.saveNewValue,\n          expression: \"saveNewValue\"\n        }\n      ],\n      staticClass: \"options\"\n    },\n    _vm._l(_vm.options, function(option) {\n      return _c(\"div\", { key: option.name, staticClass: \"option\" }, [\n        _c(\"input\", {\n          directives: [\n            {\n              name: \"model\",\n              rawName: \"v-model\",\n              value: _vm.inputContent,\n              expression: \"inputContent\"\n            }\n          ],\n          attrs: { type: \"checkbox\", id: option.icon },\n          domProps: {\n            value: option.icon,\n            checked: Array.isArray(_vm.inputContent)\n              ? _vm._i(_vm.inputContent, option.icon) > -1\n              : _vm.inputContent\n          },\n          on: {\n            change: function($event) {\n              var $$a = _vm.inputContent,\n                $$el = $event.target,\n                $$c = $$el.checked ? true : false\n              if (Array.isArray($$a)) {\n                var $$v = option.icon,\n                  $$i = _vm._i($$a, $$v)\n                if ($$el.checked) {\n                  $$i < 0 && (_vm.inputContent = $$a.concat([$$v]))\n                } else {\n                  $$i > -1 &&\n                    (_vm.inputContent = $$a\n                      .slice(0, $$i)\n                      .concat($$a.slice($$i + 1)))\n                }\n              } else {\n                _vm.inputContent = $$c\n              }\n            }\n          }\n        }),\n        _vm._v(\" \"),\n        _c(\"label\", { attrs: { for: option.icon } }, [\n          _c(\"i\", { staticClass: \"fa\", class: \"fa-\" + option.icon }),\n          _vm._v(\"\\n      \" + _vm._s(option.name) + \"\\n    \")\n        ])\n      ])\n    }),\n    0\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/frontend/components/inputs/IconInput.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/inputs/MultiLineInput.vue?vue&type=template&id=558e271e&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/components/inputs/MultiLineInput.vue?vue&type=template&id=558e271e&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"textarea\", {\n    directives: [\n      {\n        name: \"model\",\n        rawName: \"v-model\",\n        value: _vm.inputContent,\n        expression: \"inputContent\"\n      }\n    ],\n    ref: \"inputField\",\n    staticClass: \"textarea\",\n    domProps: { value: _vm.inputContent },\n    on: {\n      blur: _vm.saveNewValue,\n      keydown: function($event) {\n        if (\n          !$event.type.indexOf(\"key\") &&\n          _vm._k($event.keyCode, \"tab\", 9, $event.key, \"Tab\")\n        ) {\n          return null\n        }\n        return _vm.saveNewValue($event)\n      },\n      input: function($event) {\n        if ($event.target.composing) {\n          return\n        }\n        _vm.inputContent = $event.target.value\n      }\n    }\n  })\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/frontend/components/inputs/MultiLineInput.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/inputs/SingleLineInput.vue?vue&type=template&id=6edeed06&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/components/inputs/SingleLineInput.vue?vue&type=template&id=6edeed06&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"input\", {\n    directives: [\n      {\n        name: \"model\",\n        rawName: \"v-model\",\n        value: _vm.inputContent,\n        expression: \"inputContent\"\n      }\n    ],\n    ref: \"inputField\",\n    staticClass: \"input\",\n    attrs: { type: \"text\" },\n    domProps: { value: _vm.inputContent },\n    on: {\n      blur: _vm.saveNewValue,\n      keydown: function($event) {\n        if (\n          !$event.type.indexOf(\"key\") &&\n          _vm._k($event.keyCode, \"enter\", 13, $event.key, \"Enter\") &&\n          _vm._k($event.keyCode, \"tab\", 9, $event.key, \"Tab\")\n        ) {\n          return null\n        }\n        return _vm.saveNewValue($event)\n      },\n      input: function($event) {\n        if ($event.target.composing) {\n          return\n        }\n        _vm.inputContent = $event.target.value\n      }\n    }\n  })\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/frontend/components/inputs/SingleLineInput.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/frontend/App.vue":
/*!******************************!*\
  !*** ./src/frontend/App.vue ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_82d33a46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=82d33a46& */ \"./src/frontend/App.vue?vue&type=template&id=82d33a46&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./src/frontend/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./src/frontend/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_82d33a46___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_82d33a46___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/frontend/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/frontend/App.vue?");

/***/ }),

/***/ "./src/frontend/App.vue?vue&type=script&lang=js&":
/*!*******************************************************!*\
  !*** ./src/frontend/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/frontend/App.vue?");

/***/ }),

/***/ "./src/frontend/App.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************!*\
  !*** ./src/frontend/App.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/frontend/App.vue?");

/***/ }),

/***/ "./src/frontend/App.vue?vue&type=template&id=82d33a46&":
/*!*************************************************************!*\
  !*** ./src/frontend/App.vue?vue&type=template&id=82d33a46& ***!
  \*************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_82d33a46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=82d33a46& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/App.vue?vue&type=template&id=82d33a46&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_82d33a46___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_82d33a46___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/frontend/App.vue?");

/***/ }),

/***/ "./src/frontend/AppStatic.vue":
/*!************************************!*\
  !*** ./src/frontend/AppStatic.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AppStatic_vue_vue_type_template_id_c391c2aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppStatic.vue?vue&type=template&id=c391c2aa& */ \"./src/frontend/AppStatic.vue?vue&type=template&id=c391c2aa&\");\n/* harmony import */ var _AppStatic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppStatic.vue?vue&type=script&lang=js& */ \"./src/frontend/AppStatic.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _AppStatic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppStatic.vue?vue&type=style&index=0&lang=css& */ \"./src/frontend/AppStatic.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _AppStatic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _AppStatic_vue_vue_type_template_id_c391c2aa___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _AppStatic_vue_vue_type_template_id_c391c2aa___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/frontend/AppStatic.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/frontend/AppStatic.vue?");

/***/ }),

/***/ "./src/frontend/AppStatic.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./src/frontend/AppStatic.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppStatic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./AppStatic.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/AppStatic.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppStatic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/frontend/AppStatic.vue?");

/***/ }),

/***/ "./src/frontend/AppStatic.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************!*\
  !*** ./src/frontend/AppStatic.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppStatic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./AppStatic.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/AppStatic.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppStatic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppStatic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppStatic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppStatic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppStatic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/frontend/AppStatic.vue?");

/***/ }),

/***/ "./src/frontend/AppStatic.vue?vue&type=template&id=c391c2aa&":
/*!*******************************************************************!*\
  !*** ./src/frontend/AppStatic.vue?vue&type=template&id=c391c2aa& ***!
  \*******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppStatic_vue_vue_type_template_id_c391c2aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./AppStatic.vue?vue&type=template&id=c391c2aa& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/AppStatic.vue?vue&type=template&id=c391c2aa&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppStatic_vue_vue_type_template_id_c391c2aa___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppStatic_vue_vue_type_template_id_c391c2aa___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/frontend/AppStatic.vue?");

/***/ }),

/***/ "./src/frontend/assets/css/general_styles.css":
/*!****************************************************!*\
  !*** ./src/frontend/assets/css/general_styles.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/frontend/assets/css/general_styles.css?");

/***/ }),

/***/ "./src/frontend/components/AddButton.vue":
/*!***********************************************!*\
  !*** ./src/frontend/components/AddButton.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AddButton_vue_vue_type_template_id_2c18daa4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddButton.vue?vue&type=template&id=2c18daa4&scoped=true& */ \"./src/frontend/components/AddButton.vue?vue&type=template&id=2c18daa4&scoped=true&\");\n/* harmony import */ var _AddButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddButton.vue?vue&type=script&lang=js& */ \"./src/frontend/components/AddButton.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _AddButton_vue_vue_type_style_index_0_id_2c18daa4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddButton.vue?vue&type=style&index=0&id=2c18daa4&scoped=true&lang=css& */ \"./src/frontend/components/AddButton.vue?vue&type=style&index=0&id=2c18daa4&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _AddButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _AddButton_vue_vue_type_template_id_2c18daa4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _AddButton_vue_vue_type_template_id_2c18daa4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"2c18daa4\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/frontend/components/AddButton.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/frontend/components/AddButton.vue?");

/***/ }),

/***/ "./src/frontend/components/AddButton.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./src/frontend/components/AddButton.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./AddButton.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/AddButton.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/frontend/components/AddButton.vue?");

/***/ }),

/***/ "./src/frontend/components/AddButton.vue?vue&type=style&index=0&id=2c18daa4&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./src/frontend/components/AddButton.vue?vue&type=style&index=0&id=2c18daa4&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddButton_vue_vue_type_style_index_0_id_2c18daa4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./AddButton.vue?vue&type=style&index=0&id=2c18daa4&scoped=true&lang=css& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/AddButton.vue?vue&type=style&index=0&id=2c18daa4&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddButton_vue_vue_type_style_index_0_id_2c18daa4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddButton_vue_vue_type_style_index_0_id_2c18daa4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddButton_vue_vue_type_style_index_0_id_2c18daa4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddButton_vue_vue_type_style_index_0_id_2c18daa4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddButton_vue_vue_type_style_index_0_id_2c18daa4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/frontend/components/AddButton.vue?");

/***/ }),

/***/ "./src/frontend/components/AddButton.vue?vue&type=template&id=2c18daa4&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./src/frontend/components/AddButton.vue?vue&type=template&id=2c18daa4&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddButton_vue_vue_type_template_id_2c18daa4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AddButton.vue?vue&type=template&id=2c18daa4&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/AddButton.vue?vue&type=template&id=2c18daa4&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddButton_vue_vue_type_template_id_2c18daa4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddButton_vue_vue_type_template_id_2c18daa4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/frontend/components/AddButton.vue?");

/***/ }),

/***/ "./src/frontend/components/ArrowToggle.vue":
/*!*************************************************!*\
  !*** ./src/frontend/components/ArrowToggle.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ArrowToggle_vue_vue_type_template_id_6d8c1278_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArrowToggle.vue?vue&type=template&id=6d8c1278&scoped=true& */ \"./src/frontend/components/ArrowToggle.vue?vue&type=template&id=6d8c1278&scoped=true&\");\n/* harmony import */ var _ArrowToggle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ArrowToggle.vue?vue&type=script&lang=js& */ \"./src/frontend/components/ArrowToggle.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _ArrowToggle_vue_vue_type_style_index_0_id_6d8c1278_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ArrowToggle.vue?vue&type=style&index=0&id=6d8c1278&scoped=true&lang=css& */ \"./src/frontend/components/ArrowToggle.vue?vue&type=style&index=0&id=6d8c1278&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _ArrowToggle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _ArrowToggle_vue_vue_type_template_id_6d8c1278_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _ArrowToggle_vue_vue_type_template_id_6d8c1278_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"6d8c1278\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/frontend/components/ArrowToggle.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/frontend/components/ArrowToggle.vue?");

/***/ }),

/***/ "./src/frontend/components/ArrowToggle.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./src/frontend/components/ArrowToggle.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ArrowToggle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./ArrowToggle.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/ArrowToggle.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ArrowToggle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/frontend/components/ArrowToggle.vue?");

/***/ }),

/***/ "./src/frontend/components/ArrowToggle.vue?vue&type=style&index=0&id=6d8c1278&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./src/frontend/components/ArrowToggle.vue?vue&type=style&index=0&id=6d8c1278&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ArrowToggle_vue_vue_type_style_index_0_id_6d8c1278_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./ArrowToggle.vue?vue&type=style&index=0&id=6d8c1278&scoped=true&lang=css& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/ArrowToggle.vue?vue&type=style&index=0&id=6d8c1278&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ArrowToggle_vue_vue_type_style_index_0_id_6d8c1278_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ArrowToggle_vue_vue_type_style_index_0_id_6d8c1278_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ArrowToggle_vue_vue_type_style_index_0_id_6d8c1278_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ArrowToggle_vue_vue_type_style_index_0_id_6d8c1278_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ArrowToggle_vue_vue_type_style_index_0_id_6d8c1278_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/frontend/components/ArrowToggle.vue?");

/***/ }),

/***/ "./src/frontend/components/ArrowToggle.vue?vue&type=template&id=6d8c1278&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./src/frontend/components/ArrowToggle.vue?vue&type=template&id=6d8c1278&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ArrowToggle_vue_vue_type_template_id_6d8c1278_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ArrowToggle.vue?vue&type=template&id=6d8c1278&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/ArrowToggle.vue?vue&type=template&id=6d8c1278&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ArrowToggle_vue_vue_type_template_id_6d8c1278_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ArrowToggle_vue_vue_type_template_id_6d8c1278_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/frontend/components/ArrowToggle.vue?");

/***/ }),

/***/ "./src/frontend/components/CardView.vue":
/*!**********************************************!*\
  !*** ./src/frontend/components/CardView.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CardView_vue_vue_type_template_id_9800b1ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardView.vue?vue&type=template&id=9800b1ac&scoped=true& */ \"./src/frontend/components/CardView.vue?vue&type=template&id=9800b1ac&scoped=true&\");\n/* harmony import */ var _CardView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardView.vue?vue&type=script&lang=js& */ \"./src/frontend/components/CardView.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _CardView_vue_vue_type_style_index_0_id_9800b1ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CardView.vue?vue&type=style&index=0&id=9800b1ac&scoped=true&lang=css& */ \"./src/frontend/components/CardView.vue?vue&type=style&index=0&id=9800b1ac&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _CardView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _CardView_vue_vue_type_template_id_9800b1ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _CardView_vue_vue_type_template_id_9800b1ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"9800b1ac\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/frontend/components/CardView.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/frontend/components/CardView.vue?");

/***/ }),

/***/ "./src/frontend/components/CardView.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./src/frontend/components/CardView.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CardView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./CardView.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/CardView.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CardView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/frontend/components/CardView.vue?");

/***/ }),

/***/ "./src/frontend/components/CardView.vue?vue&type=style&index=0&id=9800b1ac&scoped=true&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./src/frontend/components/CardView.vue?vue&type=style&index=0&id=9800b1ac&scoped=true&lang=css& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CardView_vue_vue_type_style_index_0_id_9800b1ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./CardView.vue?vue&type=style&index=0&id=9800b1ac&scoped=true&lang=css& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/CardView.vue?vue&type=style&index=0&id=9800b1ac&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CardView_vue_vue_type_style_index_0_id_9800b1ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CardView_vue_vue_type_style_index_0_id_9800b1ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CardView_vue_vue_type_style_index_0_id_9800b1ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CardView_vue_vue_type_style_index_0_id_9800b1ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CardView_vue_vue_type_style_index_0_id_9800b1ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/frontend/components/CardView.vue?");

/***/ }),

/***/ "./src/frontend/components/CardView.vue?vue&type=template&id=9800b1ac&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./src/frontend/components/CardView.vue?vue&type=template&id=9800b1ac&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardView_vue_vue_type_template_id_9800b1ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CardView.vue?vue&type=template&id=9800b1ac&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/CardView.vue?vue&type=template&id=9800b1ac&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardView_vue_vue_type_template_id_9800b1ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardView_vue_vue_type_template_id_9800b1ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/frontend/components/CardView.vue?");

/***/ }),

/***/ "./src/frontend/components/CellContent.vue":
/*!*************************************************!*\
  !*** ./src/frontend/components/CellContent.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CellContent_vue_vue_type_template_id_6682b51c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CellContent.vue?vue&type=template&id=6682b51c&scoped=true& */ \"./src/frontend/components/CellContent.vue?vue&type=template&id=6682b51c&scoped=true&\");\n/* harmony import */ var _CellContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CellContent.vue?vue&type=script&lang=js& */ \"./src/frontend/components/CellContent.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _CellContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _CellContent_vue_vue_type_template_id_6682b51c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _CellContent_vue_vue_type_template_id_6682b51c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"6682b51c\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/frontend/components/CellContent.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/frontend/components/CellContent.vue?");

/***/ }),

/***/ "./src/frontend/components/CellContent.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./src/frontend/components/CellContent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CellContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./CellContent.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/CellContent.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CellContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/frontend/components/CellContent.vue?");

/***/ }),

/***/ "./src/frontend/components/CellContent.vue?vue&type=template&id=6682b51c&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./src/frontend/components/CellContent.vue?vue&type=template&id=6682b51c&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CellContent_vue_vue_type_template_id_6682b51c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CellContent.vue?vue&type=template&id=6682b51c&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/CellContent.vue?vue&type=template&id=6682b51c&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CellContent_vue_vue_type_template_id_6682b51c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CellContent_vue_vue_type_template_id_6682b51c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/frontend/components/CellContent.vue?");

/***/ }),

/***/ "./src/frontend/components/EditButton.vue":
/*!************************************************!*\
  !*** ./src/frontend/components/EditButton.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _EditButton_vue_vue_type_template_id_0e552071_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditButton.vue?vue&type=template&id=0e552071&scoped=true& */ \"./src/frontend/components/EditButton.vue?vue&type=template&id=0e552071&scoped=true&\");\n/* harmony import */ var _EditButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditButton.vue?vue&type=script&lang=js& */ \"./src/frontend/components/EditButton.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _EditButton_vue_vue_type_style_index_0_id_0e552071_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditButton.vue?vue&type=style&index=0&id=0e552071&scoped=true&lang=css& */ \"./src/frontend/components/EditButton.vue?vue&type=style&index=0&id=0e552071&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _EditButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _EditButton_vue_vue_type_template_id_0e552071_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _EditButton_vue_vue_type_template_id_0e552071_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"0e552071\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/frontend/components/EditButton.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/frontend/components/EditButton.vue?");

/***/ }),

/***/ "./src/frontend/components/EditButton.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/frontend/components/EditButton.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./EditButton.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/EditButton.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/frontend/components/EditButton.vue?");

/***/ }),

/***/ "./src/frontend/components/EditButton.vue?vue&type=style&index=0&id=0e552071&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./src/frontend/components/EditButton.vue?vue&type=style&index=0&id=0e552071&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditButton_vue_vue_type_style_index_0_id_0e552071_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./EditButton.vue?vue&type=style&index=0&id=0e552071&scoped=true&lang=css& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/EditButton.vue?vue&type=style&index=0&id=0e552071&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditButton_vue_vue_type_style_index_0_id_0e552071_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditButton_vue_vue_type_style_index_0_id_0e552071_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditButton_vue_vue_type_style_index_0_id_0e552071_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditButton_vue_vue_type_style_index_0_id_0e552071_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditButton_vue_vue_type_style_index_0_id_0e552071_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/frontend/components/EditButton.vue?");

/***/ }),

/***/ "./src/frontend/components/EditButton.vue?vue&type=template&id=0e552071&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./src/frontend/components/EditButton.vue?vue&type=template&id=0e552071&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditButton_vue_vue_type_template_id_0e552071_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./EditButton.vue?vue&type=template&id=0e552071&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/EditButton.vue?vue&type=template&id=0e552071&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditButton_vue_vue_type_template_id_0e552071_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditButton_vue_vue_type_template_id_0e552071_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/frontend/components/EditButton.vue?");

/***/ }),

/***/ "./src/frontend/components/EditTable.vue":
/*!***********************************************!*\
  !*** ./src/frontend/components/EditTable.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _EditTable_vue_vue_type_template_id_9b0dd242___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditTable.vue?vue&type=template&id=9b0dd242& */ \"./src/frontend/components/EditTable.vue?vue&type=template&id=9b0dd242&\");\n/* harmony import */ var _EditTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditTable.vue?vue&type=script&lang=js& */ \"./src/frontend/components/EditTable.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _EditTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _EditTable_vue_vue_type_template_id_9b0dd242___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _EditTable_vue_vue_type_template_id_9b0dd242___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/frontend/components/EditTable.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/frontend/components/EditTable.vue?");

/***/ }),

/***/ "./src/frontend/components/EditTable.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./src/frontend/components/EditTable.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./EditTable.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/EditTable.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/frontend/components/EditTable.vue?");

/***/ }),

/***/ "./src/frontend/components/EditTable.vue?vue&type=template&id=9b0dd242&":
/*!******************************************************************************!*\
  !*** ./src/frontend/components/EditTable.vue?vue&type=template&id=9b0dd242& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditTable_vue_vue_type_template_id_9b0dd242___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./EditTable.vue?vue&type=template&id=9b0dd242& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/EditTable.vue?vue&type=template&id=9b0dd242&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditTable_vue_vue_type_template_id_9b0dd242___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditTable_vue_vue_type_template_id_9b0dd242___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/frontend/components/EditTable.vue?");

/***/ }),

/***/ "./src/frontend/components/FootnoteList.vue":
/*!**************************************************!*\
  !*** ./src/frontend/components/FootnoteList.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _FootnoteList_vue_vue_type_template_id_35249c73_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FootnoteList.vue?vue&type=template&id=35249c73&scoped=true& */ \"./src/frontend/components/FootnoteList.vue?vue&type=template&id=35249c73&scoped=true&\");\n/* harmony import */ var _FootnoteList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FootnoteList.vue?vue&type=script&lang=js& */ \"./src/frontend/components/FootnoteList.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _FootnoteList_vue_vue_type_style_index_0_id_35249c73_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FootnoteList.vue?vue&type=style&index=0&id=35249c73&scoped=true&lang=css& */ \"./src/frontend/components/FootnoteList.vue?vue&type=style&index=0&id=35249c73&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _FootnoteList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _FootnoteList_vue_vue_type_template_id_35249c73_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _FootnoteList_vue_vue_type_template_id_35249c73_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"35249c73\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/frontend/components/FootnoteList.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/frontend/components/FootnoteList.vue?");

/***/ }),

/***/ "./src/frontend/components/FootnoteList.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./src/frontend/components/FootnoteList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FootnoteList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./FootnoteList.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/FootnoteList.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FootnoteList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/frontend/components/FootnoteList.vue?");

/***/ }),

/***/ "./src/frontend/components/FootnoteList.vue?vue&type=style&index=0&id=35249c73&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./src/frontend/components/FootnoteList.vue?vue&type=style&index=0&id=35249c73&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FootnoteList_vue_vue_type_style_index_0_id_35249c73_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./FootnoteList.vue?vue&type=style&index=0&id=35249c73&scoped=true&lang=css& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/FootnoteList.vue?vue&type=style&index=0&id=35249c73&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FootnoteList_vue_vue_type_style_index_0_id_35249c73_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FootnoteList_vue_vue_type_style_index_0_id_35249c73_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FootnoteList_vue_vue_type_style_index_0_id_35249c73_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FootnoteList_vue_vue_type_style_index_0_id_35249c73_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FootnoteList_vue_vue_type_style_index_0_id_35249c73_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/frontend/components/FootnoteList.vue?");

/***/ }),

/***/ "./src/frontend/components/FootnoteList.vue?vue&type=template&id=35249c73&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./src/frontend/components/FootnoteList.vue?vue&type=template&id=35249c73&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FootnoteList_vue_vue_type_template_id_35249c73_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./FootnoteList.vue?vue&type=template&id=35249c73&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/FootnoteList.vue?vue&type=template&id=35249c73&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FootnoteList_vue_vue_type_template_id_35249c73_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FootnoteList_vue_vue_type_template_id_35249c73_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/frontend/components/FootnoteList.vue?");

/***/ }),

/***/ "./src/frontend/components/IconList.vue":
/*!**********************************************!*\
  !*** ./src/frontend/components/IconList.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _IconList_vue_vue_type_template_id_02b0c10c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IconList.vue?vue&type=template&id=02b0c10c&scoped=true& */ \"./src/frontend/components/IconList.vue?vue&type=template&id=02b0c10c&scoped=true&\");\n/* harmony import */ var _IconList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IconList.vue?vue&type=script&lang=js& */ \"./src/frontend/components/IconList.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _IconList_vue_vue_type_style_index_0_id_02b0c10c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IconList.vue?vue&type=style&index=0&id=02b0c10c&scoped=true&lang=css& */ \"./src/frontend/components/IconList.vue?vue&type=style&index=0&id=02b0c10c&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _IconList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _IconList_vue_vue_type_template_id_02b0c10c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _IconList_vue_vue_type_template_id_02b0c10c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"02b0c10c\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/frontend/components/IconList.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/frontend/components/IconList.vue?");

/***/ }),

/***/ "./src/frontend/components/IconList.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./src/frontend/components/IconList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_IconList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./IconList.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/IconList.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_IconList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/frontend/components/IconList.vue?");

/***/ }),

/***/ "./src/frontend/components/IconList.vue?vue&type=style&index=0&id=02b0c10c&scoped=true&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./src/frontend/components/IconList.vue?vue&type=style&index=0&id=02b0c10c&scoped=true&lang=css& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_IconList_vue_vue_type_style_index_0_id_02b0c10c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./IconList.vue?vue&type=style&index=0&id=02b0c10c&scoped=true&lang=css& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/IconList.vue?vue&type=style&index=0&id=02b0c10c&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_IconList_vue_vue_type_style_index_0_id_02b0c10c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_IconList_vue_vue_type_style_index_0_id_02b0c10c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_IconList_vue_vue_type_style_index_0_id_02b0c10c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_IconList_vue_vue_type_style_index_0_id_02b0c10c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_IconList_vue_vue_type_style_index_0_id_02b0c10c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/frontend/components/IconList.vue?");

/***/ }),

/***/ "./src/frontend/components/IconList.vue?vue&type=template&id=02b0c10c&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./src/frontend/components/IconList.vue?vue&type=template&id=02b0c10c&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IconList_vue_vue_type_template_id_02b0c10c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./IconList.vue?vue&type=template&id=02b0c10c&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/IconList.vue?vue&type=template&id=02b0c10c&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IconList_vue_vue_type_template_id_02b0c10c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IconList_vue_vue_type_template_id_02b0c10c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/frontend/components/IconList.vue?");

/***/ }),

/***/ "./src/frontend/components/InputField.vue":
/*!************************************************!*\
  !*** ./src/frontend/components/InputField.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _InputField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputField.vue?vue&type=script&lang=js& */ \"./src/frontend/components/InputField.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\nvar render, staticRenderFns\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _InputField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/frontend/components/InputField.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/frontend/components/InputField.vue?");

/***/ }),

/***/ "./src/frontend/components/InputField.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/frontend/components/InputField.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_InputField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./InputField.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/InputField.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_InputField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/frontend/components/InputField.vue?");

/***/ }),

/***/ "./src/frontend/components/RowFilters.vue":
/*!************************************************!*\
  !*** ./src/frontend/components/RowFilters.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _RowFilters_vue_vue_type_template_id_5d886cd6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RowFilters.vue?vue&type=template&id=5d886cd6&scoped=true& */ \"./src/frontend/components/RowFilters.vue?vue&type=template&id=5d886cd6&scoped=true&\");\n/* harmony import */ var _RowFilters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RowFilters.vue?vue&type=script&lang=js& */ \"./src/frontend/components/RowFilters.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _RowFilters_vue_vue_type_style_index_0_id_5d886cd6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RowFilters.vue?vue&type=style&index=0&id=5d886cd6&scoped=true&lang=css& */ \"./src/frontend/components/RowFilters.vue?vue&type=style&index=0&id=5d886cd6&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _RowFilters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _RowFilters_vue_vue_type_template_id_5d886cd6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _RowFilters_vue_vue_type_template_id_5d886cd6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"5d886cd6\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/frontend/components/RowFilters.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/frontend/components/RowFilters.vue?");

/***/ }),

/***/ "./src/frontend/components/RowFilters.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/frontend/components/RowFilters.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RowFilters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./RowFilters.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/RowFilters.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RowFilters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/frontend/components/RowFilters.vue?");

/***/ }),

/***/ "./src/frontend/components/RowFilters.vue?vue&type=style&index=0&id=5d886cd6&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./src/frontend/components/RowFilters.vue?vue&type=style&index=0&id=5d886cd6&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RowFilters_vue_vue_type_style_index_0_id_5d886cd6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./RowFilters.vue?vue&type=style&index=0&id=5d886cd6&scoped=true&lang=css& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/RowFilters.vue?vue&type=style&index=0&id=5d886cd6&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RowFilters_vue_vue_type_style_index_0_id_5d886cd6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RowFilters_vue_vue_type_style_index_0_id_5d886cd6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RowFilters_vue_vue_type_style_index_0_id_5d886cd6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RowFilters_vue_vue_type_style_index_0_id_5d886cd6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RowFilters_vue_vue_type_style_index_0_id_5d886cd6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/frontend/components/RowFilters.vue?");

/***/ }),

/***/ "./src/frontend/components/RowFilters.vue?vue&type=template&id=5d886cd6&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./src/frontend/components/RowFilters.vue?vue&type=template&id=5d886cd6&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RowFilters_vue_vue_type_template_id_5d886cd6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./RowFilters.vue?vue&type=template&id=5d886cd6&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/RowFilters.vue?vue&type=template&id=5d886cd6&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RowFilters_vue_vue_type_template_id_5d886cd6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RowFilters_vue_vue_type_template_id_5d886cd6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/frontend/components/RowFilters.vue?");

/***/ }),

/***/ "./src/frontend/components/StaticTable.vue":
/*!*************************************************!*\
  !*** ./src/frontend/components/StaticTable.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _StaticTable_vue_vue_type_template_id_39704b8a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StaticTable.vue?vue&type=template&id=39704b8a&scoped=true& */ \"./src/frontend/components/StaticTable.vue?vue&type=template&id=39704b8a&scoped=true&\");\n/* harmony import */ var _StaticTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StaticTable.vue?vue&type=script&lang=js& */ \"./src/frontend/components/StaticTable.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _StaticTable_vue_vue_type_style_index_0_id_39704b8a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StaticTable.vue?vue&type=style&index=0&id=39704b8a&scoped=true&lang=css& */ \"./src/frontend/components/StaticTable.vue?vue&type=style&index=0&id=39704b8a&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _StaticTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _StaticTable_vue_vue_type_template_id_39704b8a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _StaticTable_vue_vue_type_template_id_39704b8a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"39704b8a\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/frontend/components/StaticTable.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/frontend/components/StaticTable.vue?");

/***/ }),

/***/ "./src/frontend/components/StaticTable.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./src/frontend/components/StaticTable.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_StaticTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./StaticTable.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/StaticTable.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_StaticTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/frontend/components/StaticTable.vue?");

/***/ }),

/***/ "./src/frontend/components/StaticTable.vue?vue&type=style&index=0&id=39704b8a&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./src/frontend/components/StaticTable.vue?vue&type=style&index=0&id=39704b8a&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_StaticTable_vue_vue_type_style_index_0_id_39704b8a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./StaticTable.vue?vue&type=style&index=0&id=39704b8a&scoped=true&lang=css& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/StaticTable.vue?vue&type=style&index=0&id=39704b8a&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_StaticTable_vue_vue_type_style_index_0_id_39704b8a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_StaticTable_vue_vue_type_style_index_0_id_39704b8a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_StaticTable_vue_vue_type_style_index_0_id_39704b8a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_StaticTable_vue_vue_type_style_index_0_id_39704b8a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_StaticTable_vue_vue_type_style_index_0_id_39704b8a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/frontend/components/StaticTable.vue?");

/***/ }),

/***/ "./src/frontend/components/StaticTable.vue?vue&type=template&id=39704b8a&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./src/frontend/components/StaticTable.vue?vue&type=template&id=39704b8a&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StaticTable_vue_vue_type_template_id_39704b8a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./StaticTable.vue?vue&type=template&id=39704b8a&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/StaticTable.vue?vue&type=template&id=39704b8a&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StaticTable_vue_vue_type_template_id_39704b8a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StaticTable_vue_vue_type_template_id_39704b8a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/frontend/components/StaticTable.vue?");

/***/ }),

/***/ "./src/frontend/components/TableCell.vue":
/*!***********************************************!*\
  !*** ./src/frontend/components/TableCell.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TableCell_vue_vue_type_template_id_2bc28f4b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableCell.vue?vue&type=template&id=2bc28f4b&scoped=true& */ \"./src/frontend/components/TableCell.vue?vue&type=template&id=2bc28f4b&scoped=true&\");\n/* harmony import */ var _TableCell_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableCell.vue?vue&type=script&lang=js& */ \"./src/frontend/components/TableCell.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _TableCell_vue_vue_type_style_index_0_id_2bc28f4b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TableCell.vue?vue&type=style&index=0&id=2bc28f4b&scoped=true&lang=css& */ \"./src/frontend/components/TableCell.vue?vue&type=style&index=0&id=2bc28f4b&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _TableCell_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _TableCell_vue_vue_type_template_id_2bc28f4b_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _TableCell_vue_vue_type_template_id_2bc28f4b_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"2bc28f4b\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/frontend/components/TableCell.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/frontend/components/TableCell.vue?");

/***/ }),

/***/ "./src/frontend/components/TableCell.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./src/frontend/components/TableCell.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TableCell_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./TableCell.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/TableCell.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TableCell_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/frontend/components/TableCell.vue?");

/***/ }),

/***/ "./src/frontend/components/TableCell.vue?vue&type=style&index=0&id=2bc28f4b&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./src/frontend/components/TableCell.vue?vue&type=style&index=0&id=2bc28f4b&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TableCell_vue_vue_type_style_index_0_id_2bc28f4b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./TableCell.vue?vue&type=style&index=0&id=2bc28f4b&scoped=true&lang=css& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/TableCell.vue?vue&type=style&index=0&id=2bc28f4b&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TableCell_vue_vue_type_style_index_0_id_2bc28f4b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TableCell_vue_vue_type_style_index_0_id_2bc28f4b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TableCell_vue_vue_type_style_index_0_id_2bc28f4b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TableCell_vue_vue_type_style_index_0_id_2bc28f4b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TableCell_vue_vue_type_style_index_0_id_2bc28f4b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/frontend/components/TableCell.vue?");

/***/ }),

/***/ "./src/frontend/components/TableCell.vue?vue&type=template&id=2bc28f4b&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./src/frontend/components/TableCell.vue?vue&type=template&id=2bc28f4b&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableCell_vue_vue_type_template_id_2bc28f4b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./TableCell.vue?vue&type=template&id=2bc28f4b&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/TableCell.vue?vue&type=template&id=2bc28f4b&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableCell_vue_vue_type_template_id_2bc28f4b_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableCell_vue_vue_type_template_id_2bc28f4b_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/frontend/components/TableCell.vue?");

/***/ }),

/***/ "./src/frontend/components/TableGroupHeader.vue":
/*!******************************************************!*\
  !*** ./src/frontend/components/TableGroupHeader.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TableGroupHeader_vue_vue_type_template_id_d7c535da_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableGroupHeader.vue?vue&type=template&id=d7c535da&scoped=true& */ \"./src/frontend/components/TableGroupHeader.vue?vue&type=template&id=d7c535da&scoped=true&\");\n/* harmony import */ var _TableGroupHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableGroupHeader.vue?vue&type=script&lang=js& */ \"./src/frontend/components/TableGroupHeader.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _TableGroupHeader_vue_vue_type_style_index_0_id_d7c535da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TableGroupHeader.vue?vue&type=style&index=0&id=d7c535da&scoped=true&lang=css& */ \"./src/frontend/components/TableGroupHeader.vue?vue&type=style&index=0&id=d7c535da&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _TableGroupHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _TableGroupHeader_vue_vue_type_template_id_d7c535da_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _TableGroupHeader_vue_vue_type_template_id_d7c535da_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"d7c535da\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/frontend/components/TableGroupHeader.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/frontend/components/TableGroupHeader.vue?");

/***/ }),

/***/ "./src/frontend/components/TableGroupHeader.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./src/frontend/components/TableGroupHeader.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TableGroupHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./TableGroupHeader.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/TableGroupHeader.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TableGroupHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/frontend/components/TableGroupHeader.vue?");

/***/ }),

/***/ "./src/frontend/components/TableGroupHeader.vue?vue&type=style&index=0&id=d7c535da&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./src/frontend/components/TableGroupHeader.vue?vue&type=style&index=0&id=d7c535da&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TableGroupHeader_vue_vue_type_style_index_0_id_d7c535da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./TableGroupHeader.vue?vue&type=style&index=0&id=d7c535da&scoped=true&lang=css& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/TableGroupHeader.vue?vue&type=style&index=0&id=d7c535da&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TableGroupHeader_vue_vue_type_style_index_0_id_d7c535da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TableGroupHeader_vue_vue_type_style_index_0_id_d7c535da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TableGroupHeader_vue_vue_type_style_index_0_id_d7c535da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TableGroupHeader_vue_vue_type_style_index_0_id_d7c535da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TableGroupHeader_vue_vue_type_style_index_0_id_d7c535da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/frontend/components/TableGroupHeader.vue?");

/***/ }),

/***/ "./src/frontend/components/TableGroupHeader.vue?vue&type=template&id=d7c535da&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./src/frontend/components/TableGroupHeader.vue?vue&type=template&id=d7c535da&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableGroupHeader_vue_vue_type_template_id_d7c535da_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./TableGroupHeader.vue?vue&type=template&id=d7c535da&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/TableGroupHeader.vue?vue&type=template&id=d7c535da&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableGroupHeader_vue_vue_type_template_id_d7c535da_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableGroupHeader_vue_vue_type_template_id_d7c535da_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/frontend/components/TableGroupHeader.vue?");

/***/ }),

/***/ "./src/frontend/components/TableHead.vue":
/*!***********************************************!*\
  !*** ./src/frontend/components/TableHead.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TableHead_vue_vue_type_template_id_1ff264c9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableHead.vue?vue&type=template&id=1ff264c9&scoped=true& */ \"./src/frontend/components/TableHead.vue?vue&type=template&id=1ff264c9&scoped=true&\");\n/* harmony import */ var _TableHead_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableHead.vue?vue&type=script&lang=js& */ \"./src/frontend/components/TableHead.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _TableHead_vue_vue_type_style_index_0_id_1ff264c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TableHead.vue?vue&type=style&index=0&id=1ff264c9&scoped=true&lang=css& */ \"./src/frontend/components/TableHead.vue?vue&type=style&index=0&id=1ff264c9&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _TableHead_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _TableHead_vue_vue_type_template_id_1ff264c9_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _TableHead_vue_vue_type_template_id_1ff264c9_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"1ff264c9\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/frontend/components/TableHead.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/frontend/components/TableHead.vue?");

/***/ }),

/***/ "./src/frontend/components/TableHead.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./src/frontend/components/TableHead.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TableHead_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./TableHead.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/TableHead.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TableHead_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/frontend/components/TableHead.vue?");

/***/ }),

/***/ "./src/frontend/components/TableHead.vue?vue&type=style&index=0&id=1ff264c9&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./src/frontend/components/TableHead.vue?vue&type=style&index=0&id=1ff264c9&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TableHead_vue_vue_type_style_index_0_id_1ff264c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./TableHead.vue?vue&type=style&index=0&id=1ff264c9&scoped=true&lang=css& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/TableHead.vue?vue&type=style&index=0&id=1ff264c9&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TableHead_vue_vue_type_style_index_0_id_1ff264c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TableHead_vue_vue_type_style_index_0_id_1ff264c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TableHead_vue_vue_type_style_index_0_id_1ff264c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TableHead_vue_vue_type_style_index_0_id_1ff264c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TableHead_vue_vue_type_style_index_0_id_1ff264c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/frontend/components/TableHead.vue?");

/***/ }),

/***/ "./src/frontend/components/TableHead.vue?vue&type=template&id=1ff264c9&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./src/frontend/components/TableHead.vue?vue&type=template&id=1ff264c9&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableHead_vue_vue_type_template_id_1ff264c9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./TableHead.vue?vue&type=template&id=1ff264c9&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/TableHead.vue?vue&type=template&id=1ff264c9&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableHead_vue_vue_type_template_id_1ff264c9_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableHead_vue_vue_type_template_id_1ff264c9_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/frontend/components/TableHead.vue?");

/***/ }),

/***/ "./src/frontend/components/TableView.vue":
/*!***********************************************!*\
  !*** ./src/frontend/components/TableView.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TableView_vue_vue_type_template_id_ac8a31e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableView.vue?vue&type=template&id=ac8a31e4&scoped=true& */ \"./src/frontend/components/TableView.vue?vue&type=template&id=ac8a31e4&scoped=true&\");\n/* harmony import */ var _TableView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableView.vue?vue&type=script&lang=js& */ \"./src/frontend/components/TableView.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _TableView_vue_vue_type_style_index_0_id_ac8a31e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TableView.vue?vue&type=style&index=0&id=ac8a31e4&scoped=true&lang=css& */ \"./src/frontend/components/TableView.vue?vue&type=style&index=0&id=ac8a31e4&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _TableView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _TableView_vue_vue_type_template_id_ac8a31e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _TableView_vue_vue_type_template_id_ac8a31e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"ac8a31e4\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/frontend/components/TableView.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/frontend/components/TableView.vue?");

/***/ }),

/***/ "./src/frontend/components/TableView.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./src/frontend/components/TableView.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TableView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./TableView.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/TableView.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TableView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/frontend/components/TableView.vue?");

/***/ }),

/***/ "./src/frontend/components/TableView.vue?vue&type=style&index=0&id=ac8a31e4&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./src/frontend/components/TableView.vue?vue&type=style&index=0&id=ac8a31e4&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TableView_vue_vue_type_style_index_0_id_ac8a31e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./TableView.vue?vue&type=style&index=0&id=ac8a31e4&scoped=true&lang=css& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/TableView.vue?vue&type=style&index=0&id=ac8a31e4&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TableView_vue_vue_type_style_index_0_id_ac8a31e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TableView_vue_vue_type_style_index_0_id_ac8a31e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TableView_vue_vue_type_style_index_0_id_ac8a31e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TableView_vue_vue_type_style_index_0_id_ac8a31e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TableView_vue_vue_type_style_index_0_id_ac8a31e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/frontend/components/TableView.vue?");

/***/ }),

/***/ "./src/frontend/components/TableView.vue?vue&type=template&id=ac8a31e4&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./src/frontend/components/TableView.vue?vue&type=template&id=ac8a31e4&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableView_vue_vue_type_template_id_ac8a31e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./TableView.vue?vue&type=template&id=ac8a31e4&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/TableView.vue?vue&type=template&id=ac8a31e4&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableView_vue_vue_type_template_id_ac8a31e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableView_vue_vue_type_template_id_ac8a31e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/frontend/components/TableView.vue?");

/***/ }),

/***/ "./src/frontend/components/inputs/DateInput.vue":
/*!******************************************************!*\
  !*** ./src/frontend/components/inputs/DateInput.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DateInput_vue_vue_type_template_id_235dd7ab___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DateInput.vue?vue&type=template&id=235dd7ab& */ \"./src/frontend/components/inputs/DateInput.vue?vue&type=template&id=235dd7ab&\");\n/* harmony import */ var _DateInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DateInput.vue?vue&type=script&lang=js& */ \"./src/frontend/components/inputs/DateInput.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _DateInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _DateInput_vue_vue_type_template_id_235dd7ab___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _DateInput_vue_vue_type_template_id_235dd7ab___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/frontend/components/inputs/DateInput.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/frontend/components/inputs/DateInput.vue?");

/***/ }),

/***/ "./src/frontend/components/inputs/DateInput.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./src/frontend/components/inputs/DateInput.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DateInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./DateInput.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/inputs/DateInput.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DateInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/frontend/components/inputs/DateInput.vue?");

/***/ }),

/***/ "./src/frontend/components/inputs/DateInput.vue?vue&type=template&id=235dd7ab&":
/*!*************************************************************************************!*\
  !*** ./src/frontend/components/inputs/DateInput.vue?vue&type=template&id=235dd7ab& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DateInput_vue_vue_type_template_id_235dd7ab___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DateInput.vue?vue&type=template&id=235dd7ab& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/inputs/DateInput.vue?vue&type=template&id=235dd7ab&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DateInput_vue_vue_type_template_id_235dd7ab___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DateInput_vue_vue_type_template_id_235dd7ab___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/frontend/components/inputs/DateInput.vue?");

/***/ }),

/***/ "./src/frontend/components/inputs/IconInput.vue":
/*!******************************************************!*\
  !*** ./src/frontend/components/inputs/IconInput.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _IconInput_vue_vue_type_template_id_ed248180_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IconInput.vue?vue&type=template&id=ed248180&scoped=true& */ \"./src/frontend/components/inputs/IconInput.vue?vue&type=template&id=ed248180&scoped=true&\");\n/* harmony import */ var _IconInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IconInput.vue?vue&type=script&lang=js& */ \"./src/frontend/components/inputs/IconInput.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _IconInput_vue_vue_type_style_index_0_id_ed248180_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IconInput.vue?vue&type=style&index=0&id=ed248180&scoped=true&lang=css& */ \"./src/frontend/components/inputs/IconInput.vue?vue&type=style&index=0&id=ed248180&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _IconInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _IconInput_vue_vue_type_template_id_ed248180_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _IconInput_vue_vue_type_template_id_ed248180_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"ed248180\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/frontend/components/inputs/IconInput.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/frontend/components/inputs/IconInput.vue?");

/***/ }),

/***/ "./src/frontend/components/inputs/IconInput.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./src/frontend/components/inputs/IconInput.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_IconInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./IconInput.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/inputs/IconInput.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_IconInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/frontend/components/inputs/IconInput.vue?");

/***/ }),

/***/ "./src/frontend/components/inputs/IconInput.vue?vue&type=style&index=0&id=ed248180&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./src/frontend/components/inputs/IconInput.vue?vue&type=style&index=0&id=ed248180&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_IconInput_vue_vue_type_style_index_0_id_ed248180_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./IconInput.vue?vue&type=style&index=0&id=ed248180&scoped=true&lang=css& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/inputs/IconInput.vue?vue&type=style&index=0&id=ed248180&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_IconInput_vue_vue_type_style_index_0_id_ed248180_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_IconInput_vue_vue_type_style_index_0_id_ed248180_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_IconInput_vue_vue_type_style_index_0_id_ed248180_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_IconInput_vue_vue_type_style_index_0_id_ed248180_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_IconInput_vue_vue_type_style_index_0_id_ed248180_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/frontend/components/inputs/IconInput.vue?");

/***/ }),

/***/ "./src/frontend/components/inputs/IconInput.vue?vue&type=template&id=ed248180&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./src/frontend/components/inputs/IconInput.vue?vue&type=template&id=ed248180&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IconInput_vue_vue_type_template_id_ed248180_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./IconInput.vue?vue&type=template&id=ed248180&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/inputs/IconInput.vue?vue&type=template&id=ed248180&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IconInput_vue_vue_type_template_id_ed248180_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IconInput_vue_vue_type_template_id_ed248180_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/frontend/components/inputs/IconInput.vue?");

/***/ }),

/***/ "./src/frontend/components/inputs/MultiLineInput.vue":
/*!***********************************************************!*\
  !*** ./src/frontend/components/inputs/MultiLineInput.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MultiLineInput_vue_vue_type_template_id_558e271e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MultiLineInput.vue?vue&type=template&id=558e271e&scoped=true& */ \"./src/frontend/components/inputs/MultiLineInput.vue?vue&type=template&id=558e271e&scoped=true&\");\n/* harmony import */ var _MultiLineInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MultiLineInput.vue?vue&type=script&lang=js& */ \"./src/frontend/components/inputs/MultiLineInput.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _MultiLineInput_vue_vue_type_style_index_0_id_558e271e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MultiLineInput.vue?vue&type=style&index=0&id=558e271e&scoped=true&lang=css& */ \"./src/frontend/components/inputs/MultiLineInput.vue?vue&type=style&index=0&id=558e271e&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _MultiLineInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _MultiLineInput_vue_vue_type_template_id_558e271e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _MultiLineInput_vue_vue_type_template_id_558e271e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"558e271e\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/frontend/components/inputs/MultiLineInput.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/frontend/components/inputs/MultiLineInput.vue?");

/***/ }),

/***/ "./src/frontend/components/inputs/MultiLineInput.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./src/frontend/components/inputs/MultiLineInput.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiLineInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./MultiLineInput.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/inputs/MultiLineInput.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiLineInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/frontend/components/inputs/MultiLineInput.vue?");

/***/ }),

/***/ "./src/frontend/components/inputs/MultiLineInput.vue?vue&type=style&index=0&id=558e271e&scoped=true&lang=css&":
/*!********************************************************************************************************************!*\
  !*** ./src/frontend/components/inputs/MultiLineInput.vue?vue&type=style&index=0&id=558e271e&scoped=true&lang=css& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiLineInput_vue_vue_type_style_index_0_id_558e271e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./MultiLineInput.vue?vue&type=style&index=0&id=558e271e&scoped=true&lang=css& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/inputs/MultiLineInput.vue?vue&type=style&index=0&id=558e271e&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiLineInput_vue_vue_type_style_index_0_id_558e271e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiLineInput_vue_vue_type_style_index_0_id_558e271e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiLineInput_vue_vue_type_style_index_0_id_558e271e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiLineInput_vue_vue_type_style_index_0_id_558e271e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiLineInput_vue_vue_type_style_index_0_id_558e271e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/frontend/components/inputs/MultiLineInput.vue?");

/***/ }),

/***/ "./src/frontend/components/inputs/MultiLineInput.vue?vue&type=template&id=558e271e&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./src/frontend/components/inputs/MultiLineInput.vue?vue&type=template&id=558e271e&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiLineInput_vue_vue_type_template_id_558e271e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MultiLineInput.vue?vue&type=template&id=558e271e&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/inputs/MultiLineInput.vue?vue&type=template&id=558e271e&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiLineInput_vue_vue_type_template_id_558e271e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiLineInput_vue_vue_type_template_id_558e271e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/frontend/components/inputs/MultiLineInput.vue?");

/***/ }),

/***/ "./src/frontend/components/inputs/SingleLineInput.vue":
/*!************************************************************!*\
  !*** ./src/frontend/components/inputs/SingleLineInput.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _SingleLineInput_vue_vue_type_template_id_6edeed06_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SingleLineInput.vue?vue&type=template&id=6edeed06&scoped=true& */ \"./src/frontend/components/inputs/SingleLineInput.vue?vue&type=template&id=6edeed06&scoped=true&\");\n/* harmony import */ var _SingleLineInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SingleLineInput.vue?vue&type=script&lang=js& */ \"./src/frontend/components/inputs/SingleLineInput.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _SingleLineInput_vue_vue_type_style_index_0_id_6edeed06_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SingleLineInput.vue?vue&type=style&index=0&id=6edeed06&scoped=true&lang=css& */ \"./src/frontend/components/inputs/SingleLineInput.vue?vue&type=style&index=0&id=6edeed06&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _SingleLineInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _SingleLineInput_vue_vue_type_template_id_6edeed06_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _SingleLineInput_vue_vue_type_template_id_6edeed06_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"6edeed06\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/frontend/components/inputs/SingleLineInput.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/frontend/components/inputs/SingleLineInput.vue?");

/***/ }),

/***/ "./src/frontend/components/inputs/SingleLineInput.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./src/frontend/components/inputs/SingleLineInput.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleLineInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleLineInput.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/inputs/SingleLineInput.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleLineInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/frontend/components/inputs/SingleLineInput.vue?");

/***/ }),

/***/ "./src/frontend/components/inputs/SingleLineInput.vue?vue&type=style&index=0&id=6edeed06&scoped=true&lang=css&":
/*!*********************************************************************************************************************!*\
  !*** ./src/frontend/components/inputs/SingleLineInput.vue?vue&type=style&index=0&id=6edeed06&scoped=true&lang=css& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleLineInput_vue_vue_type_style_index_0_id_6edeed06_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleLineInput.vue?vue&type=style&index=0&id=6edeed06&scoped=true&lang=css& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/inputs/SingleLineInput.vue?vue&type=style&index=0&id=6edeed06&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleLineInput_vue_vue_type_style_index_0_id_6edeed06_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleLineInput_vue_vue_type_style_index_0_id_6edeed06_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleLineInput_vue_vue_type_style_index_0_id_6edeed06_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleLineInput_vue_vue_type_style_index_0_id_6edeed06_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleLineInput_vue_vue_type_style_index_0_id_6edeed06_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/frontend/components/inputs/SingleLineInput.vue?");

/***/ }),

/***/ "./src/frontend/components/inputs/SingleLineInput.vue?vue&type=template&id=6edeed06&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./src/frontend/components/inputs/SingleLineInput.vue?vue&type=template&id=6edeed06&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleLineInput_vue_vue_type_template_id_6edeed06_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleLineInput.vue?vue&type=template&id=6edeed06&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/components/inputs/SingleLineInput.vue?vue&type=template&id=6edeed06&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleLineInput_vue_vue_type_template_id_6edeed06_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleLineInput_vue_vue_type_template_id_6edeed06_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/frontend/components/inputs/SingleLineInput.vue?");

/***/ }),

/***/ "./src/frontend/components/mixins/input.js":
/*!*************************************************!*\
  !*** ./src/frontend/components/mixins/input.js ***!
  \*************************************************/
/*! exports provided: inputMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inputMixin\", function() { return inputMixin; });\nconst inputMixin = {\n  props: ['value'],\n  data: function () {\n    return {\n      inputContent: ''\n    };\n  },\n  methods: {\n    saveNewValue: function () {\n      this.inputContent = this.inputContent || this.value;\n      this.$emit('input', this.inputContent);\n    }\n  },\n  created: function () {\n    this.inputContent = this.value;\n\n    if (this.focusOnStart) {\n      this.$nextTick(() => this.$el.focus());\n    }\n  }\n};\n\n//# sourceURL=webpack:///./src/frontend/components/mixins/input.js?");

/***/ }),

/***/ "./src/frontend/components/mixins/responsive.js":
/*!******************************************************!*\
  !*** ./src/frontend/components/mixins/responsive.js ***!
  \******************************************************/
/*! exports provided: responsiveMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"responsiveMixin\", function() { return responsiveMixin; });\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.debounce */ \"./node_modules/lodash.debounce/index.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);\n\nconst responsiveMixin = {\n  data() {\n    return {\n      mobile: true\n    };\n  },\n\n  async mounted() {\n    this.setMobile();\n    window.addEventListener('resize', lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.setMobile, 500));\n  },\n\n  methods: {\n    setMobile: function () {\n      if (typeof this.$el.clientWidth !== 'undefined') {\n        this.mobile = this.$el.clientWidth < 825;\n      }\n    }\n  }\n};\n\n//# sourceURL=webpack:///./src/frontend/components/mixins/responsive.js?");

/***/ }),

/***/ "./src/frontend/main.js":
/*!******************************!*\
  !*** ./src/frontend/main.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./src/frontend/App.vue\");\n/* harmony import */ var _AppStatic_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppStatic.vue */ \"./src/frontend/AppStatic.vue\");\n/* harmony import */ var buefy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! buefy */ \"./node_modules/buefy/dist/esm/index.js\");\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false; // custom filters\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].filter('timestampToLocalString', function (timestamp) {\n  return timestamp ? new Date(timestamp).toLocaleDateString() : '';\n});\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(buefy__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n  defaultIconPack: 'fa'\n});\n\nif (document.getElementById('epp_app')) {\n  new vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).$mount('#epp_app');\n}\n\nif (document.getElementById('epp_app_static')) {\n  new vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_AppStatic_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).$mount('#epp_app_static');\n}\n\n//# sourceURL=webpack:///./src/frontend/main.js?");

/***/ }),

/***/ "./src/frontend/services/api.js":
/*!**************************************!*\
  !*** ./src/frontend/services/api.js ***!
  \**************************************/
/*! exports provided: getData, getHeaders, getGroups, getRowsForEdit, getRowsForYear, addEvent, updateEvent, deleteEvent, getConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getData\", function() { return getData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getHeaders\", function() { return getHeaders; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getGroups\", function() { return getGroups; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRowsForEdit\", function() { return getRowsForEdit; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRowsForYear\", function() { return getRowsForYear; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addEvent\", function() { return addEvent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateEvent\", function() { return updateEvent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteEvent\", function() { return deleteEvent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getConfig\", function() { return getConfig; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n // import data from '../__mocks__/data'\n\nconst restRoot = window.eventPlannerApp ? window.eventPlannerApp.rest_url : 'http://127.0.0.1:8000/wp-json/';\nconst baseUrl = restRoot + 'event-planner/v1/';\naxios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common['X-WP-Nonce'] = window.eventPlannerApp ? window.eventPlannerApp.nonce : null;\nasync function getData() {\n  return await safeRequest({\n    method: 'get',\n    url: `${baseUrl}all`\n  }); // return data\n}\nfunction getHeaders(data) {\n  if (!data.headers) {\n    return [];\n  }\n\n  let footnoteCounter = 1;\n  return data.headers.sort(function (head1, head2) {\n    const head1OrderId = parseInt(head1.order_id);\n    const head2OrderId = parseInt(head2.order_id);\n\n    if (head1OrderId < head2OrderId) {\n      return -1;\n    }\n\n    return head1OrderId > head2OrderId ? 1 : 0;\n  }).map(head => {\n    head.active = true; // TODO: sync with localStorage\n\n    head.footnotes = [];\n\n    if (data.header_footnotes) {\n      data.header_footnotes.forEach(footnote => {\n        if (footnote.header_id === head.id) {\n          head.footnotes.push({\n            number: footnoteCounter,\n            text: footnote.text\n          });\n          footnoteCounter++;\n        }\n      });\n    }\n\n    return head;\n  });\n}\nfunction getGroups(data) {\n  const groups = {};\n\n  if (!data.header_groups) {\n    return groups;\n  }\n\n  data.header_groups.forEach(group => {\n    groups[group.id] = group.name;\n  });\n  return groups;\n}\nfunction getRowsForEdit(data) {\n  if (!data.events) {\n    return [];\n  }\n\n  const today = new Date();\n  const yesterday = new Date(today);\n  yesterday.setDate(today.getDate() - 2);\n  const endDate = new Date(today);\n  endDate.setDate(today.getDate() + 130);\n  return data.events.filter(event => {\n    // show only events starting from yesterday until 4 months in the future ...\n    return event.fields && event.fields[1] && new Date(event.fields[1]) >= yesterday && new Date(event.fields[1]) <= endDate;\n  }).sort(function (event1, event2) {\n    // ... and sort by date\n    if (new Date(event1.fields[1]) < new Date(event2.fields[1])) {\n      return -1;\n    }\n\n    return new Date(event1.fields[1]) > new Date(event2.fields[1]) ? 1 : 0;\n  });\n}\nfunction getRowsForYear(data, year) {\n  if (!data.events) {\n    return [];\n  }\n\n  const events = data.events.filter(event => {\n    // show only events for the given year ...\n    return event.fields && event.fields[1] && new Date(event.fields[1]).getFullYear() === year;\n  }).sort(function (event1, event2) {\n    // ... and sort by date\n    if (new Date(event1.fields[1]) < new Date(event2.fields[1])) {\n      return -1;\n    }\n\n    return new Date(event1.fields[1]) > new Date(event2.fields[1]) ? 1 : 0;\n  });\n  const eventsByQuarter = [[], [], [], []];\n  events.forEach(event => {\n    const month = new Date(event.fields[1]).getMonth();\n    eventsByQuarter[Math.floor(month / 3)].push(event);\n  });\n  return eventsByQuarter;\n}\nasync function addEvent(newDate) {\n  if (newDate) {\n    const formattedDate = formatDate(newDate);\n    return await safeRequest({\n      method: 'post',\n      url: `${baseUrl}add-event`,\n      data: {\n        date: formattedDate\n      }\n    });\n  }\n}\nasync function updateEvent(eventId, headerId, content, type) {\n  if (eventId && headerId && content) {\n    if (type === 'date') {\n      content = formatDate(content);\n    }\n\n    return await safeRequest({\n      method: 'post',\n      url: `${baseUrl}update-event`,\n      data: {\n        'event_id': eventId,\n        'header_id': headerId,\n        content: content\n      }\n    });\n  }\n}\nasync function deleteEvent(rowId) {\n  if (rowId) {\n    return await safeRequest({\n      method: 'delete',\n      url: `${baseUrl}delete-event`,\n      data: {\n        event_id: rowId\n      }\n    });\n  }\n}\n\nfunction formatDate(date) {\n  if (typeof date.getTime !== 'function') {\n    date = new Date(date);\n  }\n\n  const month = ('0' + (date.getUTCMonth() + 1)).slice(-2);\n  const day = ('0' + date.getUTCDate()).slice(-2);\n  return `${date.getUTCFullYear()}-${month}-${day}`;\n}\n\nfunction getConfig(data) {\n  const config = {};\n\n  if (!data.config) {\n    return config;\n  }\n\n  data.config.forEach(configEntry => {\n    if (configEntry.data) {\n      try {\n        config[configEntry.name] = JSON.parse(configEntry.data);\n      } catch (e) {\n        config[configEntry.name] = configEntry.data;\n      }\n    }\n  });\n  return config;\n}\n\nasync function safeRequest(axiosConfig) {\n  try {\n    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()(axiosConfig);\n    return response.data;\n  } catch (e) {\n    console.error(e);\n    alert(\"Bei der Verbindung zum Server ist ein Fehler aufgetreten! \" + \"Stelle sicher, dass du eingeloggt bist und versuche es noch einmal.\");\n    return false;\n  }\n}\n\n//# sourceURL=webpack:///./src/frontend/services/api.js?");

/***/ })

},[["./src/frontend/main.js","runtime","vendors"]]]);