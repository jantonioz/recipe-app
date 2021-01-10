<template>
	<v-list>
		<v-list-item
			v-for="item in list"
			:key="item.title"
			v-bind:title="item.title"
		>
			<RecipeFeedItem :id="item.id" :more="true" />
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
			list: [
				{
					id: 1,
					title: 'Recipe1',
					large: true,
					stars: 5 * Math.random(),
					count: 50 * Math.random() + 25,
				},
				{
					id: 2,
					title: 'Recipe2',
					stars: 5 * Math.random(),
					count: 50 * Math.random() + 25,
				},
				{
					id: 3,
					title: 'Recipe3',
					large: true,
					stars: 5 * Math.random(),
					count: 50 * Math.random() + 25,
				},
				{
					id: 4,
					title: 'Recipe4',
					large: true,
					stars: 5 * Math.random(),
					count: 50 * Math.random() + 25,
				},
				{
					id: 5,
					title: 'Recipe5',
					stars: 5 * Math.random(),
					count: 50 * Math.random() + 25,
				},
				{
					id: 6,
					title: 'Recipe6',
					stars: 5 * Math.random(),
					count: 50 * Math.random() + 25,
				},
				{
					id: 7,
					title: 'Recipe7',
					large: true,
					stars: 5 * Math.random(),
					count: 50 * Math.random() + 25,
				},
				{
					id: 8,
					title: 'Recipe8',
					stars: 5 * Math.random(),
					count: 50 * Math.random() + 25,
				},
				{
					id: 9,
					title: 'Recipe9',
					large: true,
					stars: 5 * Math.random(),
					count: 50 * Math.random() + 25,
				},
				{
					id: 10,
					title: 'Recipe10',
					large: true,
					stars: 5 * Math.random(),
					count: 50 * Math.random() + 25,
				},
				{
					id: 11,
					title: 'Recipe11',
					stars: 5 * Math.random(),
					count: 50 * Math.random() + 25,
				},
				{
					id: 12,
					title: 'Recipe12',
					stars: 5 * Math.random(),
					count: 50 * Math.random() + 25,
				},
			].slice(0 + this.colIndex * 4, 4 + this.colIndex * 4),
		}
	},
	components: {
		RecipeFeedItem,
	},
}
</script>

<style></style>
