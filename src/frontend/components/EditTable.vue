<template>
    <div>
        <RowFilters v-show="loaded"
                    v-model="activeHeads"
                    :heads="heads" />
        <div v-if="mobile && loaded">
            <CardView v-for="(row, rowIndex) in rows"
                      :key="rowIndex"
                      :row="row"
                      :heads="heads"
                      :groups="groups"
                      :index="rowIndex"
                      @deleteRow="deleteRow" />
        </div>
        <TableView v-else-if="loaded"
                   :paginate="true"
                   :heads="heads"
                   :rows="rows"
                   :groups="groups"
                   @deleteRow="deleteRow" />
        <AddButton v-if="loaded"
                   @addDate="addRow" />
        <FootnoteList :heads="getActiveHeads" />
    </div>
</template>

<script>
import CardView from "./CardView.vue";
import FootnoteList from "./FootnoteList.vue";
import TableView from "./TableView.vue";
import AddButton from "./AddButton.vue";
import RowFilters from "./RowFilters.vue";
import {responsiveMixin} from "./mixins/responsive";
import {getHeaders, getGroups, getRowsForEdit, addEvent, getData, deleteEvent} from "../services/api";

export default {
    name: "EditTable",

    components: {
        TableView,
        CardView,
        AddButton,
        RowFilters,
        FootnoteList
    },

    mixins: [responsiveMixin],

    data() {
        return {
            heads: [],
            groups: {},
            rows: [],
            activeHeads: [],
            loaded: false
        };
    },

    computed: {
        getActiveHeads: function() {
            return this.heads.filter((head) => head.active);
        }
    },

    watch: {
        activeHeads: function() {
            localStorage.setItem("activeHeads", JSON.stringify(this.activeHeads));
            this.heads.forEach((head, index) => {
                head.active = this.activeHeads[index];
            });
        }
    },

    async mounted() {
        const data = await getData();
        if (data === false) {
            return;
        }
        this.heads = getHeaders(data);
        this.groups = getGroups(data);
        this.rows = getRowsForEdit(data);
        if (localStorage.getItem("activeHeads")) {
            const cachedActiveHeads = JSON.parse(localStorage.getItem("activeHeads"));
            if (cachedActiveHeads.length === this.heads.length) {
                this.activeHeads = cachedActiveHeads;
            }
        }
        // that is, not used the ones from cache because not set or not fitting
        if (this.activeHeads.length !== this.heads.length) {
            this.activeHeads = this.heads.map(() => true);
        }
        this.loaded = true;
    },

    methods: {
        addRow: async function(addDate) {
            const apiResult = await addEvent(addDate);
            if (apiResult && apiResult.success) {
                const data = await getData();
                this.rows = await getRowsForEdit(data);
                this.loaded = true;
                return;
            }
            if (apiResult && apiResult.error) {
                alert(`Beim Hinzufügen ist ein Fehler aufgetreten: ${apiResult.error}`);
                return;
            }
            alert("Beim Hinzufügen ist ein unbekannter Fehler aufgetreten");
        },
        deleteRow: async function(rowId) {
            const confirmed = window.confirm("Diese Veranstaltung und alle ihre Daten werden endgültig gelöscht. " +
          "Dies kann nicht rueckgängig gemacht werden. Bist du sicher?");
            if (confirmed) {
                const apiResult = await deleteEvent(rowId);
                if (apiResult && apiResult.success) {
                    const data = await getData();
                    this.rows = await getRowsForEdit(data);
                    return;
                }
                if (apiResult && apiResult.error) {
                    alert(`Beim Löschen ist ein Fehler aufgetreten: ${apiResult.error}`);
                    return;
                }
                alert("Beim Löschen ist ein unbekannter Fehler aufgetreten");
            }
        }
    }
};
</script>
