<template>
    <datepicker v-model="inputContent"
                v-click-outside="saveNewValue"
                :language="datepickerTranslations"
                :inline="true"
                @selected="saveNewValue" />
</template>

<script>
import Datepicker from "vuejs-datepicker";
import de from "../../../../node_modules/vuejs-datepicker/src/locale/translations/de";
import ClickOutside from "vue-click-outside";
import {inputMixin} from "../mixins/input";

export default {
    name: "DateInput",

    components: {
        Datepicker
    },

    directives: {
        ClickOutside
    },

    mixins: [inputMixin],

    data: () => {
        return {
            datepickerTranslations: de,
            firstClick: true
        };
    },

    created: function() {
        this.inputContent = new Date(this.value);
    },

    methods: {
        saveNewValue: function(date) {
            if (this.firstClick) {
                this.firstClick = false;
                return;
            }
            if (date && typeof date.getTime === "function") {
                this.inputContent = date.getTime();
            }
            inputMixin.methods.saveNewValue.call(this);
        }
    }
};
</script>
