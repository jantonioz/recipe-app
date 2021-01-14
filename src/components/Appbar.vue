<template>
	<v-app-bar app color="primary" dark>
		<v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
		<div class="d-flex align-center">
			<v-img
				alt="Vuetify Logo"
				class="shrink mr-2"
				contain
				src="../assets/logo.svg"
				transition="scale-transition"
				width="40"
			/>

			<v-app-bar-title>{{ title }}</v-app-bar-title>
		</div>
		<v-spacer ></v-spacer>
		<v-autocomplete
			v-model="select"
			:loading="loading"
			:items="items"
			:search-input.sync="search"
			cache-items
			class="search-bar"
			label="Buscar..."
			clearable
			hide-details
			rounded
			solo-inverted
			hint="Buscar..."
			color="#000"
			dense
			flat
			hide-no-data
			item-color="secondary"
			v-if="items && !mobile"
		>
			<template v-slot:item="{ item }" dark>
				<v-list-item-content @click="onClick">
					<v-list-item-title v-text="item"></v-list-item-title>
				</v-list-item-content>
			</template>
		</v-autocomplete>

		<template v-slot:extension>
			<v-autocomplete
				v-model="select"
				:loading="loading"
				:items="items"
				:search-input.sync="search"
				cache-items
				class="search-bar"
				label="Buscar..."
				clearable
				hide-details
				rounded
				solo-inverted
				hint="Buscar..."
				color="#000"
				dense
				flat
				hide-no-data
				item-color="secondary"
				v-if="items"
			>
				<template v-slot:item="{ item }" dark>
					<v-list-item-content @click="onClick">
						<v-list-item-title v-text="item"></v-list-item-title>
					</v-list-item-content>
				</template>
			</v-autocomplete>
		</template>

		<v-btn href="/login" target="_blank" text v-if="!user.name">
			<span class="mr-2">Iniciar sesión</span>
			<v-icon>mdi-login</v-icon>
		</v-btn>

		<AppbarMenuAccount v-if="!mobile" />

		<v-btn @click="logout" target="_blank" text v-if="user.name" dense>
			<v-icon>mdi-logout</v-icon>
		</v-btn>
	</v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex'

import { isMobile, isTablet } from 'mobile-device-detect'
import AppbarMenuAccount from './AppbarMenuAccount'

export default {
	name: 'Appbar',
	props: {
		title: String,
	},
	components: {
		AppbarMenuAccount,
	},
	data: () => ({
		loading: false,
		items: [],
		search: null,
		select: null,
		mobile: isMobile || isTablet,
	}),
	computed: {
		...mapGetters('recipes', {
			recipes: 'getAll',
		}),
		...mapGetters('user', {
			user: 'getUser',
		}),
		...mapGetters('drawer', {
			drawer: 'getDrawer',
		}),
	},
	watch: {
		search(val) {
			val && val !== this.select && this.querySelections(val)
			// console.log('val', val)
		},
	},
	methods: {
		querySelections(v) {
			this.loading = true
			// Simulated ajax query
			setTimeout(() => {
				this.items = this.recipes
					.map((e) => e.title)
					.filter((e) => {
						return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
					})
				this.loading = false
			}, 10)
		},
		onClick(evt) {
			const item = this.recipes.find((e) => e.title === evt.target.innerText)
			if (!item) return null
			this.$router.push(`/recipes/view/${item._id}`)
		},
		toggleDrawer() {
			this.$store.dispatch('drawer/toggleDrawer')
		},
		logout() {
			this.$store.dispatch('user/logout')
		},
	},
}
</script>
