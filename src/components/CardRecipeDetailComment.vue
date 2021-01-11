<template>
	<v-card class="mx-auto my-2 col-6" :max-width="maxWidth">
		<v-card-title>Comentar</v-card-title>
		<v-card-subtitle>
			<v-avatar color="secondary" class="mr-3" size="40" light>
				<span class="white--text headline">
					{{
						user.name
							.split(' ')
							.map((e) => e.toUpperCase().charAt(0))
							.join('')
					}}
				</span>
			</v-avatar>
			{{ user.name }}
		</v-card-subtitle>
		<v-row class="mx-auto my-auto mb-3" justify="start">
			<span class="my-auto">¿Qué calificación le das?</span>
			<v-rating hover length="5" size="24" v-model="rating" :value="rating">
			</v-rating>
		</v-row>
		<span class="text-subtitle-2 my-0">Agrega un comentario! </span>
		<v-textarea
			prepend-icon="mdi-comment"
			solo
			label
			v-model="comment"
			:value="comment"
			elevation="1"
		></v-textarea>

		<v-card-actions class="d-flex justify-end">
			<v-btn class="green darken-2" text dark @click="enviar">
				Enviar
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	props: {
		recipeId: String,
		maxWidth: Number,
	},
	data: () => ({
		comment: '',
		rating: 0,
	}),
	computed: {
		...mapGetters('user', {
			user: 'getUser',
		}),
	},
	methods: {
		async enviar() {
			await this.$store.dispatch('recipes/sendRate', {
				recipe: this.recipeId,
				comment: this.comment,
				rate: this.rating,
			})
			this.comment = ''
			this.rating = 0
		},
	},
}
</script>

<style></style>
