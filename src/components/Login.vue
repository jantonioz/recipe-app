<template>
	<v-container fluid fill-height>
		<v-layout align-center justify-center>
			<v-flex xs12 sm8 md4>
				<v-card class="elevation-12">
					<v-toolbar dark color="primary">
						<v-toolbar-title>Credenciales</v-toolbar-title>
					</v-toolbar>
					<v-card-text>
						<v-form>
							<v-text-field
								prepend-icon="person"
                v-model="username"
								label="Login"
								type="text"
							></v-text-field>
							<v-text-field
								prepend-icon="lock"
								v-model="password"
								label="Password"
								type="password"
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
    username: '',
    password: ''
  }),
  methods: {
    login() {

    }
  },
}
</script>

<style></style>
