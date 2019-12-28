import _debounce from 'lodash.debounce'

export const responsiveMixin = {
  data () {
    return {
      mobile: true
    }
  },
  async mounted () {
    this.setMobile()
    window.addEventListener('resize', _debounce(this.setMobile, 500))
  },
  methods: {
    setMobile: function () {
      if (typeof this.$el.clientWidth !== 'undefined') {
        this.mobile = this.$el.clientWidth < 825
      }
    }
  }
}
