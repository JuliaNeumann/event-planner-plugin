<template>
    <td :colspan="cols"
        class="group-header"
        :class="open ? 'group-header--open' : ''">
        <ArrowToggle :direction="open ? 'down' : 'right'" />
        <strong>{{ text }}</strong>
    </td>
</template>

<script>
import ArrowToggle from "./ArrowToggle.vue";
export default {
    name: "TableGroupHeader",

    components: {
        ArrowToggle
    },

    props: {
        text: {
            type: String,
            default: ""
        },
        open: {
            type: Boolean,
            default: false
        },
        cols: {
            type: Number,
            default: 2
        }
    }
};
</script>

<style scoped>
    .group-header {
        border-bottom: 1px solid grey;
        text-align: left;
        background-color: #9DB5C7;
        padding: 10px;
        cursor: pointer;
        width: 100%;
    }
</style>
