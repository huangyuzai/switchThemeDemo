import { createRouter, createWebHashHistory } from 'vue-router'
import { tabbar } from '@/config';
import { useStore } from '@/store/index'

const routes = [
  {
    name: 'notFound',
    path: '/:path(.*)+',
    redirect: {
      name: 'home'
    }
  },
  {
    name: 'home',
    path: '/home',
    component: () => import('@/view/home/index.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    name: 'user',
    path: '/user',
    component: () => import('@/view/user/index.vue'),
    meta: {
      title: '我的'
    }
  },
  {
    name: 'goods',
    path: '/goods',
    component: () => import('@/view/goods/index.vue'),
    meta: {
      title: '商品详情'
    }
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to, from, next) => {
  const title = to?.meta?.title
  if (title) {
    document.title = title as string
  }
  // 判断是否为tabbar页面
  const isTabbar = tabbar.list.some(item => item.name == to?.name)
  // 同步修改 store 的状态
  const store = useStore()
  store.checkTabbar(isTabbar)
  next()
})

export default router
