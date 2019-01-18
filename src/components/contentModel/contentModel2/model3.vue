<template>
  <el-row class="data_item1">
    <div class="data_item1_t">
      <div class="data_item1_t_t">
        <a @click="changeTabAutoHeightA('second')">详情 >></a>
      </div>
      <div class="data_item1_t_c">
        <div class="data_item1_t_c_l">
          <div class="data_item1_t_c_l_t">
            <span class="data_item1_t_m_l_num">1,300
              <span class="data_item1_t_m_l_unit">亿</span>
            </span>
          </div>
          <div class="data_item1_t_c_l_b">
            <div class="data_item1_t_b_l">
              <div class="data_item1_t_b_l_des">客户托管资产</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="data_item1_b">
      <div id="box1" style="height:100%;width:100%"></div>
    </div>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      dataObj: {
        xAxisData: [],
        seriesData: [],
        name: '两融余额'
      }
    }
  },
  props: ['echartsData'],
  methods: {
    dataInto () {
      for (var i = 0; i < this.echartsData.length; i++) {
        this.dataObj.xAxisData.push(this.echartsData[i]['date'])
        this.dataObj.seriesData.push(this.echartsData[i]['data'])
      }
    }
  },
  created () {
    console.log(this.echartsData)
    // console.log('--created')
  },
  beforeMount () {
    // console.log(this.echartsData + '--beforeMount')
    // console.log('--beforeMount')
    // this.dataInto()
  },
  mounted () {
    // console.log(this.echartsData + '--mounted')
    // console.log('--mounted')
    setTimeout(() => {
      this.dataInto()
      this.$common.createBarWithNoCoordinates(document.getElementById('box1'), this.dataObj)
    }, 1000)
  }
}
</script>

<style>

</style>
