<template>
  <el-row class="data_item1">
    <div class="data_item1_t">
      <div class="data_item1_t_t">
        <a @click="changeTabAutoHeightA('second')">详情 >></a>
      </div>
      <div class="data_item1_t_m">
        <div class="data_item1_t_m_l">
          <span class="data_item1_t_m_l_num">1,300
            <span class="data_item1_t_m_l_unit">亿</span>
          </span>
        </div>
        <div class="data_item1_t_m_r">
          <div class="data_item1_t_m_r_tb">同：<span class="data_item1_t_m_r_tb_num">0</span>%</div>
        </div>
      </div>
      <div class="data_item1_t_b">
        <div class="data_item1_t_b_l">
          <div class="data_item1_t_b_l_des">客户托管资产</div>
        </div>
        <div class="data_item1_t_b_r">
          <div class="data_item1_t_b_r_hb">环：<span class="data_item1_t_b_r_hb_num">0</span>%</div>
        </div>
      </div>
    </div>
    <div class="data_item1_b">
      <div class="data_item1_b_t">
        <div class="data_item1_b_t_l">
          普通客户资产
        </div>
        <div class="data_item1_b_t_r">
          10000000元
        </div>
      </div>
      <div class="data_item1_b_b">
        <div class="data_item1_b_b_l">
          两融净资产
        </div>
        <div class="data_item1_b_b_r">
          10000元
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
  }
}
</script>

<style>

</style>
