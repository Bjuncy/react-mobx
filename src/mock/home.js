import Mock from 'mockjs'
// mock 示例
const Random = Mock.Random
function getMenus () {
  let parents = ['基础信息', '结算管理', '报表管理', '系统管理']
  let children = [
    {
      name: '岗位管理',
      routerName: 'posts'
    },
    {
      name: '员工信息',
      routerName: 'staffs'
    },
    {
      name: '结算报表',
      routerName: 'reports'
    },
    {
      name: '用户管理',
      routerName: 'users'
    },
  ]
  let articles = []
  for (let i = 0; i < parents.length; i++) {
    let newObj = {
      id: `e${i}`,
      name: parents[i],
      sort: i,
      routeName: '',
      parentId: ''
    }
    articles.push(newObj)
  }
  for (let i = 0; i < 4; i++) {
    let newObj = {
      id: `f${i}`,
      name: children[i].name,
      parentId: `e${i}`,
      routeName: children[i].routerName,
      sort: i
    }
    articles.push(newObj)
  }
  return {
    errorCode: 0,
    result: articles,
    message: 'ok'
  }
}
function getProjects () {
  let articles = []
  let child = []
  for (let i = 0; i < 18; i++) {
    let newObj = {
      id: i,
      value: `a${i}`,
      label: Random.city(),
      parentId:  Random.natural(0, 6),
    }
    child.push(newObj)
  }
  for (let i = 0; i < 6; i++) {
    let newObj = {
      id: i,
      value: `b${i}`,
      label: Random.region(),
      children: child.filter(v => v.parentId === i)
    }
    articles.push(newObj)
  }
  return {
    errorCode: 0,
    result: articles,
    message: 'ok'
  }
}
let menus = getMenus()
let projects = getProjects()

export { menus, projects }