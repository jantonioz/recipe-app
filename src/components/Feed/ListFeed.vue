<template>
	<div class="d-flex flex-row flex-wrap justify-start mt-2">
		<div v-for="item in list" :key="item.id" v-bind:title="item.title" class="px-1" >
			<RecipeFeedItem :item="item" :more="true" :large="false" />
		</div>
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
