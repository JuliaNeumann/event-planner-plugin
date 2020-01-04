<template>
  <div class="icons-form">
    <div class="icons-form__icon" v-for="(icon, index) in icons" :key="`${icon.name}_${index}`">
      <i :class="`fa fa-fw fa-${icon.icon}`"></i>&nbsp;{{ icon.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'IconsForm',

  props: {
    icons: Array
  }
}
</script>

<style lang="less" scoped>

</style>