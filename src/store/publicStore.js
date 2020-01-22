import { observable } from 'mobx';
import { getMenus, getProjects } from '../api/publicApi';

const MenusStore = observable({
  menus: [],

  // 获取数据
  async getMenus () {
    let res = await getMenus();
    this.menus = this.handleMenus(res.result)
  },
  handleMenus (data) {
    let parent = [];
    let child = [];
    for (let item of data) {
      if (!item.parentId) {
        item.sub = []
        parent.push(item)
      } else {
        child.push(item)
      }
    };
    for (let item of parent) {
      for (let childItem of child) {
        if (childItem.parentId === item.id) {
          item.sub.push(childItem)
        }
      }
    }
    parent = parent.sort((a, b) => {
      return a.sort - b.sort > 0
    })
    return parent
  }
});
const ProjectsStore = observable({
  projects: [],
  
  async getProjects () {
    let res = await getProjects();
    this.projects = res.result
  }
})
export { MenusStore, ProjectsStore };