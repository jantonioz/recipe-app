<template>
	<v-card
		:loading="loading"
		class="mx-auto my-2 recipe-card col-6"
		:max-width="maxWidth"
		v-if="item"
	>
		<template slot="progress">
			<v-progress-linear
				color="deep-purple"
				height="10"
				indeterminate
			></v-progress-linear>
		</template>

		<v-img
			height="250"
			src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
		></v-img>

		<v-card-title>{{ item.title }}</v-card-title>

		<v-card-text>
			<v-row align="center" class="mx-0">
				<v-rating
					:value="item.stars"
					color="amber"
					dense
					half-increments
					readonly
					size="14"
				></v-rating>

				<div class="grey--text ml-4">
					{{ item.stars.toFixed(1) }} ({{ item.count.toFixed(0) }})
				</div>
			</v-row>

			<div class="my-4 subtitle-1">
				$ • Italian, Cafe
			</div>

			<div>
				Small plates, salads & sandwiches - an intimate setting with 12 indoor
				seats plus patio seating.
			</div>
		</v-card-text>

		<v-divider class="mx-4" v-if="item.large"></v-divider>

		<v-card-title v-if="large">Tonight's availability</v-card-title>

		<v-card-text v-if="item.large">
			<v-chip-group
				v-model="selection"
				active-class="green accent-4 white--text"
				column
			>
				<v-chip>5:30PM</v-chip>

				<v-chip>7:30PM</v-chip>

				<v-chip>8:00PM</v-chip>

				<v-chip>9:00PM</v-chip>
			</v-chip-group>
		</v-card-text>

		<v-card-actions v-if="more">
			<v-btn color="green lighten-2" text @click="verMas">
				Ver más
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
export default {
	name: 'RecipeFeedItem',
	props: {
		large: Boolean,
		maxWidth: Number || 374,
		more: Boolean || true,
		id: Number || -1,
	},
	data: () => ({
		loading: false,
		selection: 1,
		item: {}
	}),
	methods: {
		verMas() {
			console.log(this.id)
			this.$router.push(`/recipe/${this.id}`)
		},
	},
	mounted() {
		console.log(this.$store.state.recipes.find((e) => e.id === this.id))
		this.item = this.$store.state.recipes.find((e) => e.id === this.id)
	},
}
</script>
