<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="概览" name="first">
      <el-row>
        <el-col class="searchDiv">
          <SearchModel/>
        </el-col>
        <el-row class="contentDiv">
          <contentModel2/>
        </el-row>
      </el-row>
    </el-tab-pane>
    <el-tab-pane label="交易分析" name="second">
      <el-row>
        <el-col class="searchDiv">
          <SearchModel/>
        </el-col>
        <el-row class="contentDiv">
        </el-row>
      </el-row>
    </el-tab-pane>
    <el-tab-pane label="客户分析" name="third">
      <el-row>
        <el-col class="searchDiv">
          <SearchModel/>
        </el-col>
        <el-row class="contentDiv">
        </el-row>
      </el-row>
    </el-tab-pane>
    <!-- <el-tab-pane label="定时任务补偿" name="fourth">
      <el-row>
        <el-col class="searchDiv">
          <SearchModel/>
        </el-col>
        <el-row class="contentDiv">
        </el-row>
      </el-row>
    </el-tab-pane> -->
  </el-tabs>
</template>

<script>
import SearchModel from '@/components/SearchModel/SearchModel'
import contentModel1 from '@/components/contentModel/contentModel1'
import contentModel2 from '@/components/contentModel/contentModel2'
export default {
  data () {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  },
  components: {
    SearchModel,
    contentModel1,
    contentModel2
  }
}
</script>

<style lang="scss">
.el-tabs__item {
  color: $fontC;
}
.el-tabs__item.is-active,.el-tabs__item:hover {
  color: $tabC;
}
.el-tabs__active-bar {
  background-color: $tabC;
}
// 高度自适应
.el-tabs.el-tabs--top {
  height: 100%;
  box-sizing: border-box;
}
.el-tabs__content {
  height: 100%;
  box-sizing: border-box;
  padding-bottom: 55px
}
.el-tab-pane {
  height: 100%;
}
.el-row .el-col.searchDiv {
  margin-bottom: 15px;
}
.el-row.contentDiv {
  margin-top: 55px;
  padding-bottom: 55px;
}
</style>
