<template>
    <textarea ref="inputField"
              v-model="inputContent"
              class="textarea"
              @blur="saveNewValue"
              @keydown.tab="saveNewValue" />
</template>

<script>
import {inputMixin} from "../mixins/input";

export default {
    name: "MultiLineInput",

    mixins: [inputMixin],

    data: function() {
        return {
            focusOnStart: true
        };
    }
};
</script>

<style scoped>
    .textarea {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
    }
</style>