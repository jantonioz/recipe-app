<template>
	<v-list>
		<v-list-item
			v-for="item in list"
			:key="item.title"
			v-bind:title="item.title"
		>
			<RecipeFeedItem
				:item="item"
				:more="true"
				:maxWidth="374"
				:large="false"
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
		list: Array,
	},
	components: {
		RecipeFeedItem,
	},
}
</script>

<style></style>
