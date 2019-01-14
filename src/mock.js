const Mock = require('mockjs')
const Random = Mock.Random
const dataArr = function () {
  let arr1 = []
  for (var i = 0; i < 100; i++) {
    let obj1 = {
      title: Random.csentence(5, 30)
    }
    arr1.push(obj1)
  }
  return {
    arr1
  }
}
Mock.mock('/news/index', 'get', dataArr)
