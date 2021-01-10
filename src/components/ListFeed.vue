<template>
	<v-list>
		<v-list-item
			v-for="item in list"
			:key="item.title"
			v-bind:title="item.title"
		>
			<RecipeFeedItem
				:id="item.id"
				:more="true"
			/>
		</v-list-item>
	</v-list>
</template>

<script>
import RecipeFeedItem from './RecipeFeedItem'

export default {
	name: 'VerticalList',
	props: {
		colIndex: Number,
	},
	data() {
		return {
			list: this.$store.state.recipes.slice(
				0 + this.colIndex * 4,
				4 + this.colIndex * 4
			),
		}
	},
	components: {
		RecipeFeedItem,
	},
}
</script>

<style></style>
