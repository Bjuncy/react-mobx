import service from '../axios/index';
import { users } from '../mock/pageData'

export function getUsers (params) {
  if (process.env.NODE_ENV === 'development') {
    return users
  }
  return service({
    url: '',
    method: 'get',
    params: params
  })
};