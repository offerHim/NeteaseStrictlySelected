import React from 'react'
import RouterView from './RouterView'

//引入登陆组件
import Login from '../views/Login'

export default {
    routes: [
        {
            path: '/login',
            component: () => <Login></Login>
        },
        {
            path: '/main',
            component: (props: any) => (
                <>
                    <p>主页</p>
                    <RouterView routes={props.routes}></RouterView>
                </>
            ),
            children: [
                {
                    path: '/main/home',
                    component: () => <p>首页</p>
                },
                {
                    path: '/main/classify',
                    component: () => <p>分类</p>
                },
                {
                    path: '/main/cart',
                    component: () => <p>购物车</p>
                },
                {
                    path: '/main/my',
                    component: () => <p>我的</p>
                }
            ]
        },
        {
            from: '*',
            to: '/login'
        }
    ]
}


