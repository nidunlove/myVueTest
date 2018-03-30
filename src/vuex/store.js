import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	//定义状态
  state: {
    userName : 'NiDun',
    content: "魏静是个傻子a"
  }
})

export default store