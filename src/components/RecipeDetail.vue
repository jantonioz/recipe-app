<template>
	<v-container>
		<v-row class="mb-6" justify="center">
			<v-col>
				<v-btn color="green lighten-2" v-on:click="back" class="mt-5" dark>
					<v-icon dark left> mdi-arrow-left </v-icon>
					Atrás
				</v-btn>
			</v-col>
			<v-col cols="8" v-if="!loading">
				<v-card
					class="mx-auto my-2 col-6"
					:max-width="maxWidth"
					v-if="item.rateAvg"
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
								{{ item.rateAvg.toFixed(1) }} ({{
									item.rates.length.toFixed(0)
								}})
							</div>
						</v-row>

						<div class="my-4 subtitle-1">$ • {{ item.tags.join(', ') }}</div>

						<div>
							Small plates, salads & sandwiches - an intimate setting with 12
							indoor seats plus patio seating.
						</div>
					</v-card-text>

					<v-divider class="mx-4" v-if="large"></v-divider>

					<v-card-title v-if="large">Tonight's availability</v-card-title>

					<v-card-text v-if="large">
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
			</v-col>
			<v-col></v-col>
		</v-row>
	</v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	components: {},
	data: () => ({
		loading: true,
		id: 9999,
	}),
	computed: {
		...mapGetters('recipes', {
			item: 'getSelected',
		}),
	},
	mounted() {
		this.$store.dispatch('recipes/setDetail', this.$route.params.id)
		this.loading = false
	},
	methods: {
		back() {
			this.$router.back()
		},
	},
}
</script>

<style></style>
