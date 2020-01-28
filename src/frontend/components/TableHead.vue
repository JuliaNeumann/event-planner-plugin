<template>
    <th class="head">
        {{ text }}
        <sup v-if="footnotes">
            <a v-for="footnote in footnotes"
               :key="footnote.number"
               :href="`#footnote_${footnote.number}`"
               class="head__footnote">
                {{ footnote.number }}
            </a>
        </sup>
        <small v-if="description"
               class="head__tooltip">
            {{ description }}
        </small>
    </th>
</template>

<script>
export default {
    name: "TableHead",

    props: {
        text: {
            type: String,
            default: ""
        },
        description: {
            type: String,
            default: ""
        },
        footnotes: {
            type: Array,
            default: () => []
        }
    }
};
</script>

<style scoped>
    .head {
        width: 100px;
        word-break: break-all;
        word-break: break-word;
        hyphens: auto;
        border-right: 1px solid grey;
        border-bottom: 1px solid grey;
        padding: 5px;
        text-align: left;
    }

    @media only screen and (min-width: 480px) {
        .head {
            width: 175px;
            padding: 10px;
        }
    }

    .head__tooltip {
        display: none;
        position: absolute;
        max-width: 250px;
        background-color: white;
        color: #3E6786;
        border: 1px solid #3E6786;
        padding: 5px;
        z-index: 1;
    }

    .head:hover .head__tooltip {
        display:  block;
    }

    .head__footnote,
    .head__footnote:hover,
    .head__footnote:active,
    .head__footnote:focus,
    .head__footnote:visited {
        color: #3E6786;
        text-decoration: none;
    }

    .head__footnote:not(:last-child)::after {
      content: ',';
    }
</style>
