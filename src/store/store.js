import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


const store = new Vuex.Store({
    state: {
      path: 'http://cn.vuejs.org'
    },
    mutations: {
      setPath (state, newpath) {
        state.path = newpath;
      }
    },
  })

  export default store
  
