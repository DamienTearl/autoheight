import 'babel-polyfill'
import $echarts from 'echarts'
import 'echarts/lib/chart/map'
import 'echarts/map/js/china.js'
export default {
  /* js代码部分 */
  // 根据数据大小  给相对应的单位（数据格式化）
  handlerData1: function (num, unit) {
    // console.log(Object.prototype.toString.call(num))
    unit = unit || '元'
    if (Object.prototype.toString.call(num) === '[object Number]') {
      if (parseInt(num) === parseFloat(num)) {
        // 整数部分代码
        if (num >= 0) {
          if (num.toString().length > 8) {
            let res = parseFloat((num / 100000000).toFixed(2)).toLocaleString()
            let arr = res.split('.')
            if (arr[1]) {
              if (arr[1].toString().length === 1) {
                res = res + '0'
              }
            } else {
              res = res + '.00'
            }
            return [res, '亿' + unit]
          } else if (num.toString().length > 4) {
            let res = parseFloat((num / 10000).toFixed(2)).toLocaleString()
            let arr = res.split('.')
            if (arr[1]) {
              if (arr[1].toString().length === 1) {
                res = res + '0'
              }
            } else {
              res = res + '.00'
            }
            return [res, '万' + unit]
          } else {
            return [(num).toLocaleString(), unit]
          }
        } else {
          if (num.toString().length > 9) {
            let res = parseFloat((num / 100000000).toFixed(2)).toLocaleString()
            let arr = res.split('.')
            if (arr[1]) {
              if (arr[1].toString().length === 1) {
                res = res + '0'
              }
            } else {
              res = res + '.00'
            }
            return [res, '亿' + unit]
          } else if (num.toString().length > 5) {
            let res = parseFloat((num / 10000).toFixed(2)).toLocaleString()
            let arr = res.split('.')
            if (arr[1]) {
              if (arr[1].toString().length === 1) {
                res = res + '0'
              }
            } else {
              res = res + '.00'
            }
            return [res, '万' + unit]
          } else {
            return [(num).toLocaleString(), unit]
          }
        }
      } else { // 非整数部分代码
        if (num >= 0) {
          if (parseInt(num).toString().length > 8) {
            let res = parseFloat((num / 100000000).toFixed(2)).toLocaleString()
            let arr = res.split('.')
            if (arr[1]) {
              if (arr[1].toString().length === 1) {
                res = res + '0'
              }
            } else {
              res = res + '.00'
            }
            return [res, '亿' + unit]
          } else if (parseInt(num).toString().length > 4) {
            let res = parseFloat((num / 10000).toFixed(2)).toLocaleString()
            let arr = res.split('.')
            if (arr[1]) {
              if (arr[1].toString().length === 1) {
                res = res + '0'
              }
            } else {
              res = res + '.00'
            }
            return [res, '万' + unit]
          } else {
            let res = parseFloat((num).toFixed(2)).toLocaleString()
            let arr = res.split('.')
            if (arr[1]) {
              if (arr[1].toString().length === 1) {
                res = res + '0'
              }
            } else {
              res = res + '.00'
            }
            return [res, unit]
          }
        } else {
          if (parseInt(num).toString().length > 9) {
            let res = parseFloat((num / 100000000).toFixed(2)).toLocaleString()
            let arr = res.split('.')
            if (arr[1]) {
              if (arr[1].toString().length === 1) {
                res = res + '0'
              }
            } else {
              res = res + '.00'
            }
            return [res, '亿' + unit]
          } else if (parseInt(num).toString().length > 5) {
            let res = parseFloat((num / 10000).toFixed(2)).toLocaleString()
            let arr = res.split('.')
            if (arr[1]) {
              if (arr[1].toString().length === 1) {
                res = res + '0'
              }
            } else {
              res = res + '.00'
            }
            return [res, '万' + unit]
          } else {
            let res = parseFloat((num).toFixed(2)).toLocaleString()
            let arr = res.split('.')
            if (arr[1]) {
              if (arr[1].toString().length === 1) {
                res = res + '0'
              }
            } else {
              res = res + '.00'
            }
            return [res, unit]
          }
        }
      }
    }
  },
  // 根据参数，展示相应的数据  参数包括数据、单位、类型、最大长度
  handlerData: function(num, unit, type, maxLength) {
    unit = unit || '元'
    type = type || 'float'
    maxLength = maxLength || 10
    // 数据添加千位符（转化成字符串类型）
    function addDot(data) {
      return data.toLocaleString()
    }
    // 判断数据整数部分的长度
    function numOfLength(data) {
      let num = data
      // console.log(num)
      // let num1 = num.toString()
      if (parseFloat(num) !== parseInt(num)) {
        let arr = num.toFixed(2).split('.')
        return arr[0].toString().length
      } else {
        return num.toString().length
      }
    }
    // 根据数据大小和要求类型给数据添加单位返回需要的数据类型
    function addUnitAndTypeAndTall(num, unit, type, tall) {
      if (type === 'int') {
        return [parseFloat((num).toFixed(0)).toLocaleString(), tall + unit]
      } else {
        let res = parseFloat((num).toFixed(2)).toLocaleString()
        if (res.toString().split('.')[1]) {
          if (res.split('.')[1].length === 2) {
            return [res, tall + unit]
          } else if (res.split('.')[1].length === 1) {
            return [res + '0', tall + unit]
          }
        } else {
          return [res + '.00', tall + unit]
        }
      }
    }
    // 根据最大长度  调整展示数据类型
    function handlemaxLength(arr, nums, tall) {
      if (arr.length > maxLength) {
        return addUnitAndTypeAndTall(num / nums, unit, 'int', tall)
      } else {
        return addUnitAndTypeAndTall(num / nums, unit, type, tall)
      }
    }
    if (Object.prototype.toString.call(num) === '[object Number]') {
      if (num >= 0) {
        if (numOfLength(num) > 8) {
          return handlemaxLength(addUnitAndTypeAndTall(num / 100000000, unit, type, '亿')[0], 100000000, '亿')
        } else if (numOfLength(num) > 4) {
          return handlemaxLength(addUnitAndTypeAndTall(num / 10000, unit, type, '万')[0], 10000, '万')
        } else {
          return handlemaxLength(addUnitAndTypeAndTall(num, unit, type, '')[0], 1, '')
        }
      } else {
        if (numOfLength(num) > 9) {
          return handlemaxLength(addUnitAndTypeAndTall(num / 100000000, unit, type, '亿')[0], 100000000, '亿')
        } else if (numOfLength(num) > 5) {
          return handlemaxLength(addUnitAndTypeAndTall(num / 10000, unit, type, '万')[0], 10000, '万')
        } else {
          return handlemaxLength(addUnitAndTypeAndTall(num, unit, type, '')[0], 1, '')
        }
      }
    }
  },
  // 同比环比根据数据添加'+','-'
  handlerSymbol: function (num) {
    if (num >= 0) {
      return '+' + num
    } else {
      return num
    }
  },

  /* echarts部分 */
  // 没有坐标轴显示的柱状图
  createBarWithNoCoordinates: function (el, dataObj) {
    let myChart = $echarts.init(el)
    let grid_ = dataObj.grtd || { left: '0%', right: '0%', bottom: '0%', top: '15%', height: '100%' }
    let xAxisData = dataObj.xAxisData
    // let yAxisData = dataObj.yAxisData
    let seriesData = dataObj.seriesData
    let name = dataObj.name
    // let tooltipFormatter = dataObj.tooltipFormatter
    let option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'none'
        }
      },
      grid: grid_,
      xAxis: {
        type: 'category',
        data: xAxisData,
        show: false,
        axisTick: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: '#ccc'
          }
        },
        axisLabel: {
          show: true,
          color: '#ccc'
        }
      },
      yAxis: {
        show: false,
        type: 'value',
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        }
      },
      series: {
        name: name,
        type: 'bar',
        barWidth: '50%',
        itemStyle: {
          normal: {
            barBorderRadius: 30,
            color: new $echarts.graphic.LinearGradient(
              0, 0, 0, 1, [{
                offset: 0,
                color: '#00feff'
              },
              {
                offset: 0.5,
                color: '#027eff'
              },
              {
                offset: 1,
                color: '#0286ff'
              }
              ]
            )
          }
        },
        data: seriesData,
        zlevel: 11
      }
    }
    myChart.setOption(option, true)
    window.addEventListener('resize', function () {
      myChart.resize()
    })
  },
  // 横向双柱状图
  createDoubleBar: function (el, dataObj) {
    let myChart = $echarts.init(el)
    let option = {
      legend: {
        top: '5%',
        left: 'center',
        textStyle: {
          color: '#fff'
        },
        data: ['钥匙量', '有效房源量']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true
      },
      tooltip: {
        show: 'true',
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: '{b}<br/>{a0}：{c0}<br/>{a1}：{c1}'
      },
      xAxis: {
        type: 'value',
        axisLabel: {
          show: false
        },
        axisTick: { show: false },
        axisLine: {
          show: false,
          lineStyle: {
            color: '#fff'
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(255,255,255,0.2)',
            type: 'dashed'
          }
        }
      },
      yAxis: [
        {
          type: 'category',
          axisTick: { show: false },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#fff'
            }
          },
          data: ['广州', '深圳', '东莞', '天津', '惠州', '北京三级', '成都', '南京', '重庆', '长沙']
        },
        {
          type: 'category',
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: { show: false },
          splitArea: { show: false },
          splitLine: { show: false },
          data: ['广州', '深圳', '东莞', '天津', '惠州', '北京三级', '成都', '南京', '重庆', '长沙']
        }
      ],
      series: [
        {
          name: '有效房源量',
          type: 'bar',
          yAxisIndex: 1,
          itemStyle: {
            normal: {
              show: true,
              color: new $echarts.graphic.LinearGradient(0, 0, 1, 0, [{ offset: 0, color: '#4a71dd' }, { offset: 1, color: '#9864f2' }]),
              barBorderRadius: 50,
              borderWidth: 0,
              borderColor: '#333'
            }
          },
          barGap: '0%',
          barCategoryGap: '50%',
          data: [120, 132, 101, 134, 90, 230, 210, 125, 231, 132]
        },
        {
          name: '钥匙量',
          type: 'bar',
          itemStyle: {
            normal: {
              show: true,
              color: new $echarts.graphic.LinearGradient(0, 0, 1, 0, [{ offset: 0, color: '#048BFE' }, { offset: 1, color: '#00EEF1' }]),
              barBorderRadius: 50,
              borderWidth: 0,
              borderColor: '#333'
            }
          },
          barGap: '0%',
          barCategoryGap: '50%',
          data: [32, 52, 41, 64, 15, 10, 32, 25, 210, 32]
        }
      ]
    }
    myChart.setOption(option, true)
    window.addEventListener('resize', function () {
      myChart.resize()
    })
  },
  // 地图
  createMap: function (el, el1, dataObj) {
    let this_ = this
    let myChartMap = $echarts.init(el)
    let option1 = {
      tooltip: {
        show: true,
        formatter: function (params) {
          return params.name
        }
      },
      geo: {
        show: false,
        map: 'china',
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: false
          }
        },
        // zoom: 1,
        // scaleLimit: {
        //   min: 1,
        //   max: 3
        // },
        roam: true
        // itemStyle: {
        //   normal: {
        //     areaColor: '#1a2e44',
        //     borderWidth: 0,
        //     shadowBlur: 15
        //   }
        // }
      },
      grid: {
        top: '0',
        left: '0',
        right: '0',
        bottom: '0'
      },
      series: [
        {
          type: 'map',
          map: 'china',
          layoutSize: '200',
          selectedMode: 'single',
          geoIndex: 1,
          aspectScale: 0.75,
          showLegendSymbol: false,
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false,
              textStyle: {
                color: '#fff'
              }
            }
          },
          roam: true,
          itemStyle: {
            normal: {
              areaColor: '#031525',
              borderColor: '#4168a2',
              borderWidth: 1
            },
            emphasis: {
              areaColor: '#13253e'
            }
          },
          data: [
            {
              name: '北京',
              value: 100
            }, {
              name: '天津',
              value: 0
            }, {
              name: '上海',
              value: 60
            }, {
              name: '重庆',
              value: 0
            }, {
              name: '河北',
              value: 60
            }, {
              name: '河南',
              value: 60
            }, {
              name: '云南',
              value: 0
            }, {
              name: '辽宁',
              value: 0
            }, {
              name: '黑龙江',
              value: 0
            }, {
              name: '湖南',
              value: 60
            }, {
              name: '安徽',
              value: 0
            }, {
              name: '山东',
              value: 60
            }, {
              name: '新疆',
              value: 0
            }, {
              name: '江苏',
              value: 0
            }, {
              name: '浙江',
              value: 0
            }, {
              name: '江西',
              value: 0
            }, {
              name: '湖北',
              value: 60
            }, {
              name: '广西',
              value: 60
            }, {
              name: '甘肃',
              value: 0
            }, {
              name: '山西',
              value: 60
            }, {
              name: '内蒙古',
              value: 0
            }, {
              name: '陕西',
              value: 0
            }, {
              name: '吉林',
              value: 0
            }, {
              name: '福建',
              value: 0
            }, {
              name: '贵州',
              value: 0
            }, {
              name: '广东',
              value: 597
            }, {
              name: '青海',
              value: 0
            }, {
              name: '西藏',
              value: 0
            }, {
              name: '四川',
              value: 60
            }, {
              name: '宁夏',
              value: 0
            }, {
              name: '海南',
              value: 60
            }, {
              name: '台湾',
              value: 0
            }, {
              name: '香港',
              value: 0
            }, {
              name: '澳门',
              value: 0
            }]
        }]
    }
    myChartMap.setOption(option1)
    // console.log(option)
    window.addEventListener('resize', function () {
      myChartMap.resize()
    })
    myChartMap.on('click', function (params) {
      let city = params.name
      console.log(params)
      console.log(city)
      this_.createDoubleBar(el1)
    })
    // createDoubleBar(el1)
    this.createDoubleBar(el1)
  },
  // 没有y轴的折线图
  createLineWithNoY: function (el, dataObj) {
    let myChart = $echarts.init(el)
    var option = {
      // legend: {
      //   show: false,
      //   left: 'right',
      //   formatter: function (params) {
      //     var result = ''
      //     var res = ''
      //     params.forEach(function (item) {
      //       res = item.name
      //       result += item.marker + ' ' + item.seriesName + ' : ' + addDot(item.value) + '</br>'
      //     })
      //     return res + '<br/>' + result
      //   },
      //   y: '5%',
      //   itemWidth: 18,
      //   itemHeight: 12,
      //   textStyle: {
      //     color: '#fff',
      //     fontSize: 14
      //   },
      // },
      grid: {
        left: '5%',
        top: '5%',
        bottom: '5%',
        right: '5%',
        containLabel: true
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        },
        formatter: function (params) {
          var result = ''
          var res = ''
          params.forEach(function (item) {
            res = item.name
            result += item.marker + ' ' + item.seriesName + ' : ' + item.value + '</br>'
          })
          return res + '<br/>' + result
        }
      },
      xAxis: [
        {
          type: 'category',
          axisLine: {
            show: true,
            lineStyle: {
              color: '#6173A3'
            }
          },
          axisLabel: {
            textStyle: {
              color: '#9ea7c4',
              fontSize: 14
            }
          },
          axisTick: {
            show: false
          },
          data: ['2018/01', '2018/02', '2018/03', '2018/04', '2018/05', '2018/06']
        }
      ],
      yAxis: {
        axisTick: {
          show: false
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(255,255,255,0.2)',
            type: 'dashed'
          }
        },
        axisLabel: {
          show: false,
          textStyle: {
            color: '#9ea7c4',
            fontSize: 14
          }
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#6173A3'
          }
        }
      },
      series: {
        name: '毛佣金收入',
        type: 'line',
        symbol: 'circle',
        // symbolSize: 10,
        color: '#01afff',
        data: [120, 140, 100, 120, 300, 230]
      }
    }
    myChart.setOption(option, true)
    window.addEventListener('resize', function () {
      myChart.resize()
    })
  },
  // 南丁格尔玫瑰图
  createRose: function (el, dataObj) {
    let myChart = $echarts.init(el)
    let option = {
      // toolbox: {
      //   show: true,
      //   feature: {
      //     mark: {
      //       show: true
      //     },
      //     dataView: {
      //       show: true,
      //       readOnly: false
      //     },
      //     magicType: {
      //       show: true,
      //       type: ['pie', 'funnel']
      //     },
      //     restore: {
      //       show: true
      //     },
      //     saveAsImage: {
      //       show: true
      //     }
      //   }
      // },
      tooltip: {
        trigger: 'item',
        formatter: '{b}：{d}%'
      },
      // title: {
      //   'text': '南丁格尔玫瑰图--PieHalfRose',
      //   'left': 'center',
      //   'top': 20,
      //   'textStyle': {
      //     'color': '#ccc'
      //   }
      // },
      legend: {
        icon: 'circle',
        x: 'center',
        y: 'bottom',
        data: [
          '义乌市1',
          '义乌市2',
          '义乌市3',
          '义乌市4',
        ],
        textStyle: {
          color: '#fff'
        },
        // y
        // : true,
      },
      series: [{
        name: 'XX线索',
        type: 'pie',
        radius: ['30%', '125%'],
        // avoidLabelOverlap: false,
        startAngle: 0,
        center: [
          '50.1%',
          '0%'
        ],
        roseType: 'area',
        // 'selectedMode': 'single',
        'label': {
          'normal': {
            'show': false,
            // 'formatter': '{c}千万元'
          },
          'emphasis': {
            'show': false
          }
        },
        'labelLine': {
          'normal': {
            'show': false,
            'smooth': false,
            'length': 20,
            'length2': 10
          },
          'emphasis': {
            'show': false
          }
        },
        'data': [{
          'value': 600.58,
          'name': '义乌市1',
          'itemStyle': {
            'normal': {
              'color': '#f96362'
            }
          }
        },
        {
          'value': 1100.58,
          'name': '义乌市2',
          'itemStyle': {
            'normal': {
              'color': '#a367fa'
            }
          }
        },
        {
          'value': 1200.58,
          'name': '义乌市3',
          'itemStyle': {
            'normal': {
              'color': '#756fd1'
            }
          }
        },
        {
          'value': 1300.58,
          'name': '义乌市4',
          'itemStyle': {
            'normal': {
              'color': '#50aef4'
            }
          }
        },
        {
          'value': 0,
          'name': '',
          'itemStyle': {
            'normal': {
              'label': {
                'show': false
              },
              'labelLine': {
                'show': false
              }
            }
          }
        },
        {
          'value': 0,
          'name': '',
          'itemStyle': {
            'normal': {
              'label': {
                'show': false
              },
              'labelLine': {
                'show': false
              }
            }
          }
        },
        {
          'value': 0,
          'name': '',
          'itemStyle': {
            'normal': {
              'label': {
                'show': false
              },
              'labelLine': {
                'show': false
              }
            }
          }
        },
        {
          'value': 0,
          'name': '',
          'itemStyle': {
            'normal': {
              'label': {
                'show': false
              },
              'labelLine': {
                'show': false
              }
            }
          }
        }
        ]
      }]
    }
    myChart.setOption(option, true)
    window.addEventListener('resize', function () {
      myChart.resize()
    })
  }
}
