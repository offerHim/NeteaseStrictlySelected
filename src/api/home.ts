import request from '../util/request'; //axios 的二次封装

//首页
export function home() {
    return request({
        url: '/',
        method: 'get'
    })
}

//制造商详情
export function BrandDetail(id:string){
    return request({
        url: '/brand/detail',
        method: 'get',
        params:{id}
    })
}

//商品详情
export function GoodsDetail(id:string){
    return request({
        url: '/goods/detail',
        method: 'get',
        params:{id}
    })
}

//制造商详情界面商品
// export function goodsRelated(id:string){
//     return request({
//         url: '/goods/related',
//         method: 'get',
//         params:{id}
//     })
// }
