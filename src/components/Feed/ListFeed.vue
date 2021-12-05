<template>
	<div class="d-flex flex-row flex-wrap justify-start">
		<v-col v-for="item in list" :key="item.id" v-bind:title="item.title" cols="2">
			<RecipeFeedItem :item="item" :more="true" :large="false" />
		</v-col>
	</div>
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
