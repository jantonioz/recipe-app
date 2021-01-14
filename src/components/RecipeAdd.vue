<template>
	<v-card class="mx-auto my-2 col-6" :max-width="1000">
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

		<v-card-title>
			<v-text-field flat outlined placeholder="Titulo" v-model="title">
			</v-text-field>
		</v-card-title>

		<v-card-text>
			<v-row justify="start" align-content="center">
				<v-col cols="2">
					<v-subheader class="">
						Dificulty level
					</v-subheader></v-col
				>
				<v-col class="mt-2" cols="3">
					<v-slider
						v-model="slider"
						thumb-label="always"
						:max="5"
						:min="1"
					></v-slider>
				</v-col>
				<v-col>
					<v-combobox
						v-model="tags"
						:items="tagsItems"
						:search-input.sync="search"
						chips
						label="Tags"
						multiple
						outlined
						dense
						small-chips
					></v-combobox>
				</v-col>
			</v-row>
			<v-combobox
				v-model="ingredients"
				:items="ingredientsItems"
				chips
				multiple
				outlined
				label="Ingredients"
			></v-combobox>
			<v-textarea
				flat
				outlined
				label="Procedure"
				v-model="prodecure"
			></v-textarea>
		</v-card-text>
		<v-alert dense outlined type="error" v-if="error.code">
			<strong>{{ error.code }}</strong> {{ error.message }}
		</v-alert>
		<v-card-actions class="d-flex justify-end">
			<v-btn class="orange lighten-1" text dark @click="cancel">
				Cancel
			</v-btn>
			<v-divider></v-divider>
			<v-btn class="green darken-1" text dark @click="add">
				Add
			</v-btn>
		</v-card-actions>
		<v-overlay :value="loading">
			<v-progress-circular indeterminate size="64"></v-progress-circular>
		</v-overlay>
	</v-card>
</template>

<script>
export default {
	props: {},
	data: () => ({
		title: '',
		prodecure: '',
		tags: [],
		tagsItems: [],
		ingredients: [],
		ingredientsItems: [],
		items: [],
		select: null,
		search: null,
		slider: 1,
		loading: false,
		error: {},
	}),
	watch: {
		tags(e) {
			this.tagsItems = e
		},
		ingredents(e) {
			this.ingredentsItems = e
		},
	},
	methods: {
		add: async function() {
			this.loading = true
			try {
				const result = await this.$store.dispatch('recipes/addRecipe', {
					title: this.title,
					tags: this.tags,
					ingredients: this.ingredients,
					level: this.slider,
					body: this.prodecure,
				})
				this.loading = false
				await this.$store.dispatch('recipes/setDetail', result._id)
				this.$router.push(`/recipes/view/${result._id}`)
			} catch (error) {
				this.loading = false
				console.log(error)
				this.error = error
			}
		},
		cancel: function() {
			this.$router.push('/')
		}
	},
}
</script>

<style></style>
