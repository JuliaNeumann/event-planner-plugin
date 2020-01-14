import Vue from 'vue'
import Router from 'vue-router'
import EditTableHeaders from 'admin/pages/EditTableHeaders.vue'
import EditTableGroups from 'admin/pages/EditTableGroups.vue'
import EditTeaser from 'admin/pages/EditTeaser.vue'
import EditFootnotes from 'admin/pages/EditFootnotes.vue'

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
    {
      path: '/table-groups',
      name: 'EditTableGroups',
      component: EditTableGroups
    },
    {
      path: '/footnotes',
      name: 'EditFootnotes',
      component: EditFootnotes
    }
  ]
})
