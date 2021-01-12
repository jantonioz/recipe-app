const state = () => ({
	drawer: false,
})

const getters = {
	getDrawer: (state) => {
		return state.drawer
	},
}

const actions = {
	toggleDrawer({ commit }) {
		commit('toggleDrawer')
	},
	setDrawer({ commit }, newDrawer) {
		commit('setDrawer', newDrawer)
	},
}

const mutations = {
	toggleDrawer(state) {
		state.drawer = !state.drawer
	},
	setDrawer(state, v) {
		state.drawer = v
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
}
