<template>
    <div class="edit-footnotes">
        <h1>Fußnoten bearbeiten</h1>
        <FootnotesForm v-for="header in headers"
                       :key="`header_${header.id}`"
                       :header="header"
                       :footnotes="getFootnotesForHeader(header.id)"
                       @update="load" />
    </div>
</template>

<script>
import FootnotesForm from "../components/FootnotesForm.vue";
import { getFootnotes, getHeaders } from "../services/api";

export default {
    name: "EditFootnotes",

    components: {
        FootnotesForm
    },

    data() {
        return {
            headers: [],
            footnotes: []
        };
    },

    async created() {
        await this.load();
    },

    methods: {
        async load() {
            this.headers = [];
            this.footnotes = await getFootnotes();
            this.headers = await getHeaders();
        },
        getFootnotesForHeader(headerId) {
            return this.footnotes.filter(footnote => footnote.header_id === headerId);
        }
    }

};
</script>

<style>

</style>