<template>
    <button class="button button-primary"
            type="button">
        <i class="fa fa-fw fa-save" />&nbsp;{{ text }}
    </button>
</template>

<script>
export default {
    name: "SaveButton",

    props: {
        text: {
            type: String,
            default: "Speichern"
        }
    }
};
</script>