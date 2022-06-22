/**
 * 此文件主要创建 axios 实例，然后添加请求拦截器和响应拦截器
 */
import axios from 'axios'
import {
  Message
} from 'element-ui';
import store from '../store/store'
//请求的服务器的地址
const basePath = 'http://221.226.67.42:10809';

//创建 axios 实例
const axiosInstance = axios.create({
  baseURL: basePath,
  withCredentials: true, //是否允许跨域
  timeout: 9000
});
//添加请求拦截器
axiosInstance.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么（可以在这里给头部添加token）
    // console.log("axios请求拦截器的config：",config);
    // if(sessionStorage.getItem("token")){
    config.headers.token = store.state.token
    // }
    return config;
  },
  error => {
    // 对请求错误做些什么
    console.log(error)
    return Promise.reject(error);
  }
);

//添加响应拦截器
axiosInstance.interceptors.response.use(
  response => {
    console.log(store)
    console.log("axios响应拦截器的数据：", response);
    /**
     * 对响应数据判断:
     *  如果成功返回数据，就通过return把数据返出去
     *  如果请求不成功，就在拦截器这里统一处理（组件的代码就不用关注错误的情况了）
     */
    if (response.status == 200) {
      return response.data;
      // return response;
      // return 123;
    } else {
      handleErrorData(response.data);
    }
    return response;
  },
  error => {
    console.log(error)
    // 对响应错误做点什么
    // console.log("axios响应拦截器的错误数据：",error);
    // Message.error(error.message);
    return Promise.reject(error);
  }
);
//对错误信息的处理函数
function handleErrorData(errMes) {
  console.log(errMes)
  if (errMes.message) {
    Message.error(errMes.message);
  } else {
    switch (errMes.code) {
      case 401:
        Message.error("未授权，请重新登录!");
        break;
      case 403:
        Message.error("拒绝访问");
        break;
      case 404:
        Message.error("很抱歉，资源未找到!");
        break;
      case 500:
        Message.error("服务器错误!");
        break;
      case 504:
        Message.error("网络超时!");
        break;
      default:
        Message.error("服务正在联调中，请稍后!");
        break;
    }
  }
}

export {
  axiosInstance
}
