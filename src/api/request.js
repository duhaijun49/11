/**
 * 此文件主要封装 axios 的get、post、delete等方法
 * （后续还可以添加文件的上传、下载、文件的导出等等）
 */

import {
  axiosInstance as axios
}
from "./Service.js"

//get
export function axiosGet(parameter = {}) {
  return axios({ //这里的 axios 就是从 axios.js 中引入的 axiosInstance
    url: '/home/getTodayTask',
    method: 'get',
    params: parameter
  })
}
//post
export function axiosPost(parameter = {}) {
  return axios({
    url: '/system/userManagement/findAllByPage',
    method: 'post',
    data: parameter
  })
}
//delete
export function axiosDelete(url, parameter = {}) {
  return axios({
    url: url,
    method: 'delete',
    params: parameter
  })
}
