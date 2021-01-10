<template>
	<v-app>
		<Appbar title="Recipes App!" />

		<v-main v-if="user && user.name">
			<router-view></router-view>
		</v-main>
	</v-app>
</template>

<script>
import { mapGetters } from 'vuex'

import Appbar from './components/Appbar'

export default {
	name: 'App',

	components: {
		Appbar,
	},
	computed: mapGetters('user', {
		user: 'getUser',
	}),
	data: () => ({
		//
	}),
	async created() {
		await this.$store.dispatch('user/login')
	},
}
</script>
