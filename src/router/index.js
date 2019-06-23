/*
路由器对象模块
*/
import Vue from "vue"
import VueRouter from 'vue-router'

import Login from '../pages/Login/Login.vue'
import Index from '../pages/Index/Index.vue'
import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
Vue.use(VueRouter)

export default new VueRouter({
    //所有路由
    routes:[
        {
            path:"/",
            component:Login
        },
        {
            path:"/index",
            component:Index,
            children:[
                {
                    path:'/index/msite',
                    component: Msite
                },
                {
                    path:'/index/search',
                    component: Search
                },
                {
                    path:'/index/order',
                    component: Order 
                },
                {
                    path:'/index/profile',
                    component: Profile 
                }
            ]
        }
        
       
    ]
})