import Vue from 'vue'
import Router from 'vue-router'
import choice from 'components/choice/choice'
import rank from 'components/rank/rank'
import songList from 'components/disc-list/disc-list'
import radio from 'components/radio/radio'
import mv from 'components/mv/mv'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/choice'
    },
    {
      path: '/choice',
      component: choice
    },
    {
      path: '/rank',
      component: rank
    },
    {
      path: '/disc-list',
      component: songList
    },
    {
      path: '/radio',
      component: radio
    },
    {
      path: '/mv',
      component: mv
    }
  ]
})
