import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 逻辑部分
// 存储数据、状态
const state = {
  navAutoHeight: '1-1',
  tabAutoHeight: 'first',
  chooseDate: '',
  chooseOrganization: ''
}
// 变化、改变
const mutations = {
  // 改变tab高亮
  changeTabAutoHeightM (state, type) {
    state.tabAutoHeight = type
  }
}
// 动作
const actions = {
  // 派遣 changeTabAutoHeight 执行
  changeTabAutoHeightA (context, type) {
    context.commit('changeTabAutoHeightM', type)
  }
}
//
const store = new Vuex.Store({
  state,
  mutations,
  actions
})
export default store
