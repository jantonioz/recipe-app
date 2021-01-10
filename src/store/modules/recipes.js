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
	getSelected: (state) => {
		return state.detail
	},
}

const actions = {
	async getAllRecipes({ commit }) {
		const recipes = await api.getAllRecipes()
		commit('setRecipes', recipes)
	},
	async getOneRecipe({ commit }, { _id }) {
		const recipe = await api.getOneRecipe(_id)
		commit('setDetail', recipe)
	},
}

const mutations = {
	setRecipes(state, recipes) {
		state.all = recipes
	},
	setDetail(state, recipe) {
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
