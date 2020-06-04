<template>
    <button class="button button-primary" type="button">
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

<style lang="less" scoped>
    .button {
        background: #007cba;
        border-color: #007cba;
        color: #fff;
        text-decoration: none;
        text-shadow: none;
        display: inline-block;
font-size: 13px;
line-height: 2.15384615;
min-height: 30px;
margin: 0;
padding: 0 10px;
cursor: pointer;
border-width: 1px;
border-style: solid;
-webkit-appearance: none;
border-radius: 3px;
white-space: nowrap;
box-sizing: border-box;

        &:hover {
            background: #0071a1;
            border-color: #0071a1;
            color: #fff;
        }
    }
</style>