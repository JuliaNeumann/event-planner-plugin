<template>
    <form class="settings-form">
        <div class="settings-form__field">
            <input id="autofill"
                   v-model="modelAutofill"
                   type="checkbox">
            <label for="autofill">Tabelle automatisch befüllen</label>
            <br>
            <small>
                Wenn du diese Option auswählst, werden immer automatisch Veranstaltungen für deinen gewählten Wochentag
                (siehe unten) für das laufende und das kommende Jahr angelegt.
                Du kannst diese dann trotzdem manuell löschen bzw. Veranstaltungen an anderen Wochentagen
                manuell hinzufügen.
            </small>
        </div>
        <div class="settings-form__field">
            <label for="weekday">
                Wähle hier aus, an welchem Wochentag deine regelmäßige Veranstaltung (z.B. Gottesdienst) stattfindet.
            </label>
            <select id="weekday"
                    v-model="modelWeekday">
                <option value="sunday">
                    Sonntag
                </option>
                <option value="monday">
                    Montag
                </option>
                <option value="tuesday">
                    Dienstag
                </option>
                <option value="wednesday">
                    Mittwoch
                </option>
                <option value="thursday">
                    Donnerstag
                </option>
                <option value="friday">
                    Freitag
                </option>
                <option value="saturday">
                    Samstag
                </option>
            </select>
            <br>
            <small>
                Diese Einstellungen wird für das automatische Befüllen der Tabelle verwendet
                und für die Anzeige des Teasers.
            </small>
        </div>
        <div class="settings-form__field">
            Hier kannst du auswählen, welche Tabellenköpfe bei der Übersichtstabelle
            (Shortcode: [eventplanner static="true"]) standardmäßig angezeigt werden sollen:<br>
            (Die Nutzer können dann trotzdem über Filter alle Tabellenköpfe ein- und ausblenden)<br>
            <div>
                <div v-for="header in headers"
                     :key="`header_${header.id}`"
                     class="settings-form__header">
                    <input :id="`header_${header.id}`"
                           v-model.number="modelHeaders"
                           type="checkbox"
                           :value="header.id"
                           :disabled="header.order_id === '1'">
                    <label :for="`header_${header.id}`">{{ header.name }}</label>
                </div>
            </div>
        </div>
        <button class="settings-form__button"
                type="button"
                @click="save">
            <i class="fa fa-fw fa-save" />&nbsp;Speichern
        </button>
    </form>
</template>

<script>
import { getConfig, updateConfig, getHeaders } from "../services/api";

export default {
    name: "SettingsForm",

    data() {
        return {
            modelWeekday: "sunday",
            modelHeaders: [],
            config: [],
            headers: [],
            modelAutofill: false
        };
    },

    async mounted() {
        this.config = await getConfig();
        this.headers = await getHeaders();
        this.modelWeekday = this.getConfigValue("autofill_weekday");
        this.modelAutofill = this.getConfigValue("use_autofill") === "1";
        const initialHeaders = this.getConfigValue("static_fields");
        if (initialHeaders) {
            this.modelHeaders = JSON.parse(initialHeaders);
        }
    },

    methods: {
        async save() {
            const apiResult = await updateConfig({
                autofill_weekday: this.modelWeekday,
                static_fields: JSON.stringify(this.modelHeaders),
                use_autofill: this.modelAutofill
            });
            if (apiResult && apiResult.success) {
                alert("Änderungen wurden gespeichert!");
                return;
            }
            if (apiResult && apiResult.error) {
                alert(`Beim Speichern ist ein Fehler aufgetreten: ${apiResult.error}`);
                return;
            }
            console.error(apiResult);
            alert("Beim Speichern ist ein unbekannter Fehler aufgetreten");
        },

        getConfigValue(key) {
            let configValueArray = this.config.filter(el => el.name === key);
            return configValueArray.length ? configValueArray[0].data : "";
        }
    }
};
</script>

<style lang="less" scoped>
  .settings-form {
    &__field {
      padding: 10px;
      max-width: 1000px;
      border: 1px solid gray;
      margin-bottom: 15px;
    }

    &__header:first-child {
      padding-top: 10px;
    }
  }
</style>