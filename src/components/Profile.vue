<template>
	<v-container class="d-flex justify-center mt-5" align-content="center">
		<v-row justify="center">
			<v-col> </v-col>
			<v-col cols="8">
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
									v-model="firstName"
									label="FirstName"
                  outlined
								></v-text-field>
								<v-text-field
									v-model="lastName"
									label="Last Name"
                  outlined
								></v-text-field>
								<v-text-field
									v-model="email"
									label="Email Address"
                  outlined
								></v-text-field>
                <v-card-text>Birthday</v-card-text>
								<v-date-picker
									v-model="picker"
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
			<v-col></v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	pageTitle: 'My Profile',
	components: {},
	data() {
		return {
			loading: false,
			firstName: 'John',
			lastName: 'Doe',
			email: 'john@doe.com',
      avatar: 'JD',
      picker: new Date().toISOString().substr(0, 10),
		}
	},
	watch: {
		firstName() {
			this.avatar =
				this.firstName.charAt(0).toUpperCase() +
				this.lastName.charAt(0).toUpperCase()
		},

		lastName() {
			this.avatar =
				this.firstName.charAt(0).toUpperCase() +
				this.lastName.charAt(0).toUpperCase()
		},
	},
	methods: {
		openAvatarPicker() {
			this.showAvatarPicker = true
		},
		selectAvatar(avatar) {
			this.form.avatar = avatar
		},
	},
}
</script>
