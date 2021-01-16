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
	},
}

const actions = {
	async login({ commit }, { username, password }) {
		try {
			const { user, token } = await api.login(username, password)
			console.log('actions.login', user, token)
			commit('setUser', user)
			commit('setToken', token)
			return user
		} catch (error) {
			commit('setUser', {})
			throw error
		}
	},
	async register({ commit }, credentials) {
		try {
			const result = await api.register(credentials)
			const { user, token } = await api.login(
				credentials.username,
				credentials.password
			)
			console.log('actions.register', result)
			commit('setUser', user)
			commit('setToken', token)
			return result
		} catch (error) {
			commit('setUser', null)
			throw error
		}
	},
	setToken({ commit }, token) {
		console.log('setToken to api', token)
		api.updateToken(token)
		commit('setToken', token)
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
	setToken(state, token) {
		state.token = token
	},
	logout(state) {
		state.user = {}
		state.token = ''
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
