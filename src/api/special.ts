import request from '../util/request'

export function special() {
    return request({
        url: '/topic/list',
        method: 'get',
        params:{page:1,size:20}
    })
}