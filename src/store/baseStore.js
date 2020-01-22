import { observable } from 'mobx';
import { getPostManager} from '../api/baseApi';

const postManagerStore = observable({
  // 获取数据
  async getPostManager () {
    let res = await getPostManager({page: 1, size: 10});
    return res.result
  }
})
export { postManagerStore };