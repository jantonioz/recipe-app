<template>
	<v-container>
		<v-row class="mb-6" justify="center">
			<v-col>
				<v-btn color="green lighten-2" v-on:click="back" class="mt-5" dark
					><v-icon dark left> mdi-arrow-left </v-icon>Atrás</v-btn
				>
			</v-col>
			<v-col cols="8" v-if="!loading">
				<RecipeFeedItem
					v-model="id"
					v-bind:id="id"
					:large="true"
					:maxWidth="10000"
					:v-if="!loading"
				/>
			</v-col>
			<v-col></v-col>
		</v-row>
	</v-container>
</template>

<script>
import RecipeFeedItem from './RecipeFeedItem'
export default {
	components: {
		RecipeFeedItem,
	},
	data: () => ({
		loading: true,
		id: 9999,
	}),
	mounted() {
		this.id = Number(this.$route.params.id)
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
