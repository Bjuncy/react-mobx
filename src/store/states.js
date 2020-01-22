import { observable, action } from 'mobx';
import history from '../history'

class States {
    @observable routerStore = []

    @action 
    add = (item) => {
      let index = this.routerStore.findIndex(v => v.id === item.id)
      if (index > -1) {
        this.replace(index)
      } else {
        this.routerStore.push(item)
        this.replace(this.routerStore.length - 1)
      }
    }
    deleted = (i) => {
      console.log(i, this.routerStore.length)
      if (this.routerStore.length <= 1) {
        console.log('首页')
      } else {
        if (i === this.routerStore.length - 1) {
          console.log(`/${this.routerStore[i - 1].routeName}`)
          history.replace(`/${this.routerStore[i - 1].routeName}`)
          this.replace(i - 1)
        } else if (i < this.routerStore.length) {
          history.replace(`/${this.routerStore[i + 1].routeName}`)
          this.replace(i + 1)
        }
      }
      this.routerStore.splice(i, 1)
    }
    replace = (i) => {
      if (!this.routerStore.length) {
        return
      }
      for(let [index, item] of this.routerStore.entries()) {
        if (index !== i) {
          item.current = false
        } else {
          item.current = true
        }
      }
    }
}
const menusState= new States()

export { menusState }