<template>
	<v-card
		class="my-2 "
		v-if="item.rateAvg || recipe"
		max-height="260"
		max-width="204"
		@click="verMas"
	>
		<template slot="progress">
			<v-progress-linear
				color="deep-purple"
				height="10"
				indeterminate
			></v-progress-linear>
		</template>

		<v-img
			class="mx-1"
			v-if="!item.previews || !item.previews.length"
			height="168"
			width="200"
			src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
		></v-img>

		<v-carousel v-if="item.previews && item.previews.length" hide-delimiters>
			<v-carousel-item
				v-for="(preview, i) in item.previews"
				:key="i"
				:src="getPreviewSrc(preview)"
			></v-carousel-item>
		</v-carousel>

		<v-card-title class="menuItemCenter">{{ item.title }}</v-card-title>

		<v-card-text class="menuItemCenter">
			<div class="grey--text">
				<v-icon class="mr-1" color="yellow">mdi-star</v-icon>
				<span> {{ item.rateAvg.toFixed(1) }}</span>
			</div>
		</v-card-text>
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
		...mapGetters('menus', {
			recipe: 'getSelected',
		}),
	},
	methods: {
		verMas() {
			this.$store.dispatch('/menus/setDetail', this.item._id)
			this.$router.push(`/menus/view/${this.item._id}`)
		},
		getPreviewSrc(preview) {
			const str = process.env.VUE_APP_API_BASE_URL
			const base = str.substr(0, str.length - 3)
			const fullURL = `${base}content/previews/${preview}`
			// console.log(fullURL)
			return fullURL
		},
	},
}
</script>

<style>
.menuItemCenter {
	display: flex;
	/* justify-content: center; */
	justify-content: center;
	text-align: center;
}
</style>
