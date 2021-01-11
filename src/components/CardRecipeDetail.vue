<template>
	<div>
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
						{{ item.rateAvg.toFixed(1) }} ({{ item.rates.length.toFixed(0) }})
					</div>
				</v-row>

				<div class="my-4 subtitle-1"># • {{ item.tags.join(', ') }}</div>
				<div class="text-h6">Ingredientes:</div>
				<div v-for="ing of item.ingredients" :key="ing" class="ml-3" dense flat>
					<span>• {{ ing }} </span>
				</div>
				<div class="mt-6 text-body-1">
					{{ item.body }}
				</div>
			</v-card-text>

			<v-divider class="mx-4"></v-divider>

			<v-card-title>Comentarios</v-card-title>

			<v-card-text>
				<v-list v-for="rate in item.rates" :key="rate._id">
					<v-list-item two-line>
						<v-list-item-content>
							<v-list-item-subtitle>
								<v-avatar color="secondary" class="mr-3" size="40" light>
									<span class="white--text headline">
										{{
											rate.author.fullName
												.split(' ')
												.map((e) => e.toUpperCase().charAt(0))
												.join('')
										}}
									</span>
								</v-avatar>
								{{ rate.author.fullName }}
							</v-list-item-subtitle>
							<v-row>
								<v-col md="auto">
									<v-rating
										hover
										length="5"
										size="14"
										:value="rate.rate"
										readonly
										dense
									>
									</v-rating>
								</v-col>
								<v-col>
									<v-list-item-title>{{ rate.comment }}</v-list-item-title>
								</v-col>
							</v-row>
						</v-list-item-content>
					</v-list-item>
				</v-list>
			</v-card-text>
		</v-card>
    <CardRecipeDetailComment :maxWidth="1000" :recipeId="item._id" />
	</div>
</template>

<script>
import CardRecipeDetailComment from './CardRecipeDetailComment'

export default {
	props: {
		item: Object,
		maxWidth: Number,
	},
	components: {
		CardRecipeDetailComment,
	},
	mounted() {},
}
</script>

<style></style>
