<template>
  <el-row>
    <router-view></router-view>
  </el-row>
</template>

<script>
export default {
  inject: ['reload']
}
</script>

<style lang="scss">
  .el-row {
    height: 100%;
    // background-color: $moduleBgc;
  }
</style>
