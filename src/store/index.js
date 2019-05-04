import Vue from 'vue'
import Vuex from 'vuex'
import baseInfo from './modules/baseInfo'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    baseInfo
  }
})
