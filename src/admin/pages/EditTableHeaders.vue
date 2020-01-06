<template>
  <div class="edit-table-headers">
    <h2>Tabellenköpfe bearbeiten</h2>
    <TableHeaderForm v-for="header in orderedHeaders"
                     :key="`header_${header.id}`"
                     v-bind="header"
                     :isFirst="header.order_id === '1'"
                     @delete="loadHeaders"
                     @update="loadHeaders" />
    <button class="edit-table-headers__add" type="button" @click="addNewHeader">
      <i class="fa fa-fw fa-plus"></i>&nbsp;Tabellenkopf hinzufügen
    </button>                 
  </div>
</template>

<script>
import TableHeaderForm from '../components/TableHeaderForm.vue'
import { getHeaders, addHeader } from '../services/api'
import { sortByOrderId } from '../utils/helpers'

export default {
  name: 'EditTableHeaders',

  components: {
    TableHeaderForm
  },

  data () {
    return {
      headers: []
    }
  },

  async created () {
    await this.loadHeaders();
  },

  computed: {
    orderedHeaders () {
      return this.headers
                 .sort(sortByOrderId);
    }
  },

  methods: {
    async loadHeaders () {
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
          return
        }
        if (apiResult && apiResult.error) {
          alert(`Beim Anlegen ist ein Fehler aufgetreten: ${apiResult.error}`);
          return
        }
        alert(`Beim Anlegen ist ein unbekannter Fehler aufgetreten`);
      } else if (name !== null) {
        alert("Bitte gib einen Namen an, wenn du einen Tabellenkopf hinzufügen willst!");
      }
    }
  }
}
</script>

<style scoped>

</style>
