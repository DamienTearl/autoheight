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
        xAxisData: ['20180116', '20180115'],
        seriesData: [1000, 2000],
        name: '两融余额'
      }
    }
  },
  methods: {
  },
  mounted () {
    this.$common.createBarWithNoCoordinates(document.getElementById('box1'), this.dataObj)
  }
}
</script>

<style>

</style>
