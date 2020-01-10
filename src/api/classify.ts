import request from '../util/request'; //axios 的二次封装

//分类页初始化信息获取
export function getCategoryList() {
    return request({
        url: '/catalog/index',
        method: 'get'
    })
}

//根据分类ID获取当前分类信息和子分类
export function getCatalog(id: string) {
    return request({
        url: '/catalog/current',
        method: 'get',
        params: { id }
    })
}


