<template>
	<v-card
		class="mx-auto my-2 col-6"
		:max-width="maxWidth"
		v-if="item.rateAvg || recipe"
		max-height="750"
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
					:value="item.rateAvg"
					color="amber"
					dense
					half-increments
					readonly
					size="14"
				></v-rating>

				<div class="grey--text ml-4">
					{{ item.rateAvg.toFixed(1) }} ({{ item.rates.length.toFixed(0) }})
				</div>
			</v-row>

			<div class="my-4 subtitle-1">$ • {{ item.tags.join(', ') }}</div>

			<div class="text-body">
				{{ item.body.substring(0, 150) + '...' }}
			</div>
		</v-card-text>

		<v-card-actions v-if="more">
			<v-btn color="green lighten-2" text @click="verMas">
				Ver más
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	name: 'RecipeFeedItem',
	props: {
		large: Boolean,
		maxWidth: Number,
		more: Boolean,
		item: Object,
	},
	data: () => ({
		loading: true,
		selection: 1,
	}),
	computed: {
		...mapGetters('recipes', {
			recipe: 'getSelected',
		}),
	},
	methods: {
		verMas() {
			this.$store.dispatch('recipes/setDetail', this.item._id)
			this.$router.push(`/recipes/view/${this.item._id}`)
		},
	},
}
</script>

<style></style>
