<template>
    <article class="card">
        <h2 class="card__title"
            @click="toggleShow">
            <ArrowToggle :direction="show ? 'down': 'right'"
                         class="arrow--big" />
            {{ row.fields[1] | timestampToLocalString }}
        </h2>
        <TableView v-show="show"
                   :paginate="false"
                   :rows="[row]"
                   :heads="heads.slice(1)"
                   :groups="groups"
                   @deleteRow="deleteRow"
                   @cellUpdate="handleCellUpdate" />
    </article>
</template>

<script>
import TableView from "./TableView.vue";
import ArrowToggle from "./ArrowToggle.vue";

export default {
    name: "CardView",

    components: {
        TableView,
        ArrowToggle
    },

    props: {
        row: {
            type: Object,
            default: () => {}
        },
        heads: {
            type: Array,
            default: () => []
        },
        groups: {
            type: Object,
            default: () => {}
        },
        index: {
            type: Number,
            default: 0
        }
    },

    data() {
        return {
            show: this.index === 0
        };
    },

    methods: {
        toggleShow: function() {
            this.show = !this.show;
        },
        deleteRow: function(rowId) {
            this.$emit("deleteRow", rowId);
        },
        handleCellUpdate: function(updateEvent) {
            this.$emit("cellUpdate", updateEvent);
        }
    }
};
</script>

<style scoped>
    .card {
        text-align: left;
    }
    .card__title {
        cursor: pointer;
    }
</style>
