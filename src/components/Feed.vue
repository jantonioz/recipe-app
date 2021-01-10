<template>
	<v-container>
		<v-row justify="center">
			<v-col cols="4">
				<ListFeed :colIndex="0" />
			</v-col>
			<v-col cols="4">
				<ListFeed :colIndex="1" />
			</v-col>
			<v-col cols="4">
				<ListFeed :colIndex="2" />
			</v-col>
		</v-row>
		<v-fab-transition>
			<v-btn color="green" dark absolute bottom right fab
				><v-icon>
					mdi-up
				</v-icon>
			</v-btn>
		</v-fab-transition>
	</v-container>
</template>

<script>
import ListFeed from './ListFeed'

export default {
	name: 'Feed',
	components: {
		ListFeed,
	},
}
</script>

<style></style>
