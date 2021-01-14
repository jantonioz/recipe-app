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
			<v-btn class="red darken-1" text dark @click="dialog = true">
				Delete
			</v-btn>
			<v-spacer></v-spacer>
			<v-btn class="orange darken-1 mr-6" text dark @click="cancel">
				Cancel
			</v-btn>
			<v-btn class="green darken-1" text dark @click="update">
				Edit
			</v-btn>
		</v-card-actions>
		<v-overlay :value="loading">
			<v-progress-circular indeterminate size="64"></v-progress-circular>
		</v-overlay>
		<v-dialog v-model="dialog" width="500">
			<v-card>
				<v-card-title class="headline red darken-1 white--text">
					Alert you are deleting {{ title }}
				</v-card-title>

				<v-card-text class="mt-2">
					You sure you want to delete "{{ title }}"?

					<br />
					This action will permanently delete this recipe.
				</v-card-text>

				<v-divider></v-divider>

				<v-card-actions>
					<v-btn color="orange lighten-1" text @click="dialog = false">
						No, cancel
					</v-btn>
					<v-spacer></v-spacer>
					<v-btn color="red lighten-1" text @click="_delete">
						Yes, delete it
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</v-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	props: {},
	data: () => ({
		id: '',
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
		loading: true,
		error: {},
		dialog: false,
	}),
	watch: {
		tags(e) {
			this.tagsItems = e
		},
		ingredents(e) {
			this.ingredentsItems = e
		},
		recipe(r) {
			if (r && r.title) {
				this.id = r._id || r.id
				this.title = r.title
				this.prodecure = r.body
				this.ingredients = r.ingredients
				this.ingredientsItems = r.ingredients
				this.tags = r.tags
				this.tagsItems = r.tagsItems
				this.slider = r.level
				this.loading = false
			}
		},
	},
	computed: {
		...mapGetters('recipes', {
			recipe: 'getSelected',
		}),
	},
	mounted() {
		this.$store.dispatch('recipes/setDetail', this.$route.params.id)
	},
	methods: {
		update: async function() {
			this.loading = true
			try {
				await this.$store.dispatch('recipes/edit', {
					id: this.id,
					title: this.title,
					tags: this.tags,
					ingredients: this.ingredients,
					level: this.slider,
					body: this.prodecure,
				})
				this.loading = false
				await this.$store.dispatch('recipes/setDetail', this.id)
				this.$router.push(`/recipes/view/${this.id}`)
			} catch (error) {
				this.loading = false
				console.log(error)
				this.error = error
			}
		},
		cancel: async function() {
			await this.$store.dispatch('recipes/setDetail', this.id)
			this.$router.push(`/recipes/view/${this.id}`)
		},
		_delete: async function() {
			this.loading = true
			try {
				await this.$store.dispatch('recipes/delete', {
					id: this.id,
				})
				this.loading = false
				this.$router.push(`/`)
			} catch (error) {
				this.loading = false
				console.log(error)
				this.error = error
			}
		},
	},
}
</script>

<style></style>
