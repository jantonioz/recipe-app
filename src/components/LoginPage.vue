<template>
	<v-container fluid fill-height>
		<v-layout align-center justify-center>
			<v-flex xs12 sm8 md4>
				<v-card class="elevation-12">
					<v-toolbar dark color="primary">
						<v-toolbar-title>Credentials</v-toolbar-title>
					</v-toolbar>
					<v-card-text>
						<v-alert dense outlined type="error" v-if="error">
							<strong>{{ error.code }} </strong> {{ error.message }}
						</v-alert>
						<v-form>
							<v-text-field
								prepend-icon="mdi-account"
								v-model="credentials.username"
								label="Login"
								:rules="[rules.required]"
							></v-text-field>
							<v-text-field
								prepend-icon="mdi-lock"
								v-model="credentials.password"
								label="Password"
								:append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
								:type="show ? 'text' : 'password'"
								:rules="[rules.required]"
								@click:append="show = !show"
								required
							></v-text-field>
						</v-form>
					</v-card-text>
					<v-card-actions>
						<v-btn
							class="ml-3 mb-3"
							color="white green--text"
							elevation="0"
							@click="register"
							>Register</v-btn
						>
						<v-spacer></v-spacer>
						<v-btn class="mr-3 mb-3" color="primary" @click="login"
							>Login</v-btn
						>
					</v-card-actions>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	data: () => ({
		rules: {
			required: (value) => !!value || 'Required.',
		},
		show: false,
		error: null,
		credentials: {
			username: '',
			password: '',
		},
	}),
	methods: {
		login: async function() {
			if (!this || !this.credentials) return
			try {
				const result = await this.$store.dispatch('user/login', {
					username: this.credentials.username,
					password: this.credentials.password,
				})
				console.log('LoginPage', result)
				if (result.name) {
					this.$router.push('/home')
				}
			} catch (error) {
				console.log('login', error)
				this.error = error || { code: 'Hey!', message: 'Invalid credentials' }
			}
		},
		register() {
			this.$router.push('/register')
		},
	},
}
</script>

<style></style>
