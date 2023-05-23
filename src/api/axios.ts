import { message as Message } from 'antd'
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { UserStore } from '@/global-states'

axios.defaults.timeout = 1000 * 60
axios.defaults.headers.post['Content-Type'] = 'application/json'

// 创建axios实例
const service = axios.create()

// axios实例拦截请求
service.interceptors.request.use(
  (config: any) => {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${UserStore.getToken()}`
    }
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

// axios实例拦截响应
service.interceptors.response.use(
  // 2xx时触发
  (response: AxiosResponse) => {
    // response.data就是后端返回的数据，结构根据约定来定义
    const { code, data, message } = response.data || {}
    if (code === 0 || code === 200) {
      return data || response.data
    } else {
      Message.error(message)
      return Promise.reject()
    }
  },
  // 非2xx时触发
  (error: any) => {
    Message.destroy()
    Message.error(error?.response?.data?.message || error?.message)
    return Promise.reject(error)
  }
)

export type { AxiosResponse, AxiosRequestConfig }

export default service
