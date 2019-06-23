/*
入口js
*/
//引入第三方模块
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//引入项目模块
import App from './App.vue'
import router from './router'

Vue.use(ElementUI)

new Vue({
    el:"#app",
    render: c => c(App),
    router
})