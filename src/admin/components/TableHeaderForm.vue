<template>
    <form class="table-header-form">
        <div v-if="isPreconfigured"
             class="table-header-form__field table-header-form__field--block">
            <i class="fa fa-info-circle" />&nbsp;
            <strong>Dieser Tabellenkopf muss für jede Veranstaltung angegeben werden.
                Deswegen kann hier nur der Name und die Beschreibung geändert werden.</strong>
        </div>
        <div class="table-header-form__field">
            <label class="table-header-form__label"
                   :for="`header_name_${id}`">Name: </label>
            <input :id="`header_name_${id}`"
                   v-model="modelName"
                   class="table-header-form__input"
                   type="text">
        </div>
        <div class="table-header-form__field">
            <label class="table-header-form__label"
                   :for="`header_type_${id}`">
                Typ: <i class="fa fa-info-circle"
                        :title="infoTextForType" />&nbsp;
            </label>
            <select :id="`header_type_${id}`"
                    v-model="modelType"
                    class="table-header-form__input"
                    :disabled="isPreconfigured">
                <option value="date">
                    Datum
                </option>
                <option value="time">
                    Uhrzeit
                </option>
                <option value="text">
                    Text
                </option>
                <option value="longtext">
                    Mehrzeiliger Text
                </option>
                <option value="icons">
                    Icons
                </option>
            </select>
        </div>
        <div class="table-header-form__field">
            <label class="table-header-form__label"
                   :for="`header_order_${id}`">Reihenfolge: </label>
            <input :id="`header_order_${id}`"
                   v-model="modelOrderId"
                   class="table-header-form__input"
                   type="number"
                   :disabled="isPreconfigured"
                   :min="isPreconfigured ? 1 : 3"
                   step="1">
        </div>
        <div class="table-header-form__field table-header-form__field--block">
            <label class="table-header-form__label"
                   :for="`header_description_${id}`">
                Beschreibung: <i class="fa fa-info-circle"
                                 :title="infoForDescription" />&nbsp;
            </label>
            <input :id="`header_description_${id}`"
                   v-model="modelDescription"
                   class="table-header-form__input"
                   type="text">
        </div>
        <div v-if="modelType === 'icons'"
             class="table-header-form__field table-header-form__field--block">
            <label class="table-header-form__label">
                Icons:
            </label>
            <IconsForm ref="icons"
                       :icons="JSON.parse(additional || '[]')" />
        </div>
        <div class="table-header-form__field table-header-form__field--block">
            <SaveButton class="table-header-form__button"
                        @click.native="saveHeader" />
            <DeleteButton v-if="!isPreconfigured"
                          class="table-header-form__button"
                          @click.native="deleteHeader" />
        </div>
    </form>
</template>

<script>
import IconsForm from "./IconsForm.vue";
import { updateHeader, deleteHeader } from "../services/api";

export default {
    name: "TableHeaderForm",

    components: {
        IconsForm
    },

    props: {
        isPreconfigured: {
            type: Boolean,
            default: false
        },
        id: {
            type: String,
            default: ""
        },
        name: {
            type: String,
            default: ""
        },
        order_id: {
            type: String,
            default: ""
        },
        group_id: {
            type: String,
            default: ""
        },
        type: {
            type: String,
            default: ""
        },
        additional: {
            type: String,
            default: ""
        },
        description: {
            type: String,
            default: ""
        }
    },

    data() {
        return {
            modelName: this.name,
            modelOrderId: this.order_id,
            modelType: this.type,
            modelDescription: this.description,
            infoTextForType: "Da je nach Typ unterschiedliche Daten in der Tabelle gespeichert werden, " +
                "kann das nachträgliche Ändern des Typs zu unvorhergesehen Ergebnissen führen. " +
                "Also am Besten nur ändern, wenn du weißt, was du tust.",
            infoForDescription: "Die Beschreibung wird - wenn vorhanden - angezeigt, " +
                                "wenn sich die Maus über dem Tabellenkopf befindet."
        };
    },

    methods: {
        async saveHeader() {
            const apiResult = await updateHeader({
                id: this.id,
                name: this.modelName,
                order_id: this.modelOrderId,
                type: this.modelType,
                additional: this.modelType === "icons" ? JSON.stringify(this.$refs.icons.modeledIcons) : "",
                description: this.modelDescription
            });
            if (apiResult && apiResult.error) {
                alert(`Beim Bearbeiten ist ein Fehler aufgetreten: ${apiResult.error}`);
            } else if (apiResult && apiResult.success) {
                alert("Änderungen gespeichert!");
                this.$emit("delete");
            } else {
                console.error(apiResult);
                alert("Es ist ein unbekannter Fehler aufgetreten!");
            }

        },
        async deleteHeader() {
            const confirmed = window.confirm(
                "Dieser Tabellenkopf und alle zugehörigen Tabellendaten werden endgültig gelöscht. " +
                "Dies kann nicht rueckgängig gemacht werden. Bist du sicher?"
            );
            if (confirmed) {
                const apiResult = await deleteHeader(this.id);
                if (apiResult && apiResult.success) {
                    alert("Tabellenkopf und zugehörige Daten wurden gelöscht!");
                    this.$emit("delete");
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