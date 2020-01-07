import request from '../util/request'; //axios 的二次封装

//用户登陆
export function login(data:any) {
    return request({
        url: '/auth/loginByMobile',
        method: 'post',
        data
    })
}
