<template>
  <div class="home">
    <h2>Tabellenköpfe bearbeiten</h2>
    <TableHeaderForm v-for="(header, index) in headers"
                     :key="`header_${header.id}`"
                     v-bind="header"
                     :isFirst="index === 0" />
  </div>
</template>

<script>
import TableHeaderForm from '../components/TableHeaderForm.vue'
import { getHeaders } from '../services/api'

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
    this.headers = await getHeaders();
  }
}
</script>

<style scoped>

</style>
