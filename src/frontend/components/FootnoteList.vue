<template>
    <div v-if="footnotes.length > 0"
         class="footnotes">
        <h3>Anmerkungen:</h3>
        <ol class="footnote__list">
            <li v-for="footnote in footnotes"
                :id="`footnote_${footnote.number}`"
                :key="footnote.number"
                class="footnote__item">
                <sup>
                    {{ footnote.number }}
                </sup>
                {{ footnote.text }}
            </li>
        </ol>
    </div>
</template>

<script>
export default {
    name: "FootnoteList",

    props: {
        heads: {
            type: Array,
            default: () => []
        }
    },

    computed: {
        footnotes: function() {
            let footnotes = [];
            this.heads.forEach((head) => {
                head.footnotes.forEach((footnote) => {
                    footnotes.push(footnote);
                });
            });
            return footnotes;
        }
    }
};
</script>

<style scoped>
  .footnotes {
    text-align: left;
  }

  .footnote__list {
    list-style: none;
    padding-left: 20px;
  }

  .footnote__item {
    background-color: white;
    padding: 3px;
  }

  @keyframes HighlightItem {
    from {
      background-color: #9DB5C7;
    }

    to {
      background-color: white;
    }
  }

  .footnote__item:target {
    animation: HighlightItem 2.5s ease-in-out forwards;
  }
</style>
