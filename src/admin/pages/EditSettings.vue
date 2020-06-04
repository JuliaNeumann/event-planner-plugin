<template>
    <div class="edit-settings">
        <h1>Allgemeine Einstellungen</h1>
        <SettingsForm />
    </div>
</template>

<script>
import SettingsForm from "../components/SettingsForm.vue";

export default {
    name: "EditSettings",

    components: {
        SettingsForm
    }
};
</script>

<style lang="less" scoped>
  .edit-settings {
    &__list {
      list-style: disc;
      padding-inline-start: 40px;
    }
  }
</style>