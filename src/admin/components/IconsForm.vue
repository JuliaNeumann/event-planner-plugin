<template>
    <div class="icons-form">
        <div v-for="(icon, index) in modeledIcons"
             :key="`${icon.icon}_${index}`"
             class="icons-form__icon">
            <i :class="`fa fa-fw fa-${icon.icon}`" />&nbsp;
            <input v-model="icon.name"
                   type="text">&nbsp;
            <button type="button"
                    @click="deleteIcon(index)">
                <i class="fa fa-fw fa-trash" />&nbsp;Löschen
            </button>
        </div>
        <button type="button"
                @click="addIcon">
            <i class="fa fa-fw fa-plus" />&nbsp;Icon hinzufügen
        </button>
        <a href="https://fontawesome.com/icons?d=gallery&m=free"
           target="_blank">Hier kannst du sehen, welche Icons es gibt.</a>
    </div>
</template>

<script>
export default {
    name: "IconsForm",

    props: {
        icons: {
            type: Array,
            default: () => []
        }
    },

    data() {
        return {
            modeledIcons: this.icons.map(icon => Object.assign({}, icon))
        };
    },

    methods: {
        addIcon() {
            const iconName = prompt("Gib den Fontawesome Icon Name an: ");
            if (iconName) {
                this.modeledIcons.push({icon: iconName, name: iconName});
            } else if (iconName !== null) {
                alert("Du musst einen Icon Namen für das neue Icon angeben!");
            }
        },

        deleteIcon(index) {
            const confirmed = window.confirm(
                "Dieses Icon wirklich loeschen? " +
                "(Wird erst endgültig gespeichert, wenn du auf \"Speichern\" geklickt hast.)"
            );
            if (confirmed) {
                this.modeledIcons.splice(index, 1);
            }
        }
    }
};
</script>

<style lang="less" scoped>

</style>