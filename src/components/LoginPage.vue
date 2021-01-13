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
						<v-spacer></v-spacer>
						<v-btn color="primary" @click="login">Iniciar sesión</v-btn>
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
		async login() {
			const result = await this.$store.dispatch('user/login', this.credentials)
			console.log('LoginPage', result)
			if (!result.name) {
				console.log('login', result)
				this.error = result
			} else {
				this.$router.push('/')
			}
		},
	},
}
</script>

<style></style>
