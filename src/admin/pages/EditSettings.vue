<template>
  <div class="edit-settings">
    <h2>Einstellungen</h2>
    Hier kannst du noch einige allgemeine Einstellungen vornehmen.
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

<style>

</style>