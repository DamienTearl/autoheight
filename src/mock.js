const Mock = require('mockjs')
const Random = Mock.Random
// const dataArr = function () {
//   let arr1 = []
//   let obj1 = {
//     title: Random.csentence(4, 5)
//   }
//   arr1.push(obj1)
//   return {
//     arr1
//   }
// }
// Mock.mock('/news/index', 'get', dataArr)

// 客户托管资产数据
const glKhtgzcData = function () {
  let dataObj = {
    title: '客户托管资产',
    number: Random.float(100, 1000000000000, 2, 2),
    title_sup: '普通客户资产',
    title_sub: '两融净资产',
    num_sup: Random.float(100, 1000000000000, 2, 2),
    num_sub: Random.float(100, 1000000000000, 2, 2),
    params: 'third',
    tb_num: Random.float(-30, 30, 2, 2),
    hb_num: Random.float(-30, 30, 2, 2),
    unit: '元'
  }
  return dataObj
}
Mock.mock('/glKhtgzcData/index', 'get', glKhtgzcData)
// 客户规模数据
const khgmData = function () {
  let dataObj = {
    title: '客户规模',
    number: Random.integer(100, 100000000),
    title_sup: '机构客户',
    title_sub: '个人客户',
    num_sup: Random.integer(100, 100000000),
    num_sub: Random.integer(100, 10000),
    params: 'third',
    tb_num: Random.float(-30, 30, 2, 2),
    hb_num: Random.float(-30, 30, 2, 2),
    unit: '户'
  }
  return dataObj
}
Mock.mock('/khgmData/index', 'get', khgmData)
// 金融产品销售数据
const jrcpData = function () {
  let dataObj = {
    title: '金融产品销售',
    number: Random.float(100, 1000000000000, 2, 2),
    title_sup: '现金宝保有量',
    title_sub: 'PB业务规模',
    num_sup: Random.float(100, 10000000000, 2, 2),
    num_sub: Random.float(100, 10000000000, 2, 2),
    params: 'third',
    navParams: '1-3',
    describe: '本月',
    currentMonth: Random.float(100, 10000000000, 2, 2),
    unit: '元'
  }
  return dataObj
}
Mock.mock('/jrcpData/index', 'get', jrcpData)
// 股基市场份额数据
const gjscfeData = function () {
  let dataObj = {
    title: '股基市场份额',
    number: Random.float(2, 0.01, 2, 2),
    title_sup: '公司',
    title_sub: '市场',
    num_sup: Random.float(100, 10000000000, 2, 2),
    num_sub: Random.float(100, 10000000000, 2, 2),
    params: 'third',
    navParams: '1-3',
    describe: '同比',
    currentMonth: Random.float(100, 10000000000, 2, 2),
    unit: '‰',
    unit1: '%'
  }
  return dataObj
}
Mock.mock('/gjscfeData/index', 'get', gjscfeData)
// 两融余额echarts图数据
const glLryeData = function () {
  let arr = []
  for (var i = 0; i < 20; i++) {
    let arrObj = {
      date: new Date(new Date().getTime() - 24 * 60 * 60 * 1000 * i),
      data: Random.float(100, 10000000000, 2, 2)
    }
    arr.push(arrObj)
  }
  return arr
}
Mock.mock('/glLryeData/index', 'get', glLryeData)
