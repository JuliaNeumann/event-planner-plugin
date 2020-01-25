<template>
  <div class="edit-settings">
    <h2>Allgemeines</h2>
    <p>Der Event Planner funktioniert folgendermaßen:</p>
    <ul class="edit-settings__list">
      <li>Lege hier in den Einstellungen unter "Tabellenköpfe" fest, welche Daten in der Planungstabelle erfasst werden sollen (z.B. Ort der Veranstaltung, Prediger usw.).</li>
      <li>Außerdem kannst du Tabellenköpfe zu Gruppen zusammenfassen (diese werden in der Tabelle entsprechend dargestellt und können ein- und ausgeklappt werden) und Fußnoten mit Anmerkungen zu den Tabellenköpfen angeben.</li>
      <li>Füge auf der Seite, auf der die Planungstabelle angezeigt werden soll, den Shortcode <strong>[eventplanner]</strong> ein.</li>
      <li>Die so erzeugte Tabelle kan von jedem Besucher der Seite per Klick auf die Tabellenfelder bearbeitet werden - sie sollte also nur den Leuten zugänglich gemacht werden, die dazu berechtigt sind.</li>
      <li>Zusätzlich gibt es den Shortcode <strong>[eventplanner static="true"]</strong> - dieser erzeugt eine andere Ansicht der Tabelle, die eher als statische Übersicht gedacht ist.
          Hier können zusätzlich ein oder mehrere Jahre angegeben werden, für die Daten angezeigt werden sollen, z.B. [eventplanner static="true" years="2020,2021"].</li>
    </ul>
    <h2>Einstellungen</h2>
    <p>Hier kannst du noch einige allgemeine Einstellungen vornehmen.</p>
    <SettingsForm></SettingsForm>
  </div>
</template>

<script>
import SettingsForm from "../components/SettingsForm.vue";

export default {
  name: "EditSettings",

  components: {
    SettingsForm
  }
}
</script>

<style lang="less" scoped>
  .edit-settings {
    &__list {
      list-style: disc;
      padding-inline-start: 40px;
    }
  }
</style>