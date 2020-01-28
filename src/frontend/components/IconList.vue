<template>
    <div class="icon-list">
        <i v-for="icon in cleanIcons"
           :key="icon"
           class="fa fa-fw"
           :class="`fa-${icon}`"
           :title="descriptions[icon]" />
    </div>
</template>

<script>
export default {
    name: "IconList",

    props: {
        icons: {
            type: String,
            default: ""
        },
        additional: {
            type: String,
            default: "[]"
        }
    },

    computed: {
        cleanIcons() {
            const parsedIcons = this.icons ? JSON.parse(this.icons) : [];
            return parsedIcons.filter(icon => {
                let exists = false;
                // check in the header config that this icon exists
                JSON.parse(this.additional).forEach(iconInfo => {
                    if (iconInfo.icon === icon) {
                        exists = true;
                    }
                });
                return exists;
            });
        },
        descriptions() {
            const map = {};
            JSON.parse(this.icons).forEach(icon => {
                map[icon] = false;
                JSON.parse(this.additional).forEach(iconInfo => {
                    if (iconInfo.icon === icon) {
                        map[icon] = iconInfo.name;
                    }
                });
            });
            return map;
        }
    }
};
</script>

<style scoped>
  .icon-list {
    display: inline-block;
  }
  .fa-fw {
    margin-right: 5px;
  }
</style>
