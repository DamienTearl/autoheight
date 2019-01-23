<template>
  <el-row>
    <el-row class="topDiv" :gutter="20">
      <el-col :span="19" class="modelDiv">
        <el-col :span="6">
          <el-row id="model_1">
            <model1 v-bind:model1Data="glKhtgzcData"/>
          </el-row>
        </el-col>
        <el-col :span="6">
          <el-row id="model_2">
            <model1 v-bind:model1Data="khgmData"/>
          </el-row>
        </el-col>
        <el-col :span="6">
          <el-row id="model_3">
            <model2 v-bind:model2Data="jrcpData"/>
          </el-row>
        </el-col>
        <el-col :span="6">
          <el-row id="model_4">
            <model2 v-bind:model2Data="gjscfeData"/>
          </el-row>
        </el-col>
      </el-col>
      <el-col :span="5">
        <el-row class="contntBox">
          <model3 v-bind:echartsData="glLryeDataE" v-bind:model3Data="glLryeData"/>
        </el-row>
      </el-col>
    </el-row>
    <el-row class="bottomDiv" :gutter="20">
      <el-col :span="19">
        <el-row class="contntBox" id="map">
          <model4/>
        </el-row>
      </el-col>
      <el-col :span="5">
        <el-row class="sliceDiv">
          <el-row class="sliceDivT contntBox"></el-row>
          <el-row class="sliceDivB contntBox"></el-row>
        </el-row>
      </el-col>
    </el-row>
  </el-row>
</template>

<script>
import model1 from '@/components/contentModel/contentModel2/model1'
import model2 from '@/components/contentModel/contentModel2/model2'
import model3 from '@/components/contentModel/contentModel2/model3'
import model4 from '@/components/contentModel/contentModel2/model4'
export default {
  components: {
    model1,
    model2,
    model3,
    model4
  },
  data () {
    return {
      glLryeDataE: [],
      glKhtgzcData: {},
      khgmData: {},
      jrcpData: {},
      gjscfeData: {},
      glLryeData: {}
    }
  },
  computed: {
    newArr () {
      return this.glLryeDataE
    },
    newArr1 () {
      return this.glKhtgzcData
    },
    newArr2 () {
      return this.khgmData
    },
    newArr3 () {
      return this.jrcpData
    },
    newArr4 () {
      return this.gjscfeData
    },
    newArr5 () {
      return this.glLryeData
    }
  },
  methods: {
    getglKhtgzcData () {
      this.$axios('/glKhtgzcData/index')
        .then(res => {
          this.glKhtgzcData = res.data
        })
    },
    getkhgmData () {
      this.$axios('/khgmData/index')
        .then(res => {
          this.khgmData = res.data
        })
    },
    getjrcpData () {
      this.$axios('/jrcpData/index')
        .then(res => {
          this.jrcpData = res.data
        })
    },
    getglLryeDataE () {
      this.$axios('/glLryeData/index')
        .then(res => {
          this.glLryeDataE = res.data
        })
    },
    getglLryeData () {
      this.$axios('/lryeData/index')
        .then(res => {
          this.glLryeData = res.data
        })
    },
    getgjscfeData () {
      this.$axios('/gjscfeData/index')
        .then(res => {
          this.gjscfeData = res.data
        })
    },
    init () {
      this.getglKhtgzcData()
      this.getkhgmData()
      this.getjrcpData()
      this.getgjscfeData()
      this.getglLryeData()
      this.getglLryeDataE()
    }
  },
  created () {
    this.init()
    // console.log('fatherCreated')
  }
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
        padding: 0.15rem;
      }
      // 第一模块样式开始
      .data_item1.el-row {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0;
        .data_item1_t {
          height: 65%;
          border-bottom: 1px solid $dateC;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .data_item1_t_t {
            flex: 1;
            text-align: right;
            color: $tabC;
            a {
              color: inherit;
              cursor: pointer;
              text-decoration: none;
            }
          }
          .data_item1_t_m, .data_item1_t_b {
            flex: 2;
            display: flex;
            justify-content: space-between;
            .data_item1_t_m_l, .data_item1_t_m_r, {
              flex: 3;
              display: flex;
              align-items: flex-end;
              .data_item1_t_m_l_num {
                font-size: 0.3rem;
                font-weight: 900;
                vertical-align: bottom;
              }
              .data_item1_t_m_l_unit {
                font-size: 0.14rem;
                font-weight: normal;
              }
            }
            .data_item1_t_m_r {
              flex: 2;
              justify-content: flex-end;
              .data_item1_t_m_r_tb {
                font-size: 0.14rem;
                background-color: #0fe97a;
                padding: 0.01rem 0.08rem;
                border-radius: 4px;
                .data_item1_t_m_r_tb_num {
                  font-weight: 500;
                }
              }
            }
          }
          .data_item1_t_b {
            padding-top: 0.1rem!important;
            align-items: flex-start!important;
            .data_item1_t_b_l, .data_item1_t_b_r {
              flex: 3;
              display: flex;
              align-items: flex-end;
              .data_item1_t_b_l_des {
                font-size: 0.16rem;
              }
              .data_item1_t_b_r_hb {
                font-size: 0.14rem;
                background-color: #089cc8;
                padding: 0.01rem 0.08rem;
                border-radius: 4px;
                .data_item1_t_b_r_hb_num {
                  font-weight: 500;
                }
              }
            }
            .data_item1_t_b_r {
              flex: 2;
              justify-content: flex-end;
            }
          }
          // 第三模块样式代码
          .data_item1_t_c {
            flex: 4;
            display: flex;
            .data_item1_t_c_l {
              flex: 3;
              display: flex;
              flex-direction: column;
              .data_item1_t_c_l_t, .data_item1_t_c_l_b {
                flex: 1;
                display: flex;
                align-items: flex-end;
                padding-bottom: 0.1rem;
                .data_item1_t_m_l_num {
                  font-size: 0.3rem;
                  font-weight: 900;
                  vertical-align: bottom;
                }
                .data_item1_t_m_l_unit {
                  font-size: 0.14rem;
                  font-weight: normal;
                }
              }
              div.data_item1_t_c_l_b {
                flex: 1;
                align-items: flex-start;
                padding-bottom: 0;
                .data_item1_t_b_l_des {
                  font-size: 0.16rem;
                }
              }
            }
          }
          .data_item1_t_c_r {
            flex: 2;
            display: flex;
            justify-content: flex-end;
            align-self: center;
            text-align: right;
            .data_item1_t_m_r_tb {
              font-size: 0.14rem;
              background-color: #089cc8;
              padding:0.08rem;
              border-radius: 4px;
              .data_item1_t_m_r_tb_num {
                font-weight: 500;
              }
            }
          }
          // 第三模块样式结束
        }
        .data_item1_b {
          height: 35%;
          display: flex;
          flex-direction: column;
          align-content: flex-end;
          justify-content: space-between;
          .data_item1_b_t, .data_item1_b_b {
            flex:1;
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            font-size: 0.14rem;
          }
        }
      }
      // 第一模块样式结束
    }
    .modelDiv {
      padding: 0!important;
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
        padding: 0;
        .sliceDivT {
          height: 50%;
          margin-bottom: 20px;
          padding: 0.15rem;
        }
        .sliceDivB {
          height: 50%;
          padding: 0.15rem;
        }
      }
    }
  }
  .contntBox {
    padding: 0.15rem;
  }
  #map .el-row,.nopadding {
    padding: 0;
  }
}
// 第四模块微调样式
#model_4 .data_item1_t_m_r_tb {
  background-color: #0fe97a;
}
  // 第四模块微调样式
</style>
