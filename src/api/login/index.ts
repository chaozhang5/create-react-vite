import { baseApi } from '@/api'

export const login = (params: any) => {
  return baseApi.post('api/v1/meta/login', params)
}

export const sendSms = (params: any) => {
  return baseApi.post('api/v1/meta/send_sms', params)
}
