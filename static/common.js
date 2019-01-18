import $echarts from 'echarts'
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
            var res = parseFloat((num/100000000).toFixed(2)).toLocaleString()
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
            var res = parseFloat((num/10000).toFixed(2)).toLocaleString()
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
            return [(num).toLocaleString(),  unit];
          }
        } else {
          if (num.toString().length > 9) {
            var res = parseFloat((num/100000000).toFixed(2)).toLocaleString()
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
            var res = parseFloat((num/10000).toFixed(2)).toLocaleString()
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
            var res = parseFloat((num/100000000).toFixed(2)).toLocaleString()
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
            var res = parseFloat((num/10000).toFixed(2)).toLocaleString()
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
            var res = parseFloat((num/100000000).toFixed(2)).toLocaleString()
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
            var res = parseFloat((num/10000).toFixed(2)).toLocaleString()
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
  ,handlerSymbol: function (num) {
    if (num >= 0) {
      return '+' + num
    } else {
      return num
    }
  }

/* echarts部分 */
  // 没有坐标轴显示的柱状图
  ,createBarWithNoCoordinates: function (el, dataObj) {
    var myChart = $echarts.init(el)
    var grid_ = dataObj.grtd || { left: '0%', right: '0%', bottom: '0%', top: '15%', height: '100%' }
    var xAxisData = dataObj.xAxisData
    // var yAxisData = dataObj.yAxisData
    var seriesData = dataObj.seriesData
    var name = dataObj.name
    // var tooltipFormatter = dataObj.tooltipFormatter
    var option = {
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
}