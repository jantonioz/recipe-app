<template>
	<div>
		<v-card class="mx-auto my-2 col-6" :max-width="maxWidth" v-if="item.title">
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

					<div class="grey--text ml-4 mr-3">
						{{ item.rateAvg.toFixed(1) }} ({{
							(item.rates || []).length.toFixed(0) || 0
						}})
					</div>
					•
					<span class="ml-3 blue--text"
						>{{ item.author.fullName || item.author.name }}
					</span>
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
				<v-fab-transition>
					<v-btn
						v-show="!hidden"
						color="green ligthen-1"
						dark
						fixed
						bottom
						right
						fab
						@click="edit"
					>
						<v-icon>mdi-pencil</v-icon>
					</v-btn>
				</v-fab-transition>
				<v-list v-for="rate in item.rates" :key="rate._id">
					<v-divider></v-divider>
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
								{{ rate.author.fullName }} - {{ createdAt() }}
							</v-list-item-subtitle>
							<v-col>
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
										<v-list-item-title>{{
											levels[rate.rate]
										}}</v-list-item-title>
									</v-col>
								</v-row>

								<p
									class="text-body-1"
									readonly
									flat
									dense
									auto-grow
									no-resize
									rounded
									solo
								>
									{{ rate.comment }}
								</p>
							</v-col>
						</v-list-item-content>
					</v-list-item>
				</v-list>
			</v-card-text>
		</v-card>
		<CardRecipeDetailComment :maxWidth="1000" :recipeId="item._id" />
	</div>
</template>

<script>
import moment from 'moment'
import CardRecipeDetailComment from './CardRecipeDetailComment'
import { mapGetters } from 'vuex'

export default {
	props: {
		item: Object,
		maxWidth: Number,
	},
	data: () => ({
		levels: {
			1: 'Muy malo!!!!!!1',
			2: 'Malo',
			3: 'Bien',
			4: 'Muy bueno!',
			5: 'Excelente!',
		},
		hidden: true,
	}),
	computed: {
		...mapGetters('user', {
			user: 'getUser',
		}),
	},
	components: {
		CardRecipeDetailComment,
	},
	mounted() {
		if (this.item && this.user.name) {
			if (this.item.author._id === this.user.id) {
				this.hidden = false
			}
		}
	},
	methods: {
		createdAt() {
			return moment.utc(this.item.createdAt).format('LLLL')
		},
		edit: function() {
			this.$router.push(`${this.$route.path}/edit/`)
		},
	},
}
</script>

<style></style>
