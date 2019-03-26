<template>
  <div class="contentBox">
    <div class="titleBox">
      <h4 class="title">股基交易情况</h4>
    </div>
    <div class="containerBox">
      <div class="top">
        <div class="top_leftBox">
          <div class="top_icon icon-3"></div>
          <div class="top_des">
            <div class="top_des_title">股基交易额</div>
            <div class="top_des_num">1.89万元</div>
          </div>
        </div>
        <div class="top_rightBox">
          <div class="top_icon icon-1"></div>
          <div class="top_des">
            <div class="top_des_title">股基交易额</div>
            <div class="top_des_num">1.89万元</div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <!-- <div class="more">大图>></div> -->
        <div class="echartsBox" id="createDoubleLineOneFillBox"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['reload'],
  mounted () {
    // const that = this
    window.onresize = function () {
      console.log(1111111)
      // that.reload()
    }
    this.$common.createDoubleLineOneFill(document.getElementById('createDoubleLineOneFillBox'))
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
    .top {
      display: flex;
      justify-content: space-between;
      height: 30%;
      border-bottom: 1px solid #999;
      .top_leftBox, .top_rightBox {
        width: 48%;
        border: 1px solid $tabC;
        height: 80%;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        .top_icon {
          flex: 2;
          font-size: 0.5rem;
          color: $tabC;
          border-right: 1px solid $tabC;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .top_des {
          flex: 5;
          text-align: center;
          font-size: 0.18rem;
        }
      }
    }
    .bottom {
      display: flex;
      box-sizing: border-box;
      padding-top: 1%;
      height: 70%;
      font-size: 0.12rem;
      color: $tabC;
      flex-direction: column;
      .more {
        text-align: right;
      }
      .echartsBox {
        height: 100%;
      }
    }
  }
}
.title {
  font-size:0.18rem;
  font-weight: 500;
}
</style>
