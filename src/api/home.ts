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
        params:{id,page:"1",size:"10"}
    })
}

// 制造商详情界面商品
export function goodsRelated(brandId:string){
    console.log("16666",brandId)
    return request({
        url: '/goods/list',
        method: 'get',
        params:{brandId}
    })
}
