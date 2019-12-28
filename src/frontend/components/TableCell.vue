<template>
    <component :is="htmlTag"
        class="cell"
        :style="inlineStyles"
        @click="startEdit"
        @focus="startEdit">
        <div class="cell__content"
             :class="`cell__content--${head.type}`"
             v-if="!editMode">
             <CellContent :head="head" :content="cellContent" />
        </div>
        <InputField @stopEditMode="stopEdit"
                    v-else
                    v-model="cellContent"
                    :type="head.type"
                    :additional="head.additional"/>
    </component>
</template>

<script>
  import InputField from './InputField.vue'
  import CellContent from './CellContent.vue'
  import {updateEvent} from '../services/api'

  export default {
    name: 'TableCell',
    components: {
      InputField,
      CellContent
    },
    props: [
      'head',
      'row',
      'tag'
    ],
    data: function () {
      return {
        editMode: false,
        currentHeight: false,
        cellContent: ''
      }
    },
    computed: {
      htmlTag () {
        return this.tag || 'td'
      },
      inlineStyles () {
        return this.currentHeight ? {
          height: this.head.type !== 'icons' ? `${this.currentHeight}px` : 'auto'
        } : {}
      }
    },
    methods: {
      startEdit: function () {
        if (!this.editMode) {
          this.currentHeight = this.$el.clientHeight
          this.editMode = true
        }
      },
      stopEdit: async function () {
        this.editMode = false
        this.currentHeight = false
        const apiResult = await updateEvent(this.row.id, this.head.id, this.cellContent, this.head.type)
        if (apiResult && apiResult.error) {
          alert(`Beim Bearbeiten ist ein Fehler aufgetreten: ${apiResult.error}`)
        }
      }
    },
    created: function () {
      this.cellContent = this.row.fields[this.head.id]
    }
  }
</script>

<style scoped>
    .cell {
        flex: 1;
        border-bottom: 1px solid grey;
    }
    .cell:not(:last-child) {
        border-right: 1px solid gray;
    }
    .cell__content {
        padding: 10px;
        text-align: left;
    }
    .cell__content--longtext {
        white-space: pre-line;
        margin-top: -20px;
    }
</style>
