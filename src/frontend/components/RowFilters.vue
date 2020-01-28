<template>
    <div class="filters">
        <div class="filters__title"
             @click="show = !show">
            <ArrowToggle :direction="show ? 'down': 'right'" />
            <strong>Filter</strong>
        </div>
        <ul v-show="show"
            class="filters__list">
            <li v-for="(head, index) in heads"
                :key="index"
                class="filters__item">
                <input v-if="index > 0"
                       :id="`filter_${index}`"
                       v-model="actives[index]"
                       type="checkbox"
                       name="filter">
                <label v-if="index > 0"
                       :for="`filter_${index}`">
                    {{ head.name }}
                </label>
            </li>
        </ul>
    </div>
</template>

<script>
import ArrowToggle from "./ArrowToggle.vue";

export default {
    name: "RowFilters",

    components: {
        ArrowToggle
    },

    props: {
        heads: {
            type: Array,
            required: true
        },
        value: {
            type: Array,
            required: true
        }
    },

    data() {
        return {
            show: false,
            actives: []
        };
    },

    watch: {
        actives: function() {
            this.$emit("input", this.actives);
        },
        value: function() {
            this.actives = this.value;
        }
    },

    mounted() {
        this.actives = this.value;
    }
};
</script>

<style scoped>
    .filters {
        text-align: left;
        padding-bottom: 20px;
    }
    .filters__title {
        cursor: pointer;
    }
    .filters__list {
        display: inline-block;
        list-style: none;
        margin: 0;
        padding: 10px;
    }
    .filters__item {
        display: inline-block;
    }
</style>
