import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: true,
		themes: {
			dark: {
				primary: colors.teal.darken2,
				secondary: colors.teal,
				accent: colors.amber,
				error: colors.red.accent3,
        
			},
      light: {
        primary: colors.teal.lighten4
      }
		},
	},
})
