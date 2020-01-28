<template>
    <div v-click-outside="saveNewValue"
         class="options">
        <div v-for="option in options"
             :key="option.name"
             class="option">
            <input :id="option.icon"
                   v-model="inputContent"
                   type="checkbox"
                   :value="option.icon">
            <label :for="option.icon">
                <i class="fa"
                   :class="`fa-${option.icon}`" />
                {{ option.name }}
            </label>
        </div>
    </div>
</template>

<script>
import ClickOutside from "vue-click-outside";
import {inputMixin} from "../mixins/input";

export default {
    name: "IconInput",

    directives: {
        ClickOutside
    },

    mixins: [inputMixin],

    props: {
        additional: {
            type: String,
            default: "[]"
        }
    },

    data: () => {
        return {
            firstClick: true
        };
    },

    computed: {
        options() {
            return JSON.parse(this.additional);
        }
    },

    created: function() {
        this.inputContent = this.value ? JSON.parse(this.value) : [];
    },

    methods: {
        saveNewValue: function() {
            if (this.firstClick) {
                this.firstClick = false;
                return;
            }
            this.inputContent = this.inputContent && this.inputContent.length > 0 ?
                JSON.stringify(this.inputContent) : "[]";
            inputMixin.methods.saveNewValue.call(this);
        }
    }
};
</script>

<style scoped>
  .options {
    width: 100%;
    display: flex;
    align-items: center;
    height: 100%;
    flex-wrap: wrap;
  }
  .option {
    display: inline-block;
    padding-right: 15px;
  }
</style>
