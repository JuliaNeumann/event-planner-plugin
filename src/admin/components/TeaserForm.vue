<template>
  <div class="teaser-form">
    <div class="teaser-form__field">
      <p>
        Der Shortcode <strong>[eventplanner_current]</strong> ist dazu gedacht, einen kurzen Text auszugeben, der den Besucher über die 
        nächste regelmäßig stattfindende Veranstaltung (z.B. den nächsten Gottesdienst) informiert (z.B. zur Anzeige auf der Startseite).
        Hier kann der Text dafür eingegeben werden (Verwende %date% an der Stelle, wo das Datum erscheinen soll):
      </p>
      <textarea name="editor-main-text" id="editor-main-text" cols="30" rows="10" v-model="mainText"></textarea>
    </div>
    <div class="teaser-form__field">
      <p>
        Hier kann ein anderer Text angegeben werden, der erscheinen soll, wenn die Veranstaltung ausfällt 
        (Verwende auch hier %date% an der Stelle, wo das Datum erscheinen soll):
      </p>
      <textarea name="editor-cancel-text" id="editor-cancel-text" cols="30" rows="10" v-model="cancelText"></textarea>
    </div>
    <div class="teaser-form__field">
      <button class="teaser-form__button" type="button" @click="save">
        <i class="fa fa-fw fa-save"></i>&nbsp;Speichern
      </button>
    </div>
  </div>
</template>

<script>
import { getConfig, updateTeaserTexts } from "../services/api";

export default {
  name: "TeaserForm",

  data () {
    return {
      config: []
    }
  },

  computed: {
    mainText() {
      let text = this.config.filter(el => el.name === "teaser_main_text");
      return text.length ? text[0].data : "";
    },
    cancelText() {
      let text = this.config.filter(el => el.name === "teaser_cancel_text");
      return text.length ? text[0].data : "";
    }
  },

  async mounted() {
    this.config = await getConfig();
    setTimeout(() => {
      wp.editor.initialize('editor-main-text');
      wp.editor.initialize('editor-cancel-text');
    }, 0);
  },

  methods: {
    async save() {
      const apiResult = await updateTeaserTexts(wp.editor.getContent('editor-main-text'), wp.editor.getContent('editor-cancel-text'));
      if (apiResult && apiResult.success) {
        alert("Änderungen wurden gespeichert!");
        return;
      }
      if (apiResult && apiResult.error) {
        alert(`Beim Speichern ist ein Fehler aufgetreten: ${apiResult.error}`)
        return
      }
      console.error(apiResult);
      alert(`Beim Speichern ist ein unbekannter Fehler aufgetreten`)
    }
  }
}
</script>

<style lang="less" scoped>
  .teaser-form {
    &__field {
      padding-bottom: 20px;
      max-width: 1000px;
    }
  }
</style>