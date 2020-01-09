import Login from '../view/login/Login'
import Main from '../view/main/index'
import Home from '../view/main/home/index'
import Special from '../view/main/special/index'
import Classify from '../view/main/classify/index'
import Cart from '../view/main/cart/index'
import My from '../view/main/my/index'
import BrandDetail from '../view/main/BrandDetail/index'
import GoodsDetail from '../view/main/goodsDetail/index'

export default {
    routes: [{
        path:'/login',
        component:Login
    },{
        path:'/main',
        component:Main,
            children:[{
                path: '/main/home',
                component: Home
            },{
                path: '/main/special',
                component: Special
            },{
                path: '/main/classify',
                component: Classify
            },{
                path: '/main/cart',
                component: Cart
            },{
                path: '/main/my',
                component: My
            },{
                from:'/main',
                to:'/main/home'
            }]
    },{
        path: '/BrandDetail',
        component: BrandDetail
    },{
        path: '/goodsDetail',
        component: GoodsDetail
    },{
        from: '*',
        to:'/login'
    }]
}