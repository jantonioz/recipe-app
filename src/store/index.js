import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		recipes: [
			{ id: 1, title: 'Recipe1', large: true },
			{ id: 2, title: 'Recipe2' },
			{ id: 3, title: 'Recipe3', large: true },
			{ id: 4, title: 'Recipe4', large: true },
			{ id: 5, title: 'Recipe5' },
			{ id: 6, title: 'Recipe6' },
			{ id: 7, title: 'Recipe7', large: true },
			{ id: 8, title: 'Recipe8' },
			{ id: 9, title: 'Recipe9', large: true },
			{ id: 10, title: 'Recipe10', large: true },
			{ id: 11, title: 'Recipe11' },
			{ id: 12, title: 'Recipe12' },
		],
	},
	mutations: {},
	actions: {},
	modules: {},
})
