import api from '../../api/index'

const state = () => ({
  user: {},
  token: null
})

const getters = {
	getName: (state) => {
		return state.user.fullName
	},
	getUser: (state) => {
		console.log('getUser', state.user)
		return state.user
	}
}

const actions = {
	async login({ commit }) {
		const user = await api.login('antonio', '1234')
		commit('setUser', user)
	}
}

const mutations = {
	setUser(state, user) {
		state.user = user
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
}
