import api from '../../api/index'

const state = () => ({
	all: [],
	detail: {},
})

const getters = {
	getAll: (state) => {
		return state.all
	},
	getSelected: (state) => {
		return state.detail
	},
}

const actions = {
	async getAll({ commit }) {
		const restaurants = await api.getAllRestaurants()
		commit('setAll', restaurants)
	},
	async setDetail({ commit }, id) {
		const restaurant = await api.getOneRestaurant(id)
		commit('setDetail', restaurant)
		return restaurant
	},
}

const mutations = {
	setAll(state, restaurants) {
		state.all = restaurants
	},
	setDetail(state, restaurant) {
		state.detail = restaurant
	},
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
}
