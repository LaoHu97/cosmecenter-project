import axios from 'axios'
import Bus from './bus.js'

// 超时时间
axios.defaults.timeout = 5000
// http请求拦截器
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 显示
  Bus.$emit('loadingState', true)
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  // 隐藏
  let alertStateMap = {
    boolean: true,
    message: response.data.message
  }
  setTimeout(function () {
    Bus.$emit('loadingState', false)
  }, 200)
  if (response.data.status !== 200) {
    Bus.$emit('alertState', alertStateMap)
  }
  return response
}, function (error) {
  let alertStateMap = {
    boolean: true,
    message: '网络错误，请稍后再试'
  }
  Bus.$emit('loadingState', false)
  Bus.$emit('alertState', alertStateMap)
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default axios

let base = process.env.API_ROOT

export const queryShopMem = params => { return axios.post(`${base}/pay/cashier/queryShopMem`, params).then(res => res.data) }

export const queryOnePkgInviterByCondition = params => { return axios.post(`${base}/pay/weixin/activity/queryOnePkgInviterByCondition`, params).then(res => res.data) }

export const queryBounsToPhone = params => { return axios.post(`${base}/pay/person/queryBounsToPhone`, params).then(res => res.data) }

export const queryPkgPurchaseByCondition = params => { return axios.post(`${base}/pay/weixin/activity/queryPkgPurchaseByCondition`, params).then(res => res.data) }

export const selectStoreListByPhone = params => { return axios.post(`${base}/pay/comm/selectStoreListByPhone`, params).then(res => res.data) }

export const activeRelTime = params => { return axios.post(`${base}/pay/activity/activeRelTime`, params).then(res => res.data) }
