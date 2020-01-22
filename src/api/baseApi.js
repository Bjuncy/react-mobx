import service from '../axios/index';
import { postData, staffs } from '../mock/pageData'

export function getPostManager (params) {
  if (process.env.NODE_ENV === 'development') {
    return postData
  }
  return service({
    url: 'api/projects/01/moved-devices',
    method: 'get',
    params: params
  })
};
export function getStaffs (params) {
  if (process.env.NODE_ENV === 'development') {
    return staffs
  }
  return service({
    url: 'api/projects/01/moved-devices',
    method: 'get',
    params: params
  })
};
