<template>
	<v-container>
		<v-row class="mb-6" justify="center">
			<v-col>
				<v-btn color="green lighten-2" v-on:click="back" class="mt-5" dark
					><v-icon dark left> mdi-arrow-left </v-icon>Atrás</v-btn
				>
			</v-col>
			<v-col cols="8">
				<RecipeFeedItem title="asd" large="true" maxWidth="10000" />
			</v-col>
			<v-col></v-col>
		</v-row>
	</v-container>
</template>

<script>
import RecipeFeedItem from './RecipeFeedItem'
export default {
	components: {
		RecipeFeedItem,
	},
	methods: {
		back() {
			this.$router.back()
		},
	},
}
</script>

<style></style>
