import request from '../utils/request'; //axios 的二次封装

//添加试题
export function login(data:any) {
    return request({
        url: '/auth/loginByMobile',
        method: 'post',
        data
    })
}