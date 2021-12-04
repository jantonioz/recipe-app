<template>
	<v-container fluid fill-height>
		<v-layout align-center justify-center>
			<v-flex xs12 sm8 md4>
				<v-card class="elevation-12">
					<v-toolbar dark color="primary">
						<v-toolbar-title
							>Registro
							{{
								!credentials.isRestaurant ? '(Usuario)' : '(Restaurante)'
							}}</v-toolbar-title
						>
					</v-toolbar>
					<v-card-text>
						<v-alert dense outlined type="error" v-if="error">
							<strong>{{ error.code }} </strong> {{ error.message }}
						</v-alert>
						<v-form>
							<v-text-field
								prepend-icon="mdi-badge-account-horizontal-outline"
								v-model="credentials.fullName"
								label="Nombre completo"
								:rules="[rules.required]"
								autofocus
								placeholder="Nombres + apellidos"
							></v-text-field>
							<v-text-field
								prepend-icon="mdi-at"
								v-model="credentials.email"
								label="Correo"
								:rules="[rules.required]"
								autofocus
								placeholder="Correo electrónico"
								type="email"
							></v-text-field>
							<v-text-field
								prepend-icon="mdi-account"
								v-model="credentials.username"
								label="Username"
								:rules="[rules.required]"
								placeholder="Usuario para acceder"
							></v-text-field>
							<v-text-field
								prepend-icon="mdi-lock"
								v-model="credentials.password"
								label="Contraseña"
								:append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
								:type="show ? 'text' : 'password'"
								:rules="[rules.required]"
								@click:append="show = !show"
								placeholder="Contraseña"
								required
							></v-text-field>
							<v-switch
								v-model="credentials.isRestaurant"
								label="Registrar como
							Restaurante"
							/>
							<div v-if="credentials.isRestaurant">
								<v-textarea
									prepend-icon="mdi-information-outline"
									placeholder="Información acerca de"
									v-model="credentials.restaurantInfo.about"
								>
								</v-textarea>
								<v-text-field
									prepend-icon="mdi-map-marker"
									label="Dirección"
									v-model="credentials.restaurantInfo.address"
								></v-text-field>
								<v-text-field
									prepend-icon="mdi-phone"
									label="Teléfono"
									v-model="credentials.restaurantInfo.phone"
								></v-text-field>
								<v-text-field
									prepend-icon="mdi-alphabetical-variant"
									label="Nombre"
									v-model="credentials.restaurantInfo.name"
								></v-text-field>
								<v-text-field
									prepend-icon="mdi-at"
									label="Correo de contacto"
									v-model="credentials.restaurantInfo.emailContact"
								>
								</v-text-field>
							</div>
						</v-form>
					</v-card-text>
					<v-card-actions>
						<v-btn color="primary lighten-2" @click="goLogin"
							>Back to login</v-btn
						>
						<v-spacer></v-spacer>
						<v-btn color="primary" @click="register">Register</v-btn>
					</v-card-actions>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	data: () => ({
		rules: {
			required: (value) => !!value || 'Required.',
		},
		show: false,
		error: null,
		credentials: {
			fullName: '',
			email: '',
			username: '',
			password: '',
			isRestaurant: false,
			restaurantInfo: {
				about: '',
				address: '',
				name: '',
				phone: '',
				emailContact: '',
			},
		},
	}),
	computed: {
		...mapGetters('user', {
			user: 'getUser',
		}),
	},
	mounted() {
		if (this.user.name) {
			this.$router.push('/')
		}
	},
	methods: {
		async register() {
			try {
				this.validate()
				const result = await this.$store.dispatch(
					'user/register',
					this.credentials
				)
				console.log('RegisterPage', result)
				if (!result.user) {
					console.log('register', result)
					this.error = result
				} else {
					this.$router.push('/')
				}
			} catch (error) {
				return this.error
			}
		},
		validate() {
			const emptyField = Object.keys(this.credentials).find(
				(k) => this.credentials[k] === ''
			)
			if (emptyField) {
				this.error = {
					code: 'Wait!',
					message: 'Enter valid credentials@' + emptyField,
				}
				throw this.error
			}
		},
		goLogin: function() {
			this.$router.push('/login')
		},
	},
	watch: {
		credentials() {
			this.error = null
		},
	},
}
</script>

<style></style>
