<template>
  <el-row class="data_item1">
    <div class="data_item1_t">
      <div class="data_item1_t_t">
        <a @click="changeTabAutoHeightA(model1Data.params)">详情 >></a>
      </div>
      <div class="data_item1_t_m">
        <div class="data_item1_t_m_l">
          <span class="data_item1_t_m_l_num">{{ this.$common.handlerData(model1Data.number) && this.$common.handlerData(model1Data.number)[0] }}
            <span class="data_item1_t_m_l_unit">{{ this.$common.handlerData(model1Data.number, model1Data.unit, '') && this.$common.handlerData(model1Data.number, model1Data.unit)[1] }}</span>
          </span>
        </div>
        <div class="data_item1_t_m_r">
          <div class="data_item1_t_m_r_tb">同：<span class="data_item1_t_m_r_tb_num">{{this.$common.handlerSymbol(model1Data.tb_num)}}</span>%</div>
        </div>
      </div>
      <div class="data_item1_t_b">
        <div class="data_item1_t_b_l">
          <div class="data_item1_t_b_l_des">{{model1Data.title}}</div>
        </div>
        <div class="data_item1_t_b_r">
          <div class="data_item1_t_b_r_hb">环：<span class="data_item1_t_b_r_hb_num">{{this.$common.handlerSymbol(model1Data.hb_num)}}</span>%</div>
        </div>
      </div>
    </div>
    <div class="data_item1_b">
      <div class="data_item1_b_t">
        <div class="data_item1_b_t_l">
          {{model1Data.title_sup}}
        </div>
        <div class="data_item1_b_t_r">
          {{ this.$common.handlerData(model1Data.num_sup) && this.$common.handlerData(model1Data.num_sup)[0] }} {{ this.$common.handlerData(model1Data.num_sup) && this.$common.handlerData(model1Data.num_sup, model1Data.unit)[1] }}
        </div>
      </div>
      <div class="data_item1_b_b">
        <div class="data_item1_b_b_l">
          {{model1Data.title_sub}}
        </div>
        <div class="data_item1_b_b_r">
          {{ this.$common.handlerData(model1Data.num_sub, model1Data.unit) && this.$common.handlerData(model1Data.num_sub)[0] }} {{ this.$common.handlerData(model1Data.num_sub, model1Data.unit) && this.$common.handlerData(model1Data.num_sub, model1Data.unit)[1] }}
        </div>
      </div>
    </div>
  </el-row>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['changeTabAutoHeightA'])
  },
  props: ['model1Data']
}
</script>

<style>

</style>
