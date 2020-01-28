<template>
    <div class="app-settings">
        <h2>Teaser bearbeiten</h2>
        <TeaserForm />
    </div>
</template>

<script>
import TeaserForm from "../components/TeaserForm.vue";

export default {
    name: "EditTeaser",

    components: {
        TeaserForm
    }
};
</script>

<style lang="css" scoped>
</style>
