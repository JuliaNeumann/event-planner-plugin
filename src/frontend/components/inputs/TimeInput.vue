<template>
    <div @click.stop>
        <vue-timepicker v-model="inputContent"
                        :minute-interval="5"
                        hide-clear-button
                        @close="saveNewValue" />
    </div>
</template>

<script>
import VueTimepicker from "vue2-timepicker";
import {inputMixin} from "../mixins/input";

export default {
    name: "DateInput",

    components: {
        VueTimepicker
    },

    mixins: [inputMixin]
};
</script>
