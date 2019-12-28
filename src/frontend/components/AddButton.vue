<template>
    <div>
        <button @click="showOverlay = true">+ Gottesdienst hinzufügen</button>
        <b-modal :active.sync="showOverlay">
            <div class="add">
                Bitte Datum auswählen:
                <datepicker :language="datepickerTranslations" :inline="true" v-model="date" :open-date="lastDate" class="add__datepicker"></datepicker>
                <div class="add__date">
                    {{ formatDate }}
                </div>
                <button class="add__button"
                        :disabled="this.date ? false : 'disabled'"
                        @click="addDate">
                    Hinzufügen
                </button>
                <button class="add__button"
                        :disabled="this.date ? false : 'disabled'"
                        @click="addDateAndClose">
                    Hinzufügen & schließen
                </button>
            </div>
        </b-modal>
    </div>
</template>

<script>
  import Datepicker from 'vuejs-datepicker'
  import de from '../../../node_modules/vuejs-datepicker/src/locale/translations/de'

  export default {
    name: 'AddButton',
    components: {
      Datepicker
    },
    data: function () {
      return {
        datepickerTranslations: de,
        showOverlay: false,
        date: '',
        lastDate: new Date()
      }
    },
    computed: {
      formatDate () {
        if (this.date) {
          const dateObj = new Date(this.date)
          return dateObj.toLocaleDateString()
        }
        return '';
      }
    },
    methods: {
      addDate () {
        this.$emit('addDate', this.date)
        this.lastDate = this.date
        this.date = ''
      },
      addDateAndClose () {
        this.addDate()
        this.date = ''
        this.showOverlay = false
      }
    }
  }
</script>

<style scoped>
    .add {
        background-color: white;
        padding: 20px;
        min-height: 500px;
    }

    .add__datepicker,
    .add__date,
    .add__button {
        margin-top: 15px;
    }

    .add__date {
        min-height: 25px;
    }

    .add__button {
        width: 100%;
        text-align: center;
        max-width: 450px;
    }
</style>
