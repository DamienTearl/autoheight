<template>
  <el-tabs v-model="tabAutoHeight" @tab-click="handleClick">
    <el-tab-pane label="概览" name="first" lazy>
      <el-row>
        <el-col class="searchDiv">
          <SearchModel/>
        </el-col>
        <el-row class="contentDiv">
          <contentModel2/>
        </el-row>
      </el-row>
    </el-tab-pane>
    <el-tab-pane label="交易分析" name="second" lazy>
      <el-row>
        <el-col class="searchDiv">
          <SearchModel/>
        </el-col>
        <el-row class="contentDiv">
          <contentModel3/>
        </el-row>
      </el-row>
    </el-tab-pane>
    <el-tab-pane label="客户分析" name="third" lazy>
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
// import { mapState } from 'vuex'
import { mapMutations, mapActions } from 'vuex'
import SearchModel from '@/components/SearchModel/SearchModel'
import contentModel1 from '@/components/contentModel/contentModel1'
import contentModel2 from '@/components/contentModel/contentModel2'
import contentModel3 from '@/components/contentModel/contentModel3'
export default {
  inject: ['reload'],
  data () {
    return {
      // activeName: this.tabAutoHeight || 'first'
    }
  },
  components: {
    SearchModel,
    contentModel1,
    contentModel2,
    contentModel3
  },
  computed: {
    tabAutoHeight: {
      get () {
        return this.$store.state.tabAutoHeight
      },
      set () {}
    }
    // ...mapState({
    //   tabAutoHeight: 'tabAutoHeight'
    // })
  },
  methods: {
    ...mapMutations(['changeTabAutoHeightM']),
    ...mapActions(['changeTabAutoHeightA']),
    handleClick (tab, event) {
      // this.changeTabAutoHeightA(tab.name)
      console.log(tab, event)
      // this.reload()
    }
  }
  // mounted () {
  //   window.onresize = function () {
  //     // console.log('bianle')
  //     // this.reload()
  //   }
  // }
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
