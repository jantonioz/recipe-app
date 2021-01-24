<template>
	<v-row>
		<v-col
			v-for="image in images"
			:key="image"
			class="d-flex child-flex"
			cols="2"
		>
			<v-img
				:src="image.src"
				:lazy-src="image.src"
				aspect-ratio="1"
				:max-height="150"
				:max-width="150"
				contain
			>
				<template v-slot:placeholder>
					<v-row class="fill-height ma-0" align="center" justify="center">
						<v-progress-circular
							indeterminate
							color="grey lighten-5"
						></v-progress-circular>
					</v-row>
				</template>
				<!-- <v-overlay :absolute="true" :opacity=".5" :value="true"> -->
				<v-btn
					icon
					fab
					right
					dark
					small
					class="red darken-1"
					@click="deleteImage(image)"
				>
					<v-icon>mdi-close</v-icon>
				</v-btn>
				<!-- </v-overlay> -->
			</v-img>
		</v-col>
	</v-row>
</template>

<script>
export default {
	name: 'RecipeAddImagesPreview',
	props: {
		images: Array,
		onClick: Function,
	},
	methods: {
		deleteImage(e) {
			this.onClick(e)
		},
	},
}
</script>

<style></style>
