<template>
  <el-row class="data_item1">
    <el-col class="data_item1_t">
      <h3 class="gl_title">毛佣金收入</h3>
      <!-- <span class="gl_particulars"> -->
        <a class="gl_particulars" @click="handlerAutoHeight(model2Data.params, model2Data.navParams)">详情 >></a>
      <!-- </span> -->
    </el-col>
    <el-col class="data_item1_content">
      <div class="contentBox" :id=" echartsType + 'echartsBox'"></div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: ['echartsType'],
  mounted () {
    console.log(this.echartsType)
    if (this.echartsType === 'line') {
      this.$common.createLineWithNoY(document.getElementById(this.echartsType + 'echartsBox'))
    } else {
      this.$common.createRose(document.getElementById(this.echartsType + 'echartsBox'))
    }
  }
}
</script>

<style>

</style>
