import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {
	scrollJumper(state, {id}) {
		// probably should be a mixin...
		let offset = 90 // Size of navbar + 20 pixels for a little padding
		let section = document.getElementById(id)
		window.scrollTo(0,section.offsetTop - offset)
	}
  },
  actions: {}
})
