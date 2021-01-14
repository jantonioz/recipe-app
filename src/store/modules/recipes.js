import api from '../../api/index'

const state = () => ({
	all: [],
	detail: {},
})

const getters = {
	getFeeds: (state) => {
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
	async getAllRecipes({ commit }, token) {
		const recipes = await api.getAllRecipes(token)
		commit('setRecipes', recipes)
	},
	async setDetail({ commit }, id) {
		const recipe = await api.getOneRecipe(id)
		commit('setDetail', recipe)
	},
	async sendRate({ commit }, { recipe, rate, comment }) {
		const result = await api.makeRate(recipe, { rate, comment })
		commit('sendRate', result)
		return result
	},
	async addRecipe(_, recipe) {
		const result = await api.addRecipe(recipe)
		return result
	},
	async edit({commit}, recipe) {
		const result = await api.editRecipe(recipe)
		commit('setDetail', recipe)
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
