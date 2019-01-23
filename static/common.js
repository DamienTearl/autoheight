import $echarts from 'echarts'
import 'echarts/lib/chart/map';
import 'echarts/map/js/china.js';
export default {
  /* js代码部分 */
  // 根据数据大小  给相对应的单位（数据格式化）
  handlerData: function (num, unit) {
    // console.log(Object.prototype.toString.call(num))
    var unit = unit || '元'
    if (Object.prototype.toString.call(num) === '[object Number]') {
      if (parseInt(num) === parseFloat(num)) {
        // 整数部分代码
        if (num >= 0) {
          if (num.toString().length > 8) {
            var res = parseFloat((num / 100000000).toFixed(2)).toLocaleString()
            var arr = res.split('.')
            if (arr[1]) {
              if (arr[1].toString().length === 1) {
                res = res + '0'
              }
            } else {
              res = res + '.00'
            }
            return [res, '亿' + unit];
          } else if (num.toString().length > 4) {
            var res = parseFloat((num / 10000).toFixed(2)).toLocaleString()
            var arr = res.split('.')
            if (arr[1]) {
              if (arr[1].toString().length === 1) {
                res = res + '0'
              }
            } else {
              res = res + '.00'
            }
            return [res, '万' + unit];
          } else {
            return [(num).toLocaleString(), unit];
          }
        } else {
          if (num.toString().length > 9) {
            var res = parseFloat((num / 100000000).toFixed(2)).toLocaleString()
            var arr = res.split('.')
            if (arr[1]) {
              if (arr[1].toString().length === 1) {
                res = res + '0'
              }
            } else {
              res = res + '.00'
            }
            return [res, '亿' + unit];
          } else if (num.toString().length > 5) {
            var res = parseFloat((num / 10000).toFixed(2)).toLocaleString()
            var arr = res.split('.')
            if (arr[1]) {
              if (arr[1].toString().length === 1) {
                res = res + '0'
              }
            } else {
              res = res + '.00'
            }
            return [res, '万' + unit];
          } else {
            return [(num).toLocaleString(), unit];
          }
        }
      } else {// 非整数部分代码
        if (num >= 0) {
          if (parseInt(num).toString().length > 8) {
            var res = parseFloat((num / 100000000).toFixed(2)).toLocaleString()
            var arr = res.split('.')
            if (arr[1]) {
              if (arr[1].toString().length === 1) {
                res = res + '0'
              }
            } else {
              res = res + '.00'
            }
            return [res, '亿' + unit];
          } else if (parseInt(num).toString().length > 4) {
            var res = parseFloat((num / 10000).toFixed(2)).toLocaleString()
            var arr = res.split('.')
            if (arr[1]) {
              if (arr[1].toString().length === 1) {
                res = res + '0'
              }
            } else {
              res = res + '.00'
            }
            return [res, '万' + unit];
          } else {
            var res = parseFloat((num).toFixed(2)).toLocaleString()
            var arr = res.split('.')
            if (arr[1]) {
              if (arr[1].toString().length === 1) {
                res = res + '0'
              }
            } else {
              res = res + '.00'
            }
            return [res, unit];
          }
        } else {
          if (parseInt(num).toString().length > 9) {
            var res = parseFloat((num / 100000000).toFixed(2)).toLocaleString()
            var arr = res.split('.')
            if (arr[1]) {
              if (arr[1].toString().length === 1) {
                res = res + '0'
              }
            } else {
              res = res + '.00'
            }
            return [res, '亿' + unit];
          } else if (parseInt(num).toString().length > 5) {
            var res = parseFloat((num / 10000).toFixed(2)).toLocaleString()
            var arr = res.split('.')
            if (arr[1]) {
              if (arr[1].toString().length === 1) {
                res = res + '0'
              }
            } else {
              res = res + '.00'
            }
            return [res, '万' + unit];
          } else {
            var res = parseFloat((num).toFixed(2)).toLocaleString()
            var arr = res.split('.')
            if (arr[1]) {
              if (arr[1].toString().length === 1) {
                res = res + '0'
              }
            } else {
              res = res + '.00'
            }
            return [res, unit];
          }
        }
      }
    } else {
      return
    }
  }
  // 同比环比根据数据添加'+','-'
  , handlerSymbol: function (num) {
    if (num >= 0) {
      return '+' + num
    } else {
      return num
    }
  }

  /* echarts部分 */
  // 没有坐标轴显示的柱状图
  , createBarWithNoCoordinates: function (el, dataObj) {
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
          type: 'none',
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
  }
  // 地图
  , createMap: function (el) {
    let myChartMap = $echarts.init(el)
    let option1 = {
      geo: {
        show: false,
        map: 'china',
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: false,
          }
        },
        // zoom: 1,
        // scaleLimit: {
        //   min: 1,
        //   max: 3
        // },
        roam: true,
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
              show: false,
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
  }
}