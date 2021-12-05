<template>
	<v-container>
		<v-row class="mb-6" justify="center">
			<v-col v-if="!mobile">
				<v-btn color="green lighten-2" v-on:click="back" class="mt-5" dark>
					<v-icon dark left> mdi-arrow-left </v-icon>
					Atrás
				</v-btn>
			</v-col>
			<v-col :cols="mobile ? '12' : '8'" v-if="!loading">
				<CardRecipeDetail :item="item" :maxWidth="1000" />
			</v-col>
			<v-col></v-col>
		</v-row>
	</v-container>
</template>

<script>
import { mapGetters } from 'vuex'

import { isMobile, isTablet } from 'mobile-device-detect'

import CardRecipeDetail from './CardRecipeDetail'
export default {
	components: { CardRecipeDetail },
	data: () => ({
		loading: true,
		id: 9999,
		mobile: isMobile || isTablet,
		fromRoute: null
	}),
	computed: {
		...mapGetters('menus', {
			item: 'getSelected',
		}),
	},
	watch: {
		item(i) {
			if (this.item._id !== i._id) {
				console.log('a')
			}
		},
	},
	async mounted() {
		await this.$store.dispatch('menus/setDetail', this.$route.params.id)
		this.loading = false
	},
	beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.fromRoute = from;
    })
  },
	methods: {
		back() {
			if (!this.fromRoute.name) {
        this.$router.push('/');
      } else {
        this.$router.back();
      }
		},
		handleBack (fallback) {
      if (!this.fromRoute.name) {
        this.$router.push(fallback);
      } else {
        this.$router.back();
      }
    }
	},
}
</script>

<style></style>
