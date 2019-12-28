<template>
  <div class="icon-list">
    <i v-for="icon in cleanIcons"
       :key="icon"
       class="fa fa-fw"
       :class="`fa-${icon}`"
       :title="descriptions[icon]">
    </i>
  </div>
</template>

<script>
  export default {
    name: 'IconList',
    props: [
      'icons',
      'additional'
    ],
    computed: {
      cleanIcons () {
        return this.icons ? JSON.parse(this.icons) : []
      },
      descriptions () {
        const map = {}
        JSON.parse(this.icons).forEach(icon => {
          map[icon] = false
          JSON.parse(this.additional).forEach(iconInfo => {
            if (iconInfo.icon === icon) {
              map[icon] = iconInfo.name
            }
          })
        })
        return map
      }
    }
  }
</script>

<style scoped>
  .icon-list {
    display: inline-block;
  }
  .fa-fw {
    margin-right: 5px;
  }
</style>
