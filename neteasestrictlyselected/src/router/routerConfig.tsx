import React from 'react'



import Login from '../view/login/index'
import Main from '../view/main/index'

export default {
    routes: [{
        path: '/login',
        component: Login
    },{
        path:'/main',
        component:Main,
            children:[{
                path: '/main/home',
                component: ()=><p>首页</p>
            },{
                path: '/main/special',
                component: ()=><p>专题</p>
            },{
                path: '/main/classify',
                component: ()=><p>分类</p>
            },{
                path: '/main/cart',
                component: ()=><p>购物车</p>
            },{
                path: '/main/my',
                component: ()=><p>我的</p>
            }]
    },{
        from: '*',
        to:'/login'
    }]
}