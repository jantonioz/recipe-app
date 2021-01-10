import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		recipes: [
			{
				id: 1,
				title: 'Recipe1',
				large: true,
				stars: 5 * Math.random(),
				count: 50 * Math.random() + 25,
			},
			{
				id: 2,
				title: 'Recipe2',
				stars: 5 * Math.random(),
				count: 50 * Math.random() + 25,
			},
			{
				id: 3,
				title: 'Recipe3',
				large: true,
				stars: 5 * Math.random(),
				count: 50 * Math.random() + 25,
			},
			{
				id: 4,
				title: 'Recipe4',
				large: true,
				stars: 5 * Math.random(),
				count: 50 * Math.random() + 25,
			},
			{
				id: 5,
				title: 'Recipe5',
				stars: 5 * Math.random(),
				count: 50 * Math.random() + 25,
			},
			{
				id: 6,
				title: 'Recipe6',
				stars: 5 * Math.random(),
				count: 50 * Math.random() + 25,
			},
			{
				id: 7,
				title: 'Recipe7',
				large: true,
				stars: 5 * Math.random(),
				count: 50 * Math.random() + 25,
			},
			{
				id: 8,
				title: 'Recipe8',
				stars: 5 * Math.random(),
				count: 50 * Math.random() + 25,
			},
			{
				id: 9,
				title: 'Recipe9',
				large: true,
				stars: 5 * Math.random(),
				count: 50 * Math.random() + 25,
			},
			{
				id: 10,
				title: 'Recipe10',
				large: true,
				stars: 5 * Math.random(),
				count: 50 * Math.random() + 25,
			},
			{
				id: 11,
				title: 'Recipe11',
				stars: 5 * Math.random(),
				count: 50 * Math.random() + 25,
			},
			{
				id: 12,
				title: 'Recipe12',
				stars: 5 * Math.random(),
				count: 50 * Math.random() + 25,
			},
		],
	},
	mutations: {},
	actions: {},
	modules: {},
})
