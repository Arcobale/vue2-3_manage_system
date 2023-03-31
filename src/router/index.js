import Vue from "vue";
import VueRouter from "vue-router";
import Home from '@/components/Home';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home,
        },
        {
            path: '*',
            redirect: '/home',
        }
    ],
    mode: 'history',
})