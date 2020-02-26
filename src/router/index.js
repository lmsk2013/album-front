import Vue from 'vue'
import Router from 'vue-router'
import Album from '@/pages/album/Album'
import GallaryPage from '@/pages/gallaryPage/GallaryPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Album',
      component: Album
    }, {
      path: '/gallary/:id',
      name: 'GallaryPage',
      component: GallaryPage
    }
  ],
  // 解决滚动影响所有页面的问题
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
