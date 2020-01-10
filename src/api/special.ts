import request from '../util/request'

export function special() {
    return request({
        url: '/topic/list',
        method: 'get'
    })
}