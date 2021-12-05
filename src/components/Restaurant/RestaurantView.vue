// A layout with an image centered inside a container // below the image is a
list of the restaurant's menu items
<template>
	<v-container>
		<!-- An image centered and below the image is a list of the restaurant's menu items -->
		<v-img
			height="250"
			src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
			class="titleRest"
		>
			<p
				style="height:100%"
				class="d-flex justify-center align-center text-h1 titleRest"
			>
				{{ item.restaurantInfo ? item.restaurantInfo.name : 'Loading...' }}
			</p>
		</v-img>
    <Feed :items="item.menuItems" />
	</v-container>
</template>

<script>
import Feed from '../Feed/Feed'
import { mapGetters } from 'vuex'

// import { isMobile, isTablet } from 'mobile-device-detect'

export default {
  components: {
    Feed
  },
	computed: {
		...mapGetters('restaurants', {
			item: 'getSelected',
		}),
	},
	watch: {
		item(i) {
			console.log('watch item', i)
		},
	},
	async mounted() {
		await this.$store.dispatch('restaurants/setDetail', this.$route.params.id)
		this.loading = false
	},
	methods: {
		back() {
			this.$router.push('/')
		},
	},
}
</script>

<style>
.titleRest {
	/* background: #00000088;
	background: linear-gradient(0deg, #00000088, #ffffff44, 100deg); */
	background: rgb(0, 0, 0);
	background: linear-gradient(
		90deg,
		rgba(0, 0, 0, 0.53) 0%,
		rgba(255, 255, 255, 0.19659201571253504) 100%
	);

	/* background: rgb(131, 58, 180);
	background: linear-gradient(
		90deg,
		rgba(131, 58, 180, 1) 0%,
		rgba(253, 29, 29, 1) 50%,
		rgba(252, 176, 69, 1) 100%
	); */
}
</style>
