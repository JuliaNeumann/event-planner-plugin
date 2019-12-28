export const inputMixin = {
  props: [
    'value'
  ],
  data: function () {
    return {
      inputContent: ''
    }
  },
  methods: {
    saveNewValue: function () {
      this.inputContent = this.inputContent || this.value
      this.$emit('input', this.inputContent)
    }
  },
  created: function () {
    this.inputContent = this.value
    if (this.focusOnStart) {
      this.$nextTick(() => this.$el.focus())
    }
  }
}
