<template>
    <div class="teaser-form">
        <div class="teaser-form__field">
            <p class="teaser-form__text">
                Der Shortcode <strong>[eventplanner_current]</strong> ist dazu gedacht,
                einen kurzen Text auszugeben, der den Besucher über die
                nächste regelmäßig stattfindende Veranstaltung (z.B. den nächsten Gottesdienst) informiert
                (z.B. zur Anzeige auf der Startseite).
                Hier kann der Text dafür eingegeben werden
                (Verwende %date% an der Stelle, wo das Datum erscheinen soll):
            </p>
            <textarea id="editor-main-text"
                      v-model="mainText"
                      name="editor-main-text"
                      cols="30"
                      rows="10" />
        </div>
        <div class="teaser-form__field">
            <p class="teaser-form__text">
                Hier kann ein anderer Text angegeben werden, der erscheinen soll, wenn die Veranstaltung ausfällt
                (Verwende auch hier %date% an der Stelle, wo das Datum erscheinen soll):
            </p>
            <textarea id="editor-cancel-text"
                      v-model="cancelText"
                      name="editor-cancel-text"
                      cols="30"
                      rows="10" />
        </div>
        <div class="teaser-form__field">
            <p class="teaser-form__text">
                Damit du angeben kannst, dass eine Veranstaltung ausfällt,
                musst du in der Tabelle einen Tabellenkopf vom Typ "Icons" anlegen und dort ein Icon hinzufügen,
                welches ausgewählt werden muss, wenn eine Veranstaltung ausfällt.
            </p>
            <p class="teaser-form__text">
                <label for="icon-header">Wähle hier den entsprechenden Tabellenkopf aus:</label>
                <select id="icon-header"
                        v-model="modelIconHeader">
                    <option value="">
                        --Auswählen--
                    </option>
                    <option v-for="header in iconHeaders"
                            :key="`icon_header_${header.id}`"
                            :value="header.id">
                        {{ header.name }}
                    </option>
                </select>
            </p>
            <p class="teaser-form__text">
                <label for="cancel-icon">Gib hier den Namen des entsprechenden Icons an (Fontawesome Icon Name):</label>
                <input id="cancel-icon"
                       v-model="modelCancelIcon"
                       type="text">
            </p>
            <p class="teaser-form__text">
                Sollen die anderen Icons aus dem Tabellenkopf unter dem Teasertext angezeigt werden?
                <input id="show-icons"
                       v-model="modelShowIcons"
                       type="checkbox"
                       value="true"><label for="show-icons">Ja</label>
            </p>
            <p class="teaser-form__text">
                <label for="icons-headline">
                    Wenn über den Icons noch eine Überschrift ("Besonderheiten" o.ä.) erscheinen soll,
                    dann gib diese hier an:
                </label>
                <input id="icons-headline"
                       v-model="modelIconsHeadline"
                       type="text">
            </p>
        </div>
        <div>
            <button class="teaser-form__button"
                    type="button"
                    @click="save">
                <i class="fa fa-fw fa-save" />&nbsp;Speichern
            </button>
        </div>
    </div>
</template>

<script>
import { getConfig, updateConfig, getHeaders } from "../services/api";

export default {
    name: "TeaserForm",

    data() {
        return {
            config: [],
            headers: [],
            modelIconHeader: "",
            modelCancelIcon: "",
            modelShowIcons: false,
            modelIconsHeadline: ""
        };
    },

    computed: {
        mainText() {
            return this.getConfigValue("teaser_main_text");
        },
        cancelText() {
            return this.getConfigValue("teaser_cancel_text");
        },
        iconHeaders() {
            return this.headers.filter(header => header.type === "icons");
        }
    },

    async mounted() {
        this.config = await getConfig();
        this.modelIconHeader = this.getConfigValue("header_for_widget");
        this.modelCancelIcon = this.getConfigValue("icon_for_cancel");
        this.modelShowIcons = this.getConfigValue("teaser_show_icons") === "1";
        this.modelIconsHeadline = this.getConfigValue("teaser_icons_headline");
        setTimeout(() => {
            wp.editor.initialize("editor-main-text");
            wp.editor.initialize("editor-cancel-text");
        }, 0);
        this.headers = await getHeaders();
    },

    methods: {
        async save() {
            const apiResult = await updateConfig({
                teaser_main_text: wp.editor.getContent("editor-main-text"),
                teaser_cancel_text: wp.editor.getContent("editor-cancel-text"),
                header_for_widget: this.modelIconHeader,
                icon_for_cancel: this.modelCancelIcon,
                teaser_show_icons: this.modelShowIcons,
                teaser_icons_headline: this.modelIconsHeadline
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
  .teaser-form {
    &__field {
      padding: 10px;
      max-width: 1000px;
      border: 1px solid gray;
      margin-bottom: 15px;
    }

    &__text {
      margin: 0 0 10px;
    }
  }
</style>