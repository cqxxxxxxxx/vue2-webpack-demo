/**
 * Created by cqx on 2017/5/16.
 */
//main.js
import cqx, {version} from './greeter';
import Vue from 'vue';
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from '../views/example.vue'
import './main.css';//使用require导入css文件

document.getElementById('root').appendChild(cqx());
console.log(version);
console.log(version);

const app = new Vue({
    el: '#app',
    render: h => h(App),
});