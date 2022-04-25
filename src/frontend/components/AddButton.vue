<template>
    <div>
        <button @click="showOverlay = true">
            + Gottesdienst hinzufügen
        </button>
        <b-modal :active.sync="showOverlay">
            <div class="add">
                Bitte Datum auswählen:
                <datepicker v-model="date"
                            :language="datepickerTranslations"
                            :inline="true"
                            :open-date="lastDate"
                            class="add__datepicker" />
                <div class="add__date">
                    {{ formatDate }}
                </div>
                Bitte Uhrzeit auswählen:
                <br>
                <vue-timepicker v-model="time"
                                :minute-interval="5"
                                hide-clear-button />
                <button class="add__button"
                        :disabled="date ? false : 'disabled'"
                        @click="addDate">
                    Hinzufügen
                </button>
                <button class="add__button"
                        :disabled="date ? false : 'disabled'"
                        @click="addDateAndClose">
                    Hinzufügen & schließen
                </button>
            </div>
        </b-modal>
    </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import VueTimepicker from "vue2-timepicker";
import de from "../../../node_modules/vuejs-datepicker/src/locale/translations/de";

export default {
    name: "AddButton",

    components: {
        Datepicker,
        VueTimepicker
    },

    data: function() {
        return {
            datepickerTranslations: de,
            showOverlay: false,
            date: "",
            time: "",
            lastDate: new Date()
        };
    },

    computed: {
        formatDate() {
            if (this.date) {
                const dateObj = new Date(this.date);
                return dateObj.toLocaleDateString();
            }
            return "";
        }
    },

    methods: {
        addDate() {
            this.$emit("addDate", {date: this.date, time: this.time});
            this.lastDate = this.date;
            this.date = "";
            this.time = "";
        },
        addDateAndClose() {
            this.addDate();
            this.date = "";
            this.time = "";
            this.showOverlay = false;
        }
    }
};
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
