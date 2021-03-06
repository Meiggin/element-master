import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRouterMap = [
    { path: '/', component: () => import('../views/home/index'), hidden: true },
    { path: '/home', component: () => import('../views/home/index'), hidden: true },
    { path: '/map', component: () => import('../views/map/index'), hidden: true },
]
export default new Router({
    // mode: 'history', //后端支持可开
    // scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
})