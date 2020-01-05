<template>
  <form class="table-header-form">
    <div class="table-header-form__field table-header-form__field--block" v-if="isFirst">
      <i class="fa fa-info-circle"></i>&nbsp; <strong>Der erste Header muss immer das Datum der Veranstaltung enthalten. Deswegen kann hier nur der Name und die Beschreibung geändert werden.</strong>
    </div>
    <div class="table-header-form__field">
      <label class="table-header-form__label" :for="`header_name_${id}`">Name: </label>
      <input class="table-header-form__input" type="text" :id="`header_name_${id}`" v-model="modelName"/>
    </div>
    <div class="table-header-form__field">
      <label class="table-header-form__label" :for="`header_type_${id}`">
        Typ: <i class="fa fa-info-circle" title="Da je nach Typ unterschiedliche Daten in der Tabelle gespeichert werden, kann das Ändern des Typs zu unvorhergesehen Ergebnissen führen. Also am Besten nur ändern, wenn du weißt, was du tust."></i>&nbsp;
      </label>
      <select class="table-header-form__input" :id="`header_type_${id}`" v-model="modelType" :disabled="isFirst">
        <option value="date">Datum</option>
        <option value="text">Text</option>
        <option value="longtext">Mehrzeiliger Text</option>
        <option value="icons">Icons</option>
      </select>
    </div>
    <div class="table-header-form__field">
      <label class="table-header-form__label" :for="`header_order_${id}`">Reihenfolge: </label>
      <input class="table-header-form__input" type="number"
             :id="`header_order_${id}`"
             :disabled="isFirst"
             v-model="modelOrderId"
             :min="isFirst ? 1 : 2"
             step="1"/>
    </div>
    <div class="table-header-form__field table-header-form__field--block">
      <label class="table-header-form__label" :for="`header_description_${id}`">
        Beschreibung: <i class="fa fa-info-circle" title="Die Beschreibung wird - wenn vorhanden - angezeigt, wenn sich die Maus über dem Tabellenkopf befindet."></i>&nbsp;
      </label>
      <input class="table-header-form__input" type="text" :id="`header_description_${id}`" v-model="modelDescription" />
    </div>
    <div class="table-header-form__field table-header-form__field--block" v-if="type === 'icons'">
      <label class="table-header-form__label" :for="`header_description_${id}`">
        Icons:
      </label>
      <IconsForm :icons="JSON.parse(additional || '[]')"/>
    </div>
    <div class="table-header-form__field table-header-form__field--block">
      <button class="table-header-form__button" type="button" @click="saveHeader">
        <i class="fa fa-fw fa-save"></i>&nbsp;Speichern
        </button>
      <button class="table-header-form__button" type="button" @click="deleteHeader">
        <i class="fa fa-fw fa-trash"></i>&nbsp;Löschen
        </button>
    </div>
  </form>
</template>

<script>
import IconsForm from './IconsForm.vue';
import { updateHeader, deleteHeader } from '../services/api';

export default {
  name: 'TableHeaderForm',

  components: {
    IconsForm
  },

  props: {
    isFirst: Boolean,
    id: String,
    name: String,
    order_id: String,
    group_id: String,
    type: String,
    additional: String,
    description: String
  },

  data() {
    return {
      modelName: this.name,
      modelOrderId: this.order_id,
      modelType: this.type,
      modelDescription: this.description
    }
  },

  methods: {
    async saveHeader() {
      const apiResult = await updateHeader({
        id: this.id,
        name: this.modelName,
        order_id: this.modelOrderId,
        type: this.modelType,
        additional: this.additional,
        description: this.modelDescription
      })
      if (apiResult && apiResult.error) {
        alert(`Beim Bearbeiten ist ein Fehler aufgetreten: ${apiResult.error}`)
      } else if (apiResult && apiResult.success) {
        alert("Änderungen gespeichert!");
        this.$emit('delete')
      } else {
        console.error(apiResult);
        alert("Es ist ein unbekannter Fehler aufgetreten!");
      }

    },
    async deleteHeader() {
      const confirmed = window.confirm('Dieser Tabellenkopf und alle zugehörigen Tabbellendaten werden endgültig gelöscht. ' +
          'Dies kann nicht rueckgängig gemacht werden. Bist du sicher?')
        if (confirmed) {
          const apiResult = await deleteHeader(this.id)
          if (apiResult && apiResult.success) {
            alert("Tabellenkopf und zueghörige Daten wurden gelöscht!");
            this.$emit('delete')
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
  .table-header-form {
    border: 1px solid gray;
    padding: 10px;
    margin-bottom: 15px;
    max-width: 1000px;

    &__field {
      display: inline-block;
      padding-right: 15px;
      padding-bottom: 10px;

      &--block {
        display: flex;
        align-items: baseline;
        padding-right: 0;

        .table-header-form__label {
          flex-grow: 0;
        }

        .table-header-form__input {
          flex-grow: 1;
        }
      }
    }

    &__button {
      margin: 10px 10px 0 0;
    }
  }
</style>