<template>
  <el-row>
    <el-row class="topDiv" :gutter="20">
      <el-col :span="5">
        <el-row class="contntBox"></el-row>
      </el-col>
      <el-col :span="5">
        <el-row class="contntBox"></el-row>
      </el-col>
      <el-col :span="5">
        <el-row class="contntBox"></el-row>
      </el-col>
      <el-col :span="5">
        <el-row class="contntBox"></el-row>
      </el-col>
      <el-col :span="4">
        <el-row class="contntBox"></el-row>
      </el-col>
    </el-row>
    <el-row class="bottomDiv" :gutter="20">
      <el-col :span="20">
        <el-row class="contntBox"></el-row>
      </el-col>
      <el-col :span="4">
        <el-row class="sliceDiv">
          <el-row class="sliceDivT contntBox"></el-row>
          <el-row class="sliceDivB contntBox"></el-row>
        </el-row>
      </el-col>
    </el-row>
  </el-row>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.el-row {
  .topDiv, .bottomDiv {
    height: 30%;
    box-sizing: content-box;
    .el-col {
      height: 100%;
      .el-row {
        background-color: $moduleBgc;
        border-radius: 5px;
      }
    }
  }
  .bottomDiv {
    height: 70%;
    margin-top: 20px;
    .el-col {
      padding-bottom: 20px;
      .sliceDiv {
        background-color: rgba(0,0,0,0);
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        .sliceDivT {
          height: 50%;
          margin-bottom: 20px;
        }
        .sliceDivB {
          height: 50%;
        }
      }
    }
  }
  .contntBox {
    padding: 0.1rem
  }
}
</style>
