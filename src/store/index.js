import Vue from 'vue'
import Vuex, { createLogger } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import menus from './modules/menus'
import user from './modules/user'
import drawer from './modules/drawer'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	modules: {
		menus,
		user,
		drawer,
	},
	strict: debug,
	plugins: debug
		? [createLogger(), createPersistedState()]
		: [createPersistedState()],
})
