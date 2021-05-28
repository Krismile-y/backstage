import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    url:'',
    status:''
  },
  mutations: {
    change(state,newUrl){
      state.url=newUrl
    },
    des(state){
      state.url=null
    },
    c(state){
     state.status='0'
    }
  },
  actions: {
  },
  modules: {
  }
})
