/**
 * Created by cqx on 2017/5/16.
 */
//main.js
import Vue from 'vue';
import Vuex from 'vuex';
import router from './router.js';
import App from './views/example.vue';
import './app/main.css';//使用require导入css文件


Vue.config.debug = true; // 开启错误提示

const app = new Vue({
    el: '#app',
    render: h => h(App),
});

const appRouter = new Vue({
    el: '#root',
    router: router,
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
});

router.push("/router1");
