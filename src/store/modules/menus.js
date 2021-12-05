import api from '../../api/index'

const state = () => ({
	all: [],
	detail: {},
})

const getters = {
	getMainFeed: (state) => {
		return state.all
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
		const menuItems = await api.getAllMenus(token)
		commit('setAll', menuItems)
	},
	async setDetail({ commit }, id) {
		const menuItem = await api.getOneMenu(id)
		commit('setDetail', menuItem)
		return menuItem
	},
	async sendRate({ commit }, { menuItem, rate, comment }) {
		const result = await api.makeRate(menuItem, { rate, comment })
		commit('sendRate', result)
		return result
	},
	async add(_, menuItem) {
		const result = await api.addMenuItem(menuItem)
		return result
	},
	async edit({ commit }, menuItem) {
		const result = await api.editMenuItem(menuItem)
		commit('setDetail', menuItem)
		return result
	},
	async delete({ commit }, menuItem) {
		const result = await api.deleteMenuItem(menuItem)
		commit('setDetail', {})
		return result
	},
}

const mutations = {
	setAll(state, menuItems) {
		state.all = menuItems
	},
	setDetail(state, menuItem) {
		state.detail = menuItem
	},
	sendRate(state, menuItem) {
		state.detail = menuItem
	},
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
}
