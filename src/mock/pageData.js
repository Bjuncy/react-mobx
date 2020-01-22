import Mock from 'mockjs'
// mock 示例
const Random = Mock.Random
function getPostData () {
  let articles = []
  for (let i = 0; i < 12; i++) {
    let newObj = {
      id: i,
      name: Random.cname(),
      times: Random.natural(1, 2),
      post: `岗位${i}`,
      property: i/2 === 0 ? '全职' : '兼职'
    }
    articles.push(newObj)
  }
  return {
    errorCode: 0,
    result: articles,
    message: 'ok'
  }
}

function getStaffs () {
  let articles = []
  for (let i = 0; i < 12; i++) {
    let newObj = {
      id: i,
      name: Random.cname(),
      phone: Random.natural(11),
      age: Random.natural(20, 60),
      address: Random.city(true)
    }
    articles.push(newObj)
  }
  return {
    errorCode: 0,
    result: articles,
    message: 'ok'
  }
}

function getUsers () {
  let arr = []
  for (let i = 0; i < 12; i++) {
    let newObj = {
      id: i,
      name: Random.cname(),
      phone: Random.natural(20, 60),
      address: Random.county(true),
      age: Random.natural(20, 60)
    }
    arr.push(newObj)
  }
  return {
    errorCode: 0,
    result: arr,
    message: 'ok'
  }
}
let postData = getPostData()
let users = getUsers()
let staffs = getStaffs()
export { postData, users, staffs } 