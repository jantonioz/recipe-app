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
