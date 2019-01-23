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
    params: 'second',
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
// 两融余额数据
const lryeData = function () {
  let dataObj = {
    title: '两融余额',
    number: Random.float(100, 1000000000000, 2, 2),
    // title_sup: '公司',
    // title_sub: '市场',
    // num_sup: Random.float(100, 10000000000, 2, 2),
    // num_sub: Random.float(100, 10000000000, 2, 2),
    // params: 'third',
    // navParams: '1-3',
    // describe: '同比',
    // currentMonth: Random.float(100, 10000000000, 2, 2),
    unit: '元'
    // unit1: '%'
  }
  return dataObj
}
Mock.mock('/lryeData/index', 'get', lryeData)
// 两融余额echarts图数据
const glLryeData = function () {
  let arr = []
  for (var i = 0; i < 20; i++) {
    let arrObj = {
      date: new Date(new Date().getTime() - 24 * 60 * 60 * 1000 * (i + 1)),
      data: Random.float(100, 10000000000, 2, 2)
    }
    arr.push(arrObj)
  }
  return arr
}
Mock.mock('/glLryeData/index', 'get', glLryeData)
// 机构数据
const agencyData = function () {
  let arr = [
    { prov_name: '北京', brn_org_no: '5003', prov_no: '110000', brn_org_name: '北京分公司' },
    { prov_name: '北京', brn_org_no: '104', prov_no: '110000', brn_org_name: '北京望京阜安西路证券营业部' },
    { prov_name: '天津', brn_org_no: '101', prov_no: '120000', brn_org_name: '天津解放北路津湾广场证券营业部' },
    { prov_name: '河北', brn_org_no: '105', prov_no: '130000', brn_org_name: '石家庄槐安东路证券营业部' },
    { prov_name: '山西', brn_org_no: '5004', prov_no: '140000', brn_org_name: '山西分公司' },
    { prov_name: '内蒙古', brn_org_no: '5005', prov_no: '150000', brn_org_name: '内蒙古分公司' },
    { prov_name: '辽宁', brn_org_no: '5006', prov_no: '210000', brn_org_name: '大连分公司' },
    { prov_name: '辽宁', brn_org_no: '95', prov_no: '210000', brn_org_name: '沈阳万柳塘路证券营业部' },
    { prov_name: '辽宁', brn_org_no: '187', prov_no: '210000', brn_org_name: '锦州科技路证券营业部' },
    { prov_name: '吉林', brn_org_no: '5007', prov_no: '220000', brn_org_name: '吉林分公司' },
    { prov_name: '黑龙江', brn_org_no: '5008', prov_no: '230000', brn_org_name: '黑龙江分公司' },
    { prov_name: '上海', brn_org_no: '97', prov_no: '310000', brn_org_name: '上海中山西路证券营业部' },
    { prov_name: '上海', brn_org_no: '106', prov_no: '310000', brn_org_name: '上海川沙路证券营业部' },
    { prov_name: '江苏', brn_org_no: '1220', prov_no: '320000', brn_org_name: '南京江东北路证券营业部' },
    { prov_name: '江苏', brn_org_no: '1370', prov_no: '320000', brn_org_name: '南通崇文路证券营业部' },
    { prov_name: '江苏', brn_org_no: '1280', prov_no: '320000', brn_org_name: '常州竹山路证券营业部' },
    { prov_name: '江苏', brn_org_no: '1350', prov_no: '320000', brn_org_name: '扬州文昌西路证券营业部' },
    { prov_name: '江苏', brn_org_no: '1300', prov_no: '320000', brn_org_name: '无锡金融三街证券营业部' },
    { prov_name: '江苏', brn_org_no: '5009', prov_no: '320000', brn_org_name: '江苏分公司（本部）' },
    { prov_name: '江苏', brn_org_no: '1360', prov_no: '320000', brn_org_name: '泰州济川东路证券营业部' },
    { prov_name: '江苏', brn_org_no: '107', prov_no: '320000', brn_org_name: '苏州华池街时代广场证券营业部' },
    { prov_name: '浙江', brn_org_no: '1310', prov_no: '330000', brn_org_name: '义乌四季路证券营业部' },
    { prov_name: '浙江', brn_org_no: '5018', prov_no: '330000', brn_org_name: '宁波分公司' },
    { prov_name: '浙江', brn_org_no: '1320', prov_no: '330000', brn_org_name: '杭州富春路证券营业部' },
    { prov_name: '浙江', brn_org_no: '1380', prov_no: '330000', brn_org_name: '温州大南路证券营业部' },
    { prov_name: '浙江', brn_org_no: '1230', prov_no: '330000', brn_org_name: '湖州凤凰路证券营业部' },
    { prov_name: '安徽', brn_org_no: '1180', prov_no: '340000', brn_org_name: '合肥南一环路证券营业部' },
    { prov_name: '福建', brn_org_no: '1150', prov_no: '350000', brn_org_name: '厦门东港北路证券营业部' },
    { prov_name: '福建', brn_org_no: '1390', prov_no: '350000', brn_org_name: '泉州宝洲路证券营业部' },
    { prov_name: '福建', brn_org_no: '1290', prov_no: '350000', brn_org_name: '福州营迹路证券营业部' },
    { prov_name: '福建', brn_org_no: '1130', prov_no: '350000', brn_org_name: '莆田延寿中街证券营业部' },
    { prov_name: '江西', brn_org_no: '1270', prov_no: '360000', brn_org_name: '抚州玉茗大道证券营业部' },
    { prov_name: '江西', brn_org_no: '5010', prov_no: '360000', brn_org_name: '江西分公司' },
    { prov_name: '山东', brn_org_no: '5002', prov_no: '370000', brn_org_name: '山东分公司（本部）' },
    { prov_name: '山东', brn_org_no: '91', prov_no: '370000', brn_org_name: '济南经七路证券营业部' },
    { prov_name: '山东', brn_org_no: '185', prov_no: '370000', brn_org_name: '济宁吴泰闸路证券营业部' },
    { prov_name: '山东', brn_org_no: '102', prov_no: '370000', brn_org_name: '淄博共青团西路证券营业部' },
    { prov_name: '山东', brn_org_no: '1140', prov_no: '370000', brn_org_name: '烟台科技大道证券营业部' },
    { prov_name: '山东', brn_org_no: '5019', prov_no: '370000', brn_org_name: '青岛分公司' },
    { prov_name: '河南', brn_org_no: '98', prov_no: '410000', brn_org_name: '平顶山中兴路证券营业部' },
    { prov_name: '河南', brn_org_no: '99', prov_no: '410000', brn_org_name: '平顶山建设中路证券营业部' },
    { prov_name: '河南', brn_org_no: '5011', prov_no: '410000', brn_org_name: '河南分公司（本部）' },
    { prov_name: '河南', brn_org_no: '1500', prov_no: '410000', brn_org_name: '洛阳学府街证券营业部' },
    { prov_name: '河南', brn_org_no: '182', prov_no: '410000', brn_org_name: '舞钢市舞钢路证券营业部' },
    { prov_name: '河南', brn_org_no: '6666', prov_no: '410000', brn_org_name: '郑州丰产路证券营业部' },
    { prov_name: '河南', brn_org_no: '8888', prov_no: '410000', brn_org_name: '郑州鑫苑路证券营业部' },
    { prov_name: '河南', brn_org_no: '181', prov_no: '410000', brn_org_name: '鲁山鲁平大道证券营业部' },
    { prov_name: '湖北', brn_org_no: '109', prov_no: '420000', brn_org_name: '武汉新华路证券营业部' },
    { prov_name: '湖北', brn_org_no: '1120', prov_no: '420000', brn_org_name: '武汉雄楚大道证券营业部' },
    { prov_name: '湖南', brn_org_no: '1240', prov_no: '430000', brn_org_name: '株洲沿江路证券营业部' },
    { prov_name: '湖南', brn_org_no: '93', prov_no: '430000', brn_org_name: '长沙芙蓉中路证券营业部' },
    { prov_name: '广东', brn_org_no: '1170', prov_no: '440000', brn_org_name: '东莞虎门证券营业部' },
    { prov_name: '广东', brn_org_no: '1160', prov_no: '440000', brn_org_name: '中山兴中道证券营业部' },
    { prov_name: '广东', brn_org_no: '5012', prov_no: '440000', brn_org_name: '广东分公司（本部）' },
    { prov_name: '广东', brn_org_no: '103', prov_no: '440000', brn_org_name: '广州赤岗北路证券营业部' },
    { prov_name: '广东', brn_org_no: '1510', prov_no: '440000', brn_org_name: '广州黄埔大道西证券营业部' },
    { prov_name: '广东', brn_org_no: '1260', prov_no: '440000', brn_org_name: '江门迎宾大道中证券营业部' },
    { prov_name: '广东', brn_org_no: '5017', prov_no: '440000', brn_org_name: '深圳分公司' },
    { prov_name: '广东', brn_org_no: '180', prov_no: '440000', brn_org_name: '深圳滨海大道易思博证券营业部' },
    { prov_name: '广东', brn_org_no: '1560', prov_no: '440000', brn_org_name: '清远英德证券营业部' },
    { prov_name: '广东', brn_org_no: '1550', prov_no: '440000', brn_org_name: '清远静福路证券营业部' },
    { prov_name: '广东', brn_org_no: '1530', prov_no: '440000', brn_org_name: '潮州证券营业部' },
    { prov_name: '广东', brn_org_no: '1520', prov_no: '440000', brn_org_name: '珠海南湾证券营业部' },
    { prov_name: '广东', brn_org_no: '1570', prov_no: '440000', brn_org_name: '韶关碧桂园凤凰城证券营业部' },
    { prov_name: '广西', brn_org_no: '1330', prov_no: '450000', brn_org_name: '南宁东葛路证券营业部' },
    { prov_name: '海南', brn_org_no: '5013', prov_no: '460000', brn_org_name: '海南分公司' },
    { prov_name: '重庆', brn_org_no: '110', prov_no: '500000', brn_org_name: '重庆小新街证券营业部' },
    { prov_name: '四川', brn_org_no: '1250', prov_no: '510000', brn_org_name: '成都双成三路证券营业部' },
    { prov_name: '贵州', brn_org_no: '5015', prov_no: '520000', brn_org_name: '贵州分公司' },
    { prov_name: '云南', brn_org_no: '1210', prov_no: '530000', brn_org_name: '昆明青云街证券营业部' },
    { prov_name: '陕西', brn_org_no: '186', prov_no: '610000', brn_org_name: '咸阳秦皇路证券营业部' },
    { prov_name: '陕西', brn_org_no: '108', prov_no: '610000', brn_org_name: '渭南仓程路证券营业部' },
    { prov_name: '陕西', brn_org_no: '96', prov_no: '610000', brn_org_name: '西安兴庆南路证券营业部' },
    { prov_name: '甘肃', brn_org_no: '5016', prov_no: '620000', brn_org_name: '甘肃分公司' }
  ]
  return arr
}
Mock.mock('/agencyData/index', 'get', agencyData)
