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
		console.log('getUser', state.user)
		return state.user || {}
	},
}

const actions = {
	async login({ commit }, { username, password }) {
		try {
			const user = await api.login(username, password)
			commit('setUser', user)
			return user
		} catch (error) {
			commit('setUser', {})
			return error
		}
	},
	logout({ commit }) {
		commit('logout')
	},
}

const mutations = {
	setUser(state, user) {
		state.user = user
	},
	logout(state) {
		state.user = null
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
}
