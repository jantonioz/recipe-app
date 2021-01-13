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
	async getAllRecipes({ commit, state }) {
		const recipes = await api.getAllRecipes(state.token)
		commit('setRecipes', recipes)
	},
	async setDetail({ commit, state }, id) {
		const recipe = await api.getOneRecipe(id, state.token)
		commit('setDetail', recipe)
	},
	async sendRate({ commit, state }, { recipe, rate, comment }) {
		const result = await api.makeRate(recipe, { rate, comment }, state.token)
		commit('sendRate', result)
		return result
	},
	async addRecipe({ state }, recipe) {
		const result = await api.addRecipe(recipe, state.token)
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
