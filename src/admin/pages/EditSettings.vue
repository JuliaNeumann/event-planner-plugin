<template>
    <div>
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