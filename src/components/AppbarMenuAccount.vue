<template>
	<v-menu
		v-model="menu"
		:close-on-content-click="false"
		:nudge-width="200"
		offset-x
		class="mx-5"
	>
		<template v-slot:activator="{ on, attrs }">
			<v-btn
				color="primary"
				dark
				v-bind="attrs"
				v-on="on"
				class="ml-5 menu-user"
				depressed
			>
				{{ user.fullName.split(' ')[0] }}
			</v-btn>
		</template>

		<v-card>
			<v-list>
				<v-list-item>
					<v-list-item-avatar>
						<v-avatar size="96" class="blue justify-center" dark>
							<span class="white--text">{{
								user.fullName
									.split(' ')
									.map((e) => e.toUpperCase().charAt(0))
									.join('')
							}}</span>
						</v-avatar>
					</v-list-item-avatar>

					<v-list-item-content>
						<v-list-item-title>{{ user.fullName }}</v-list-item-title>
						<v-list-item-subtitle
							>{{ user.username }} • {{ user.email }}</v-list-item-subtitle
						>
					</v-list-item-content>
				</v-list-item>
			</v-list>

			<v-divider></v-divider>

			<v-list rounded>
				<v-list-item-group color="green lighten-3">
					<v-list-item @click.stop="goTo('/profile')">
						<v-list-item-icon>
							<v-icon>mdi-account</v-icon>
						</v-list-item-icon>
						<v-list-item-title> Profile </v-list-item-title>
					</v-list-item>

					<v-list-item @click.stop="goTo('/recipes/add')">
						<v-list-item-icon>
							<v-icon>mdi-plus</v-icon>
						</v-list-item-icon>
						<v-list-item-title> Add recipe </v-list-item-title>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-card>
	</v-menu>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	data: () => ({
		fav: true,
		menu: false,
		message: false,
		hints: true,
	}),
	computed: {
		...mapGetters('user', {
			user: 'getUser',
		}),
	},
	methods: {
		goTo(url) {
			if (url !== this.$route.path) this.$router.push(url)
		},
	},
}
</script>

<style>
.menu-user {
	width: 150px;
}
</style>
