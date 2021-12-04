import api from '../../api/index'

const state = () => ({
	all: [],
	detail: {},
})

const getters = {
	getMainFeed: (state) => {
		var result = []
		return state.all.reduce((resultArray, item, index) => {
			const chunkIndex = index % 3
			if (!result[chunkIndex]) result[chunkIndex] = []

			result[chunkIndex] = [item, ...result[chunkIndex]]
			return result
		}, [])
	},
	getAll: (state) => {
		return state.all
	},
	getSelected: (state) => {
		return state.detail
	},
}

const actions = {
	async getAllMenus({ commit }, token) {
		const recipes = await api.getAllMenus(token)
		commit('setRecipes', recipes)
	},
	async setDetail({ commit }, id) {
		const recipe = await api.getOneMenu(id)
		commit('setDetail', recipe)
		return recipe
	},
	async sendRate({ commit }, { recipe, rate, comment }) {
		const result = await api.makeRate(recipe, { rate, comment })
		commit('sendRate', result)
		return result
	},
	async addMenuItem(_, recipe) {
		const result = await api.addMenuItem(recipe)
		return result
	},
	async edit({commit}, recipe) {
		const result = await api.editMenuItem(recipe)
		commit('setDetail', recipe)
		return result
	},
	async delete({commit}, recipe) {
		const result = await api.deleteMenuItem(recipe)
		commit('setDetail', {})
		return result
	},
}

const mutations = {
	setRecipes(state, recipes) {
		state.all = recipes
	},
	setDetail(state, recipe) {
		state.detail = recipe
	},
	sendRate(state, recipe) {
		state.detail = recipe
	},
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
}
