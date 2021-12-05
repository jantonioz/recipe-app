<template>
	<div class="mx-5">
		<v-fab-transition>
			<v-btn color="blue" dark fixed bottom left fab @click="top"
				><v-icon>
					mdi-chevron-up
				</v-icon>
			</v-btn>
		</v-fab-transition>
		<v-fab-transition v-if="user.isRestaurant">
			<v-btn
				color="green"
				dark
				fixed
				bottom
				right
				rounded
				@click="addNew"
				style="z-index:999"
				><v-icon>
					mdi-plus
				</v-icon>
				Add new
			</v-btn>
		</v-fab-transition>
		<v-row justify="center" v-if="!mobile">
			<ListFeed :list="items" />
			<ListFeed v-if="!items" :list="feed" />
		</v-row>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { isMobile, isTablet } from 'mobile-device-detect'
import ListFeed from './ListFeed'

export default {
	name: 'Feed',
	props: {
		items: Array,
	},
	data: () => ({
		mobile: isMobile || isTablet,
	}),
	components: {
		ListFeed,
	},
	computed: {
		...mapGetters('menus', {
			feedLists: 'getMainFeed',
		}),
		...mapGetters('user', {
			token: 'getToken',
		}),
		...mapGetters('menus', {
			feed: 'getAll',
		}),
	},
	methods: {
		top() {
			window.scrollTo(0, 0)
		},
		addNew: function() {
			this.$router.push('/menus/add')
		},
	},
	async mounted() {
		if (!this.items) await this.$store.dispatch('menus/getAllMenus', this.token)
	},
}
</script>

<style></style>
