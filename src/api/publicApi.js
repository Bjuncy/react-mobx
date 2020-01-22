import service from '../axios/index';
import { menus, projects } from '../mock/home';

export function getMenus () {
  if (process.env.NODE_ENV === 'development') {
    return menus
  }
  return service({
    url: 'api/-',
    method: 'get'
  })
};
export function getProjects () {
  if (process.env.NODE_ENV === 'development') {
    return projects
  }
  return service({
    url: 'api/-',
    method: 'get'
  })
};
