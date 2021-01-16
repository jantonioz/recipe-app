<template>
	<v-container>
		<v-fab-transition>
			<v-btn color="blue" dark fixed bottom left fab @click="top"
				><v-icon>
					mdi-chevron-up
				</v-icon>
			</v-btn>
		</v-fab-transition>
		<v-fab-transition>
			<v-btn color="green" dark fixed bottom right rounded @click="addNew"
				><v-icon>
					mdi-plus
				</v-icon>
				Add new
			</v-btn>
		</v-fab-transition>
		<v-row justify="center" v-if="!mobile">
			<v-col cols="4">
				<ListFeed :colIndex="0" :list="feedLists[0]" />
			</v-col>
			<v-col cols="4">
				<ListFeed :colIndex="1" :list="feedLists[1]" />
			</v-col>
			<v-col cols="4">
				<ListFeed :colIndex="2" :list="feedLists[2]" />
			</v-col>
		</v-row>
		<v-row v-else>
			<ListFeed :colIndex="2" :list="feed" />
		</v-row>
	</v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import { isMobile, isTablet } from 'mobile-device-detect'
import ListFeed from './ListFeed'

export default {
	name: 'Feed',
	data: () => ({
		mobile: isMobile || isTablet,
	}),
	components: {
		ListFeed,
	},
	computed: {
		...mapGetters('recipes', {
			feedLists: 'getFeeds',
		}),
		...mapGetters('user', {
			token: 'getToken',
		}),
		...mapGetters('recipes', {
			feed: 'getAll',
		}),
	},
	methods: {
		top() {
			window.scrollTo(0, 0)
		},
		addNew: function() {
			this.$router.push('/recipes/add')
		},
	},
	async mounted() {
		await this.$store.dispatch('recipes/getAllRecipes', this.token)
	},
}
</script>

<style></style>
