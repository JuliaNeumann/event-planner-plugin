<template>
    <div class="app-settings">
        <h1>Teaser bearbeiten</h1>
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
