import request from '../util/request'; //axios 的二次封装

export function getDetailInfo(id: string) {
    return request({
        url: '/api/goods/category',
        method: 'get',
        params: { id }
    })
}

export function getGoodList(id: string) {
    return request({
        url: '/api/goods/list',
        method: 'get',
        params: { page:1,size:1000,categoryId:id }
    })
}


