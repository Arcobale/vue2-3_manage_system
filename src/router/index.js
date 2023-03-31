import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/home',
            //路由懒加载
            component: () => import('@/components/Home'),
            //异步组件
            // component: resolve => require(['@/components/Home'], resolve),
        },
        {
            path: '*',
            redirect: '/home',
        }
    ],
    mode: 'history',
})