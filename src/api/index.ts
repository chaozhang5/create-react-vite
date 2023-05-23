import service, { AxiosRequestConfig } from './axios'

const env = import.meta.env

export const request = <T = any>(config: AxiosRequestConfig): Promise<T> => {
  return new Promise((resolve, reject) => {
    service
      .request(config)
      .then((res: any) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export const http = {
  baseUrl: '',
  get<T = any>(url: string, params = {}, config?: AxiosRequestConfig): Promise<T> {
    return request({ url: `${this.baseUrl}${url}`, params, ...config, method: 'GET' })
  },
  post<T = any>(url: string, data = {}, config?: AxiosRequestConfig): Promise<T> {
    return request({ url: `${this.baseUrl}${url}`, data, ...config, method: 'POST' })
  },
  put<T = any>(url: string, data = {}, config?: AxiosRequestConfig): Promise<T> {
    return request({ url: `${this.baseUrl}${url}`, data, ...config, method: 'PUT' })
  },
  delete<T = any>(url: string, data = {}, config?: AxiosRequestConfig): Promise<T> {
    return request({ url: `${this.baseUrl}${url}`, data, ...config, method: 'DELETE' })
  },
  patch<T = any>(url: string, data = {}, config?: AxiosRequestConfig): Promise<T> {
    return request({ url: `${this.baseUrl}${url}`, data, ...config, method: 'PATCH' })
  },
  // 上传文件，指定 'Content-Type': 'multipart/form-data'
  upload<T = any>(url: string, data = {}, config?: AxiosRequestConfig): Promise<T> {
    return request({
      url,
      data,
      ...config,
      method: 'PUT',
      headers: {
        ...config?.headers,
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}

export const baseApi = {
  ...http,
  baseUrl: env.VITE_API_BASE_URL
}
