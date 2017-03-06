/**
 * Created by jessietang on 2017/3/6.
 */
import Vue from 'vue'
import Vuex from 'vuex'

// 告诉 vue “使用” vuex
Vue.use(Vuex)

// 创建一个对象来保存应用启动时的初始状态
const state = {
  totalTime: 0,
  list: [

  ]
}

const mutations = {
  // 增加总时间
  ADD_TOTAL_TIME(state, time){
    state.totalTime = state.totalTime + parseFloat(time)
  },
  // 减少总时间
  DEC_TOTAL_TIME(state, time){
    state.totalTime = state.totalTime - parseFloat(time)
  },
  // 新增计划
  SAVE_PLAN(state, plan){
    // 设置默认值，未来我们可以做登入直接读取昵称和头像
    const avatar = 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256';
    // Object.assign() 方法用于将所有可枚举的属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
    state.list.push(
      Object.assign({name: 'jessie', avatar: avatar}, plan)
    )
  },
  DELETE_PLAN(state, idx){
    state.list.splice(idx, 1);
  }

}

  /*Action 类似于 mutation，不同在于：
  1.Action 提交的是 mutation，而不是直接变更状态。
  2.Action 可以包含任意[异步操作]。*/
// 我们的actions其实就是去触发事件和传入参数
const actions = {
  addTotalTime({commit}, time){
    commit('ADD_TOTAL_TIME', time)
  },
  decTotalTime({commit}, time){
    commit('DEC_TOTAL_TIME', time)
  },
  savePlan({commit}, plan){
    commit('SAVE_PLAN', plan)
  },
  deletePlan({commit}, idx){
    commit('DELETE_PLAN', idx)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
