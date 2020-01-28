<template>
    <input ref="inputField"
           v-model="inputContent"
           class="input"
           type="text"
           @blur="saveNewValue"
           @keydown.enter.tab="saveNewValue">
</template>

<script>
import {inputMixin} from "../mixins/input";

export default {
    name: "SingleLineInput",

    mixins: [inputMixin],

    data: function() {
        return {
            focusOnStart: true
        };
    }
};
</script>

<style scoped>
    .input {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
    }
</style>