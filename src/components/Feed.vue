<template>
	<v-container>
		<v-fab-transition>
			<v-btn color="green" dark fixed bottom right fab @click="top"
				><v-icon>
					mdi-chevron-up
				</v-icon>
			</v-btn>
		</v-fab-transition>
		<v-row justify="center">
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
	</v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import ListFeed from './ListFeed'

export default {
	name: 'Feed',
	components: {
		ListFeed,
	},
	computed: {
		...mapGetters('recipes', {
			feedLists: 'getFeeds',
		}),
		...mapGetters('user', {
			token: 'getToken'
		})
	},
	methods: {
		top() {
			window.scrollTo(0, 0)
		},
	},
	async mounted() {
		await this.$store.dispatch('recipes/getAllRecipes', this.token)
	},
}
</script>

<style></style>
