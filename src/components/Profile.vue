<template>
	<v-container class="d-flex justify-center mt-5" align-content="center">
		<v-row justify="center">
			<v-col v-if="!mobile"> </v-col>
			<v-col :cols="mobile ? '12' : '8'">
				<v-card outlined>
					<v-card-text>
						<v-row class="d-flex align-start">
							<v-col cols="2">
								<v-flex class="mt-4">
									<v-avatar size="96" class="mr-4 blue" dark>
										<span class="white--text text-h3">{{ avatar }}</span>
									</v-avatar>
								</v-flex>
							</v-col>
							<v-col>
								<v-text-field
									v-model="username"
									label="username"
									outlined
								></v-text-field>
								<v-text-field
									v-model="fullName"
									label="Full name"
									outlined
								></v-text-field>
								<v-text-field
									v-model="email"
									label="Email Address"
									outlined
								></v-text-field>
								<v-card-text>Birthday</v-card-text>
								<v-date-picker
									v-model="birthday"
									color="green lighten-1"
								></v-date-picker>
							</v-col>
						</v-row>
					</v-card-text>
					<v-card-actions class="d-flex justify-end">
						<v-btn
							class="mb-3 mr-3"
							color="primary"
							:loading="loading"
							@click.native="update"
						>
							<v-icon left dark>mdi-account-check</v-icon>
							Save Changes
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
			<v-col v-if="!mobile"></v-col>
		</v-row>
	</v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import { isMobile, isTablet } from 'mobile-device-detect'

export default {
	pageTitle: 'My Profile',
	components: {},
	data() {
		return {
			loading: false,
			avatar: '',
			birthday: new Date().toISOString().substring(0, 10),
			fullName: '',
			email: '',
			username: '',
			mobile: isMobile || isTablet,
		}
	},
	computed: {
		...mapGetters('user', {
			user: 'getUser',
		}),
	},
	mounted() {
		if (this.user.username) {
			this.username = this.user.username
			this.fullName = this.user.fullName
			this.email = this.user.email
			this.birthday = this.user.birthday
		}
	},
	watch: {
		fullName(p) {
			console.log(p)
			this.avatar = p
				.split(' ')
				.map((e) => e.toUpperCase().charAt(0))
				.join('')
		},
	},
	methods: {
		async update() {
			await this.$store.dispatch('user/update', {
				username: this.username,
				fullName: this.fullName,
				email: this.email,
				birthday: this.birthday,
			})
		},
	},
}
</script>
