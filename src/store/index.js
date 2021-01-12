import Vue from 'vue'
import Vuex, { createLogger } from 'vuex'

import recipes from './modules/recipes'
import user from './modules/user'
import drawer from './modules/drawer'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	modules: {
		recipes,
		user,
		drawer
	},
	strict: debug,
	plugins: debug ? [createLogger()] : [],
})
