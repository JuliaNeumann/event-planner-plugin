<template>
    <input class="input" @blur="saveNewValue" @keydown.enter.tab="saveNewValue" ref="inputField" type="text" v-model="inputContent" />
</template>

<script>
  import {inputMixin} from '../mixins/input'

  export default {
    name: 'SingleLineInput',
    data: function () {
      return {
        focusOnStart: true
      }
    },
    mixins: [inputMixin]
  }
</script>

<style scoped>
    .input {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
    }
</style>