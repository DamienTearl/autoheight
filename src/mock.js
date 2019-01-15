const Mock = require('mockjs')
const Random = Mock.Random
const dataArr = function () {
  let arr1 = []
  let obj1 = {
    title: Random.csentence(4, 5)
  }
  arr1.push(obj1)
  return {
    arr1
  }
}
Mock.mock('/news/index', 'get', dataArr)
