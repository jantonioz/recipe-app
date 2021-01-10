import Vue from 'vue'
import Vuex, { createLogger } from 'vuex'

import recipes from './modules/recipes'
import user from './modules/user'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	modules: {
		recipes,
		user
	},
	strict: debug,
	plugins: debug ? [createLogger()] : [],
})
