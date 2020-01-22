import axios from 'axios';

/* 创建实例 */
const service = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 0 // 请求超时设置， 0 不设置超时
});

/* request 拦截器 ==> 处理请求参数 */
service.interceptors.request.use(config => {
  config.data = config.dataArr || {...config.data}; // post
  config.params = {...config.params}; // get
  config.headers['Content-Type'] = config.contentType || 'application/json;charset=utf-8';
  return config;
}, error => {
  Promise.reject(error)
});

/* response拦截 ==> 处理响应数据 */
service.interceptors.response.use(
  response => {
    if (response.data.errorCode === 0) { // 根据接口返回成功值，特殊处理
      return response.data;
    } else {
      console.log(response.data.message);
    }
  }, error => {
    return Promise.reject(error);
  }
)
export default service;
