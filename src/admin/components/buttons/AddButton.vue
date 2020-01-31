<template>
    <button type="button">
        <i class="fa fa-fw fa-plus" />&nbsp;{{ text }}
    </button>
</template>

<script>
export default {
    name: "SaveButton",

    props: {
        text: {
            type: String,
            default: "Hinzufügen"
        }
    }
};
</script>