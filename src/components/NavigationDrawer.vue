<template>
	<v-navigation-drawer v-model="drawerState" temporary fixed bottom light>
		<v-list nav dense>
			<v-list-item>
				<v-list-item-content>
					<v-list-item-title class="title pb-5 text-center">
						Recipes App!
					</v-list-item-title>
					<v-list-item-subtitle class="mt-5 text-center"
						>Try something new</v-list-item-subtitle
					>
				</v-list-item-content>
			</v-list-item>
			<v-divider></v-divider>
		</v-list>
		<v-list dense>
			<v-list-item v-for="item of navList" :key="item.text"  @click="goTo(item.link)">
				<v-list-item-icon>
					<v-icon>{{ item.icon }}</v-icon>
				</v-list-item-icon>
				<v-list-item-title> {{ item.text }} </v-list-item-title>
			</v-list-item>
		</v-list>
	</v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	data: () => ({
		navList: [
			{ text: 'Home', link: '/', icon: 'mdi-home' },
			{ text: 'Profile', link: '/profile', icon: 'mdi-account' },
			{ text: 'Create recipe', link: '/recipes/add', icon: 'mdi-plus' },
		],
	}),
	computed: {
		drawerState: {
			...mapGetters('drawer', {
				get: 'getDrawer',
			}),
			set(v) {
				return this.$store.dispatch('drawer/setDrawer', v)
			},
		},
	},
	props: {},
	methods: {
		goTo(url) {
			if (url !== this.$route.path) this.$router.push(url)
		},
	},
}
</script>

<style></style>
