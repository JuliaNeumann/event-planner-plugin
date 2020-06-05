<template>
    <div class="edit-table-headers">
        <h1>Tabellenköpfe bearbeiten</h1>
        <TableHeaderForm v-for="header in orderedHeaders"
                         :key="`header_${header.id}`"
                         v-bind="header"
                         :is-first="header.order_id === '1'"
                         @delete="loadHeaders"
                         @update="loadHeaders" />
        <AddButton class="edit-table-headers__add"
                   text="Tabellenkopf hinzufügen"
                   @click.native="addNewHeader" />
    </div>
</template>

<script>
import TableHeaderForm from "../components/TableHeaderForm.vue";
import { getHeaders, addHeader } from "../services/api";
import { sortByOrderId } from "../utils/helpers";

export default {
    name: "EditTableHeaders",

    components: {
        TableHeaderForm
    },

    data() {
        return {
            headers: []
        };
    },

    computed: {
        orderedHeaders() {
            return [...this.headers].sort(sortByOrderId);
        }
    },

    async created() {
        await this.loadHeaders();
    },

    methods: {
        async loadHeaders() {
            this.headers = await getHeaders();
        },
        async addNewHeader() {
            const name = prompt("Wie soll der neue Tabellenkopf heißen?");
            if (name) {
                const maxOrderId = parseInt(this.orderedHeaders[this.orderedHeaders.length - 1].order_id);
                const apiResult = await addHeader(name, maxOrderId + 1);
                if (apiResult && apiResult.success) {
                    alert("Tabellenkopf wurde angelegt!");
                    await this.loadHeaders();
                    return;
                }
                if (apiResult && apiResult.error) {
                    alert(`Beim Anlegen ist ein Fehler aufgetreten: ${apiResult.error}`);
                    return;
                }
                alert("Beim Anlegen ist ein unbekannter Fehler aufgetreten");
            } else if (name !== null) {
                alert("Bitte gib einen Namen an, wenn du einen Tabellenkopf hinzufügen willst!");
            }
        }
    }
};
</script>

<style scoped>

</style>
