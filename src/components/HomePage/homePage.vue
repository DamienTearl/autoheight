<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="15%">
        <navMenu/>
      </el-aside>
      <el-main>
        <mainModel/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import navMenu from '@/components/NavMenu/NavMenu'
import mainModel from '@/components/MainModel/MainModel'
export default {
  components: {
    navMenu,
    mainModel
  }
}
</script>

<style lang="scss">
.el-container  {
  height: 100%;
}
.el-header, .el-aside, .el-main {
  color: $fontC;
}
.el-header {
  background-color: $headerBgc;
  font-size: 0.2rem;
}
.el-aside {
  background-color: $asideBgc;
  overflow: hidden;
  min-width: 150px;
  max-width: 200px;
}
.el-main {
  background-color: $mainBgc;
  overflow: hidden;
  font-size: 0.12rem
}
</style>
