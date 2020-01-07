import request from '../util/request'; //axios 的二次封装

//首页
export function home() {
    return request({
        url: '/',
        method: 'get'
    })
}
