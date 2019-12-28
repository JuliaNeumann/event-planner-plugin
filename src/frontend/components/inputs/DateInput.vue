<template>
    <datepicker v-click-outside="saveNewValue" :language="datepickerTranslations" :inline="true" @selected="saveNewValue" v-model="inputContent"></datepicker>
</template>

<script>
  import Datepicker from 'vuejs-datepicker'
  import de from '../../../../node_modules/vuejs-datepicker/src/locale/translations/de'
  import ClickOutside from 'vue-click-outside'
  import {inputMixin} from '../mixins/input'

  export default {
    name: 'DateInput',
    components: {
      Datepicker
    },
    data: () => {
      return {
        datepickerTranslations: de,
        firstClick: true
      }
    },
    directives: {
      ClickOutside
    },
    mixins: [inputMixin],
    methods: {
      saveNewValue: function (date) {
        if (this.firstClick) {
          this.firstClick = false;
          return;
        }
        if (date && typeof date.getTime === 'function') {
          this.inputContent = date.getTime()
        }
        inputMixin.methods.saveNewValue.call(this)
      }
    },
    created: function () {
      this.inputContent = new Date(this.value)
    }
  }
</script>
