// A layout with an image centered inside a container // below the image is a
list of the restaurant's menu items
<template>
	<v-container>
		<v-sheet :rounded="true" class="pa-2" color="primary darken-2">
			<v-img
				height="250"
				src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
				class="titleRest"
			>
				<p
					style="height:100%"
					class="d-flex justify-center align-center text-h1 titleRest"
				>
					{{ item.restaurantInfo ? item.restaurantInfo.name : 'Loading...' }}
				</p>
			</v-img>

			<Feed :items="item.menuItems" />
			<v-divider class="mt-2" dark></v-divider>
			<v-row class="mt-2 pa-3">
				<v-col class="d-flex flex-direction-row align-start">
					<v-icon>
						mdi-information-outline
					</v-icon>
					<p
						class="pa-2 rounded-p"
						prepend-icon="mdi-information-outline"
						placeholder="Información acerca de"
						:value="item.restaurantInfo.about"
						readonly
						no-resize
						outlined
					>
						{{ item.restaurantInfo.about }}
					</p>
				</v-col>
				<v-col>
					<v-text-field
						prepend-icon="mdi-map-marker"
						label="Dirección"
						:value="item.restaurantInfo.address"
						readonly
					></v-text-field>
					<v-text-field
						prepend-icon="mdi-phone"
						label="Teléfono"
						:value="item.restaurantInfo.phone"
						readonly
					></v-text-field>
					<v-text-field
						prepend-icon="mdi-alphabetical-variant"
						label="Nombre"
						:value="item.restaurantInfo.name"
						readonly
					></v-text-field>
					<v-text-field
						prepend-icon="mdi-at"
						label="Correo de contacto"
						:value="item.restaurantInfo.emailContact"
						readonly
					>
					</v-text-field>
				</v-col>
			</v-row>
		</v-sheet>
	</v-container>
</template>

<script>
import Feed from '../Feed/Feed'
import { mapGetters } from 'vuex'

// import { isMobile, isTablet } from 'mobile-device-detect'

export default {
	components: {
		Feed,
	},
	computed: {
		...mapGetters('restaurants', {
			item: 'getSelected',
		}),
	},
	watch: {
		item(i) {
			console.log('watch item', i)
		},
	},
	async mounted() {
		await this.$store.dispatch('restaurants/setDetail', this.$route.params.id)
		this.loading = false
	},
	methods: {
		back() {
			this.$router.push('/')
		},
	},
}
</script>

<style>
.titleRest {
	/* background: #00000088;
	background: linear-gradient(0deg, #00000088, #ffffff44, 100deg); */
	background: rgb(0, 0, 0);
	background: linear-gradient(
		90deg,
		rgba(0, 0, 0, 0.53) 0%,
		rgba(255, 255, 255, 0.19659201571253504) 100%
	);

	/* background: rgb(131, 58, 180);
	background: linear-gradient(
		90deg,
		rgba(131, 58, 180, 1) 0%,
		rgba(253, 29, 29, 1) 50%,
		rgba(252, 176, 69, 1) 100%
	); */
}
.rounded-p {
	border-radius: 2px !important;
	border: 1px solid #fff !important;
	height: 80%;
	width: 100%;
	padding-top: 10%;
	margin-left: 0.2em;
}
</style>
