import request from '@/utils/request'

export function getAuth(params) {
  return request({
    url: '/admin/auth',
    method: 'get',
    params: params
  })
}





