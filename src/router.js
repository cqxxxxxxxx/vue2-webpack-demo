/**
 * Created by cqx on 2017/5/17.
 */
import Vue from 'vue';
import Router from 'vue-router';
import RouterDemo1 from './views/router1.vue';
import RouterDemo2 from './views/router2.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/router1',
            // a single route can define multiple named components
            // which will be rendered into <router-view>s with corresponding names.
            component: RouterDemo1,
            meta: {
                title: '创建会员状态'
            }
        },
        {
            path: '/router2',
            component: RouterDemo2,
            meta: {
                title: '承诺书',
            }
        }
    ]
});