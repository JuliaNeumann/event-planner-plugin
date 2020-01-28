<template>
    <span>
        <template v-if="head.type === 'date'">
            {{ content | timestampToLocalString }}
        </template>
        <template v-else-if="head.type === 'icons'">
            <IconList :additional="head.additional"
                      :icons="content" />
        </template>
        <template v-else>
            {{ content }}
        </template>
    </span>
</template>

<script>
import IconList from "./IconList.vue";

export default {
    name: "CellContent",

    components: {
        IconList
    },

    props: {
        head: {
            type: Object,
            default: () => {}
        },
        content: {
            type: String,
            default: ""
        }
    }
};
</script>

<style scoped>

</style>
