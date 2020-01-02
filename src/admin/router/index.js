import Vue from 'vue'
import Router from 'vue-router'
import EditTableHeaders from 'admin/pages/EditTableHeaders.vue'
import EditTeaser from 'admin/pages/EditTeaser.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'EditTableHeaders',
      component: EditTableHeaders
    },
    {
      path: '/teaser',
      name: 'EditTeaser',
      component: EditTeaser
    },
  ]
})
