import api from '../../api/index'

const state = () => ({
	user: {},
	token: null,
})

const getters = {
	getName: (state) => {
		return state.user.fullName
	},
	getUser: (state) => {
		return state.user || {}
	},
	getToken: (state) => {
		return state.token
	}
}

const actions = {
	async login({ commit }, { username, password }) {
		try {
			const { user, token } = await api.login(username, password)
			commit('setUser', user)
			commit('setToken', token)
			return user
		} catch (error) {
			commit('setUser', {})
			return error
		}
	},
	logout({ commit }) {
		commit('logout')
	},
	async update({ commit, state }, user) {
		try {
			const newUser = await api.updateUser(user, state.token)
			console.log(newUser)
			commit('updateUser', newUser)
		} catch (error) {
			return error
		}
	},
}

const mutations = {
	setUser(state, user) {
		state.user = user
	},
	setTOken(state, token) {
		state.token = token
	},
	logout(state) {
		state.user = null
	},
	updateUser(state, user) {
		state.user = user
	},
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
}
