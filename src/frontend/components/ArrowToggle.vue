<template functional>
    <i class="arrow"
       :class="`arrow--${props.direction}`" />
</template>

<script>
export default {
    name: "ArrowToggle",

    props: {
        direction: {
            type: String,
            default: "right"
        }
    }
};
</script>

<style scoped>
    .arrow {
        border: solid #3E6786;
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 3px;
        margin: 0 8px 2px 0;
        border-radius: 1px;
    }
    .arrow--big {
        padding: 5px;
    }
    .arrow--right {
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
    }
    .arrow--left {
        transform: rotate(135deg);
        -webkit-transform: rotate(135deg);
    }
    .arrow--up {
        transform: rotate(-135deg);
        -webkit-transform: rotate(-135deg);
    }
    .arrow--down {
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
    }
</style>
