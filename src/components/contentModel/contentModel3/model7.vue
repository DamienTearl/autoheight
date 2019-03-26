<template>
  <div class="contentBox">
    <div class="titleBox">
      <h4 class="title">交易额占比</h4>
    </div>
    <div class="containerBox">
      <div class="echartsContentBox" id="createPieWithLableBox"></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    this.$common.createPieWithLable(document.getElementById('createPieWithLableBox'))
  }
}
</script>

<style lang="scss">
@import '../../../assets/icon/style.css';
.contentBox {
  height: 100%;
  box-sizing: content-box;
  .titleBox {
    height: 10%;
  }
  .containerBox {
    height: 90%;
  }
}
.title {
  font-size:0.18rem;
  font-weight: 500;
}
</style>
