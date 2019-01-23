<template>
  <el-row class="nopadding">
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-row class="mapBox" id="mapBox" ref="mapBox"></el-row>
    <el-row class="barBox" id="mapBox1" style="height:100%;width:50%"></el-row>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: ''
    }
  },
  methods: {
  },
  mounted () {
    // console.log(this.$refs.mapBox)
    // this.$common.createMap(this.$refs.mapBox)  会报错
    // 注意  需要地图模块时需要引入相应的js文件import  'echarts/lib/chart/map'; import 'echarts/map/js/china.js';
    this.$common.createMap(document.getElementById('mapBox'))
  }
}
</script>

<style lang="scss">
.nopadding {
  position: relative;
}
.nopadding .el-select  {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
.mapBox, .barBox {
  float: left;
  width: 50%;
}
#map .mapBox {
  border-radius: 0px;
  border-right: 1px dashed $dateC;
}
</style>
