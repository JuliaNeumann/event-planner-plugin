<template>
    <button type="button">
        <i class="fa fa-fw fa-trash" />&nbsp;{{ text }}
    </button>
</template>

<script>
export default {
    name: "DeleteButton",

    props: {
        text: {
            type: String,
            default: "Löschen"
        }
    }
};
</script>