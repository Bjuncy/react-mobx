import { observable } from 'mobx';
import { getUsers } from '../api/system';

const usersStore = observable({
  // 获取数据
  async getUsers () {
    let res = await getUsers();
    return res.result
  }
})
export { usersStore };