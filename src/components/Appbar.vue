<template>
	<v-app-bar app color="primary" dark>
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
		<v-spacer></v-spacer>
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
		>
		</v-autocomplete>

		<v-btn href="/login" target="_blank" text>
			<span class="mr-2">Iniciar sesión</span>
			<v-icon>mdi-login</v-icon>
		</v-btn>
	</v-app-bar>
</template>

<script>
export default {
	name: 'Appbar',
	props: {
		title: String,
	},
	data: () => ({
		loading: false,
		items: [],
		search: null,
		select: null,
	}),
	watch: {
		search(val) {
			val && val !== this.select && this.querySelections(val)
		},
	},
	methods: {
		querySelections(v) {
			this.loading = true
			// Simulated ajax query
			setTimeout(() => {
				this.items = this.$store.state.recipes
					.map((e) => e.title)
					.filter((e) => {
						return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
					})
				this.loading = false
			}, 500)
		},
	},
}
</script>
