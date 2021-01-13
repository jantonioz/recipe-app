<template>
	<v-app>
		<Appbar title="Recipes App!" v-if="user.name" />
		<NavigationDrawer v-if="user.name" />
		<v-main>
			<router-view></router-view>
		</v-main>
	</v-app>
</template>

<script>
import { mapGetters } from 'vuex'

import Appbar from './components/Appbar'
import NavigationDrawer from './components/NavigationDrawer'

export default {
	name: 'App',

	components: {
		Appbar,
		NavigationDrawer,
	},
	computed: mapGetters('user', {
		user: 'getUser',
		token: 'getToken',
	}),
	data: () => ({
		//
	}),
	created() {
		if (!this.user.name && this.$route.path !== '/login')
			this.$router.push('/login')
		if (this.token) {
			this.$store.dispatch('user/setToken', this.token)
		}
		if (!this.token) {
			this.$store.dispatch('user/logout')
		}
	},
	watch: {
		user(u) {
			if ((!u || !u.name) && this.$route.path !== '/login')
				this.$router.push('/login')
		},
	},
}
</script>
