import axios from 'axios';

// 创建axios实例
const instance = axios.create({
    baseURL: '//169.254.44.58:8888',
    timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
});

// 请求拦截器
instance.interceptors.request.use(function(config) {
    // Do something before request is sent
    return config;
}, function(error) {
    // Do something with request error
    return Promise.reject(error);
});

// 响应拦截器
instance.interceptors.response.use(function(response) {
    // Do something with response data
    // return response;
    if (response.status === 200) {
        return response.data;
    } else {
      
    }
}, function(error) {
    // Do something with response error
  
    // return Promise.reject(error);
});

export default instance;