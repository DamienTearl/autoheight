<template>
  <el-row id="contentModel3">
    <el-row :gutter="20" class="topDiv">
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <el-row class="bg-content"></el-row>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <el-row class="bg-content"></el-row>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="bottomDiv">
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <el-row class="bg-content"></el-row>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <el-row class="bg-content"></el-row>
        </div>
      </el-col>
    </el-row>
  </el-row>
</template>

<script>
export default {}
</script>

<style lang="scss">
#contentModel3 {
  .topDiv,
  .bottomDiv {
    height: 55%;
    border-radius: 5px;
  }
  .bottomDiv {
    height: 45%;
  }
  .bg-purple {
    height: 100%;
    background-color: $moduleBgc;
    border-radius: 5px;
    box-sizing: border-box;
    .bg-content {
      padding: 0.15rem;
    }
  }
}
</style>
