<template>
    <div>
        <button @click="showOverlay = true">
            Bearbeiten
        </button>
        <b-modal :active.sync="showOverlay" @close="handleClose">
            <div class="edit">
                <div ref="intro" class="edit__intro">Zum Bearbeiten auf die Felder klicken.</div>
                <div v-for="head in heads"
                     :key="head.id">
                    <strong>{{head.name}}:</strong><br>
                    <TableCell :head="head" :row="row" tag="div" class="edit__cell" />
                </div>
                <div class="edit__button-wrapper">
                    <button class="edit__button"
                        @click="saveAndClose">
                        Speichern & Schließen
                    </button>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
  import TableCell from './TableCell.vue'

  export default {
    name: 'EditButton',
    components: {TableCell},
    data: function () {
      return {
        showOverlay: false
      }
    },
    props: [
      'row',
      'heads'
    ],
    methods: {
      handleClose () {
          this.$emit('updated');
      },
      saveAndClose () {
        this.$refs.intro.click();  
        this.showOverlay = false;
        this.handleClose();
      }
    }
  }
</script>

<style scoped>
    .edit {
        background-color: white;
        padding: 20px;
        min-height: 500px;
        min-width: 200px;
        overflow: auto;
        max-height: calc(100vh - 100px);
    }

    .edit__intro {
        padding-bottom: 30px;
    }

    .edit__cell {
        margin: 10px 0 30px;
        border: 1px solid grey;
    }

    .edit__button {
        width: 100%;
        text-align: center;
        max-width: 450px;
        margin-top: 15px;
    }
    
    .edit__button-wrapper {
        text-align: center;
    }
</style>
