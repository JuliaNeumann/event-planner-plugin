<template>
    <form>
        <table class="form-table"
               role="presentation">
            <tr>
                <th scope="row">
                    Automatisch befüllen
                </th>
                <td>
                    <input id="epp-autofill"
                           v-model="modelAutofill"
                           type="checkbox">
                    <label for="epp-autofill">Tabelle automatisch befüllen</label>
                    <p class="description">
                        Wenn du diese Option auswählst, werden immer automatisch
                        Veranstaltungen für deinen gewählten Wochentag (siehe unten) für das
                        laufende und das kommende Jahr angelegt. Du kannst diese dann
                        trotzdem manuell löschen bzw. Veranstaltungen an anderen Wochentagen
                        manuell hinzufügen.
                    </p>
                </td>
            </tr>
            <tr>
                <th scope="row">
                    <label for="epp-weekday">Wochentag & Uhrzeit
                    </label>
                </th>
                <td>
                    <select id="epp-weekday"
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
                    <vue-timepicker v-model="modelTime"
                                    :minute-interval="5" />
                    <p class="description">
                        Wähle hier aus, an welchem Wochentag und zu welcher Uhrzeit deine regelmäßige Veranstaltung
                        (z.B. Gottesdienst) stattfindet.
                    </p>
                    <p class="description">
                        Diese Einstellungen werden für das automatische Befüllen der Tabelle
                        und für die Anzeige des Teasers verwendet.
                    </p>
                </td>
            </tr>
            <tr>
                <th scope="row">
                    Tabellenköpfe
                </th>
                <td>
                    <div
                        v-for="header in headers"
                        :key="`header_${header.id}`">
                        <input
                            :id="`header_${header.id}`"
                            v-model.number="modelHeaders"
                            type="checkbox"
                            :value="header.id"
                            :disabled="header.order_id === '1'">
                        <label :for="`header_${header.id}`">{{ header.name }}</label>
                    </div>
                    <p class="description">
                        Hier kannst du auswählen, welche Tabellenköpfe bei der Übersichtstabelle
                        (Shortcode: [eventplanner static="true"]) standardmäßig angezeigt werden
                        sollen.
                    </p>
                    <p class="description">
                        Die Nutzer können dann trotzdem über Filter alle Tabellenköpfe ein- und
                        ausblenden.
                    </p>
                </td>
            </tr>
            <tr>
                <th scope="row">
                    Icons
                </th>
                <td>
                    <input id="epp-fontawesome"
                           v-model="modelFontawesome"
                           type="checkbox">
                    <label for="epp-fontawesome">Fontawesome laden</label>
                    <p class="description">
                        Wenn du diese Option auswählst, wird das CSS für die Icons von
                        Fontawesome durch das Plugin geladen. (Es kann sein, dass dein Theme
                        oder ein anderes Plugin bereits Fontawesome Icons lädt und es deswegen
                        zu Konflikten kommt, bzw. unnötig zweimal die gleichen Icons geladen
                        werden - im Zweifelsfall, einfach mal ausprobieren, ob die Icons noch
                        korrekt funktionieren, wenn du hier den Haken nicht setzt.)
                    </p>
                </td>
            </tr>
        </table>
        <SaveButton class="settings-form__button"
                    @click.native="save" />
    </form>
</template>

<script>
import { getConfig, updateConfig, getHeaders } from "../services/api";
import VueTimepicker from "vue2-timepicker";
import "vue2-timepicker/dist/VueTimepicker.css";

export default {
    name: "SettingsForm",

    components: {
        VueTimepicker
    },

    data() {
        return {
            modelWeekday: "sunday",
            modelTime: "--:--",
            modelHeaders: [],
            config: [],
            headers: [],
            modelAutofill: false,
            modelFontawesome: true
        };
    },

    async mounted() {
        this.config = await getConfig();
        this.headers = await getHeaders();
        this.modelWeekday = this.getConfigValue("autofill_weekday");
        this.modelTime = this.getConfigValue("autofill_time");
        this.modelAutofill = this.getConfigValue("use_autofill") === "1";
        this.modelFontawesome = this.getConfigValue("use_fontawesome") === "1";
        const initialHeaders = this.getConfigValue("static_fields");
        if (initialHeaders) {
            this.modelHeaders = JSON.parse(initialHeaders);
        }
    },

    methods: {
        async save() {
            const apiResult = await updateConfig({
                autofill_weekday: this.modelWeekday,
                autofill_time: this.modelTime,
                static_fields: JSON.stringify(this.modelHeaders),
                use_autofill: this.modelAutofill,
                use_fontawesome: this.modelFontawesome
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
