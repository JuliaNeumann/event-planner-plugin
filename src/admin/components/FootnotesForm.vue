<template>
  <form class="footnotes-form">
    <strong>{{ header.name }}</strong>
    <div class="footnotes-form__field" v-for="(footnote, index) in modeledFootnotesFiltered" :key="`footnote_${footnote.id}`">
      <input type="text" class="footnotes-form__input" v-model="footnote.text"/>
      <button type="button" class="footnotes-form__button" @click="deleteFootnote(index)">
        <i class="fa fa-fw fa-trash"></i>&nbsp;Löschen
      </button>
    </div>
    <div class="footnotes-form__field">
      <button class="footnotes-form__button" type="button" v-if="modeledFootnotes.length" @click="save">
        <i class="fa fa-fw fa-save"></i>&nbsp;Speichern
      </button>
      <button class="footnotes-form__button" type="button" @click="addFootnote">
        <i class="fa fa-fw fa-plus"></i>&nbsp;Fußnote hinzufügen
      </button>
    </div>
  </form>
</template>

<script>
import { updateFootnote, addFootnote, deleteFootnote } from '../services/api';

export default {
  name: 'FootnotesForm',

  props: {
    header: Object,
    footnotes: Array
  },

  data () {
    return {
      modeledFootnotes: this.footnotes.map(footnote => Object.assign({deleted: false}, footnote)),
      countNew: 0,
      newPrefix: "NEW"
    }
  },

  computed: {
    modeledFootnotesFiltered () {
      return this.modeledFootnotes.filter(footnote => footnote.deleted !== true);
    }
  },

  methods: {
    deleteFootnote (index) {
      const confirmed = window.confirm('Diese Fußnote wirklich loeschen? (Wird erst endgültig gespeichert, wenn du auf "Speichern" geklickt hast.)');
      if (confirmed) {
        const footnote = this.modeledFootnotes[index];
        if (footnote.id.indexOf(this.newPrefix) === 0) {
          // footnote was added before without being saved, so can be just removed from the modeled array...
          this.modeledFootnotes.splice(index, 1);
        } else {
          // ... otherwise we need to update in DB later, so we save the status instead of removing 
          this.modeledFootnotes[index].deleted = true;
        }
      }
    },

    addFootnote () {
      const text = prompt("Gib den Text für die Fußnote an: ");
      if (text) {
        this.modeledFootnotes.push({text: text, header_id: this.header.id, id: `${this.newPrefix}_${this.countNew}`});
        this.countNew++;      
      } else if (text !== null) {
        alert("Du musst einen Text für die neue Fußnote angeben!");
      }
    },

    async save () {
      let hasError = false;
      await this.modeledFootnotes.forEach(async (footnote) => {
        let result;
        if (footnote.deleted) {
          result = await deleteFootnote(footnote.id);
        } else if (footnote.id.indexOf(this.newPrefix) === 0) {
          result = await addFootnote(footnote);
        } else {
          result = await updateFootnote(footnote);
        }
        if (result.error) {
          hasError = true;
          alert(result.error);
          return;
        }
      });
      if (!hasError) {
        alert("Änderungen gespeichert!");
        this.$emit("update");
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .footnotes-form {
    border: 1px solid gray;
    padding: 10px;
    margin-bottom: 15px;
    max-width: 1000px;

    &__field {
      display: flex;
      padding: 5px 0;
    }

    &__input {
      flex-grow: 1;
    }

    &__button {
      flex-grow: 0;

      &:not(:first-child) {
        margin-left: 5px;
      }
    }
  }
</style>