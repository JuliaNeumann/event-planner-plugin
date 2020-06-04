<template>
    <div class="edit-table-groups">
        <h1>Tabellengruppen bearbeiten</h1>
        <strong class="edit-table-groups__hint">
            Tabellenköpfe in einer Gruppe sollten möglichst in der Reihenfolge direkt nacheinander stehen
            (das macht die Tabelle übersichtlicher).<br>
            Jeder Tabellenkopf kann nur einer Gruppe zugeordnet werden.<br>
            Willst du also einen Tabellenkopf in eine andere Gruppe verschieben,
            musst du ihn zuerst aus der alten Gruppe löschen, speichern
            und dann in der neuen hinzufügen und wieder speichern.
        </strong>
        <TableGroupForm v-for="group in headerGroups"
                        :key="`group_${group.id}`"
                        v-bind="group"
                        :headers="headers.filter(header => header.order_id !== '1')"
                        @update-group="load"
                        @delete-group="loadHeaderGroups" />
        <AddButton class="edit-table-groups__add"
                   text="Tabellengruppe hinzufügen"
                   @click.native="addNewGroup" />
    </div>
</template>

<script>
import TableGroupForm from "../components/TableGroupForm.vue";
import { getHeaders, getHeaderGroups, addHeaderGroup } from "../services/api";

export default {
    name: "EditTableGroups",

    components: {
        TableGroupForm
    },

    data() {
        return {
            headers: [],
            headerGroups: []
        };
    },

    async created() {
        await this.load();
    },

    methods: {
        async load() {
            await this.loadHeaders();
            await this.loadHeaderGroups();
        },
        async loadHeaders() {
            this.headers = await getHeaders();
        },
        async loadHeaderGroups() {
            this.headerGroups = await getHeaderGroups();
        },
        async addNewGroup() {
            const name = prompt("Wie soll die neue Tabellengruppe heißen?");
            if (name) {
                const apiResult = await addHeaderGroup(name);
                if (apiResult && apiResult.success) {
                    alert("Tabellengruppe wurde angelegt!");
                    await this.loadHeaderGroups();
                    return;
                }
                if (apiResult && apiResult.error) {
                    alert(`Beim Anlegen ist ein Fehler aufgetreten: ${apiResult.error}`);
                    return;
                }
                alert("Beim Anlegen ist ein unbekannter Fehler aufgetreten");
            } else if (name !== null) {
                alert("Bitte gib einen Namen an, wenn du eine Tabellengruppe hinzufügen willst!");
            }
        }
    }
};
</script>

<style lang="less" scoped>
  .edit-table-groups {
    &__hint {
      display: block;
      padding-bottom: 15px;
    }
  }
</style>
