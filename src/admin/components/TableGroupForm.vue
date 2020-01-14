<template>
  <form class="table-group-form">
    <div class="table-group-form__field">
      <label class="table-group-form__label" :for="`group_name_${id}`">Name: </label>
      <input class="table-group-form__input" type="text" :id="`group_name_${id}`" v-model="modelName"/>
    </div>
    <div class="table-group-form__headers">
      <div  class="table-group-form__headers-title">Zugeordnete Tabellenköpfe:</div>
      <ul class="table-group-form__headers-list">
        <li v-for="header in groupHeaders" :key="`group_header_${header.id}`">
          {{ header.name }}&nbsp;
          <button class="table-group-form__button" type="button" @click="deleteHeader(header.id)">
            <i class="fa fa-fw fa-trash"></i>&nbsp;Löschen
          </button>
        </li>
      </ul>
    </div>
    <div class="table-group-form__field">
      Tabellenkopf hinzufügen:
      <select v-model="modelAddHeader">
        <option value="">--Auswählen--</option>
        <option v-for="header in nonGroupHeaders" :key="`non_group_header_${header.id}`" :value="header.id">
          {{ header.name }}
        </option>
      </select>
      <button class="table-group-form__button" type="button" @click="addHeader">
        <i class="fa fa-fw fa-plus"></i>&nbsp;Hinzufügen
      </button>
    </div>
    <div class="table-group-form__field">
      <button class="table-group-form__button" type="button" @click="saveGroup">
        <i class="fa fa-fw fa-save"></i>&nbsp;Speichern
      </button>
      <button class="table-group-form__button" type="button" @click="deleteGroup">
        <i class="fa fa-fw fa-trash"></i>&nbsp;Löschen
      </button>
    </div>
  </form>
</template>

<script>
import { deleteHeaderGroup, updateHeaderGroup } from '../services/api';
import { sortByOrderId } from '../utils/helpers'

export default {
  name: 'TableGroupForm',

  props: {
    headers: Array,
    id: String,
    name: String
  },

  computed: {
    groupHeaders() {
      return this.headers.filter(header => {
        return ((header.group_id === this.id) && (this.deletedHeaders.indexOf(header.id) === -1)) ||
               (this.addedHeaders.indexOf(header.id) > -1)
      }).sort(sortByOrderId);
    },
    nonGroupHeaders() {
      return this.headers.filter(header => {
        return (!header.group_id && (this.addedHeaders.indexOf(header.id) === -1)) ||
               (this.deletedHeaders.indexOf(header.id) > -1)
      }).sort(sortByOrderId);
    }
  },

  data() {
    return {
      modelName: this.name,
      modelAddHeader: "",
      addedHeaders: [],
      deletedHeaders: []
    }
  },

  methods: {
    addHeader() {
      const deletedIndex = this.deletedHeaders.indexOf(this.modelAddHeader);
      if (deletedIndex > -1) { // this header was deleted before, so we just need to remove it from deleted list
        this.deletedHeaders.splice(deletedIndex, 1);
      } else if (this.addedHeaders.indexOf(this.modelAddHeader) === -1) { // this header was not initially in the group, so we need to add it on save
        this.addedHeaders.push(this.modelAddHeader);
      }
      this.modelAddHeader = "";
    },
    deleteHeader(id) {
      const addedIndex = this.addedHeaders.indexOf(id);
      if (addedIndex > -1) { // this header was added before, so we just need to remove it from added list
        this.addedHeaders.splice(addedIndex, 1);
      } else if (this.deletedHeaders.indexOf(id) === -1) { // this header was initially in the group, so we need to delete it on save
        this.deletedHeaders.push(id);
      }
    },
    async saveGroup() {
      const apiResult = await updateHeaderGroup(this.id, this.modelName, this.addedHeaders, this.deletedHeaders);
      if (apiResult && apiResult.success) {
        alert("Änderungen wurden gespeichert!");
        this.$emit('update-group');
        return
      }
      if (apiResult && apiResult.error) {
        alert(`Beim Speichern ist ein Fehler aufgetreten: ${apiResult.error}`)
        return
      }
      alert(`Beim Speichern ist ein unbekannter Fehler aufgetreten`)
    },
    async deleteGroup() {
      const confirmed = window.confirm('Diese Tabellengruppe und alle Zuordnungen werden endgültig gelöscht. ' +
        'Dies kann nicht rueckgängig gemacht werden. Bist du sicher?')
      if (confirmed) {
        const apiResult = await deleteHeaderGroup(this.id)
        if (apiResult && apiResult.success) {
          alert("Tabellengruppe und Zuordnungen wurden gelöscht!");
          this.$emit('delete-group');
          return
        }
        if (apiResult && apiResult.error) {
          alert(`Beim Löschen ist ein Fehler aufgetreten: ${apiResult.error}`)
          return
        }
        alert(`Beim Löschen ist ein unbekannter Fehler aufgetreten`)
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .table-group-form {
    border: 1px solid gray;
    padding: 10px;
    margin-bottom: 15px;
    max-width: 1000px;

    &__field {
      padding-bottom: 10px;
    }

    &__headers {
      display: flex;
      padding-bottom: 10px;
    }

    &__headers-title {
      flex-grow: 0;
      padding-right: 10px;
    }

    &__headers-list {
      flex-grow: 1;
      margin: 0;
      list-style-type: disc;
      padding-left: 20px;
    }
  }
</style>