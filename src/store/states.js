import { observable, action } from 'mobx';
// import history from '../history';

class States {
    @observable
    obj = {
      routerStore: [], // navLine 数据来源，已打开的页面
      selectedKeys: [], // siderBar 当前所选值
      currentRouteName: '',// 当前路由
      collapsed: false // 是否收起菜单
    }
    @action 
    add = (item) => {
      let index = this.obj.routerStore.findIndex(v => v.id === item.id)
      if (index > -1) {
        this.replace(index)
      } else {
        this.obj.routerStore.push(item)
        this.replace(this.obj.routerStore.length - 1)
      }
    }
    deleted = (i) => {
      if (this.obj.routerStore.length <= 1) {
        this.obj.selectedKeys = []
        this.obj.currentRouteName = ''
      } else {
        if (i === this.obj.routerStore.length - 1) {
          this.replace(i - 1)
        } else if (i < this.obj.routerStore.length) {
          this.replace(i + 1)
        }
      }
      this.obj.routerStore.splice(i, 1)
    }
    replace = (i) => {
      if (!this.obj.routerStore.length) {
        return
      }
      for(let [index, item] of this.obj.routerStore.entries()) {
        if (index !== i) {
          item.current = false
        } else {
          item.current = true
          this.obj.selectedKeys = [item.id]
          this.obj.currentRouteName = item.routeName
        }
      }
    }
}
const menusState= new States()

export { menusState }