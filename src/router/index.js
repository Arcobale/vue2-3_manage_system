import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/login',
            //路由懒加载
            component: () => import('@/components/Login'),
            //异步组件
            // component: resolve => require(['@/components/Home'], resolve),
        },
        {
            path: '/Home',
            component: () => import('@/components/Home'),
        },
        {
            path: '*',
            name: 'NotFound',
            component: () => import('@/components/NotFound'),
        },
    ],
    mode: 'history',
})