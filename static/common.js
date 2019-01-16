import $echarts from 'echarts'
export default {
  // 没有坐标轴显示的柱状图
  createBarWithNoCoordinates: function (el, dataObj) {
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
        barWidth: '30%',
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