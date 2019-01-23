<template>
  <el-row class="data_item1">
    <div class="data_item1_t">
      <div class="data_item1_t_t">
        <a @click="handlerAutoHeight(model2Data.params, model2Data.navParams)">详情 >></a>
      </div>
      <div class="data_item1_t_c">
        <div class="data_item1_t_c_l">
          <div class="data_item1_t_c_l_t">
            <span class="data_item1_t_m_l_num">
              {{ this.$common.handlerData(model2Data.number) && this.$common.handlerData(model2Data.number)[0] }}
              <span class="data_item1_t_m_l_unit">
                {{ this.$common.handlerData(model2Data.number, model2Data.unit) && this.$common.handlerData(model2Data.number, model2Data.unit)[1] }}
              </span>
            </span>
          </div>
          <div class="data_item1_t_c_l_b">
            <div class="data_item1_t_b_l">
              <div class="data_item1_t_b_l_des">{{ model2Data.title }}</div>
            </div>
          </div>
        </div>
        <div class="data_item1_t_c_r">
          <div class="data_item1_t_m_r_tb">{{ model2Data &&  model2Data.describe }}：<br/>
            <span class="data_item1_t_m_r_tb_num">
              {{ this.$common.handlerData(model2Data.currentMonth) && this.$common.handlerData(model2Data.currentMonth)[0] }}
            </span>
            {{ model2Data.unit1 || (this.$common.handlerData(model2Data.currentMonth) && this.$common.handlerData(model2Data.currentMonth)[1]) }}
          </div>
        </div>
      </div>
    </div>
    <div class="data_item1_b">
      <div class="data_item1_b_t">
        <div class="data_item1_b_t_l">
          {{ model2Data &&  model2Data.title_sup }}
        </div>
        <div class="data_item1_b_t_r">
          {{ this.$common.handlerData(model2Data.num_sup) && this.$common.handlerData(model2Data.num_sup)[0]}}
          {{ this.$common.handlerData(model2Data.num_sup) && this.$common.handlerData(model2Data.num_sup)[1]}}
        </div>
      </div>
      <div class="data_item1_b_b">
        <div class="data_item1_b_b_l">
          {{ model2Data &&  model2Data.title_sub }}
        </div>
        <div class="data_item1_b_b_r">
          {{ this.$common.handlerData(model2Data.num_sub) && this.$common.handlerData(model2Data.num_sub)[0]}}
          {{ this.$common.handlerData(model2Data.num_sub) && this.$common.handlerData(model2Data.num_sub)[1]}}
        </div>
      </div>
    </div>
  </el-row>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['changeTabAutoHeightA', 'changeNavAutoHeightA']),
    handlerAutoHeight (params1, params2) {
      this.changeNavAutoHeightA(params2)
      // console.log(this.$store.state.)
      this.changeTabAutoHeightA(params1)
    }
  },
  props: ['model2Data']
}
</script>

<style>

</style>
