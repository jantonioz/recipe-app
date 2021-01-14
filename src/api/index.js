import axios from 'axios'
import jwt from 'jsonwebtoken'
import store from '../store'

class API {
	constructor() {
		this.api = axios.create({ baseURL: 'http://localhost:3090/api' })
		this.user = null
		this.token = null
	}

	async login(username, password) {
		try {
			const { data } = await this.api.post('/login', { username, password })
			if (data.token) {
				this.user = this.updateToken(data.token)
			}
			return { user: this.user, token: data.token }
		} catch (error) {
			throw {
				code: error.response.data.code || 401,
				message: error.response.data.message || 'Invalid credentials',
			}
		}
	}

	async register({ fullName, email, username, password }) {
		try {
			const { data } = await this.api.post('/register', {
				fullName,
				email,
				username,
				password,
			})
			if (data.token) {
				this.updateToken(data.token)
			}
			return { user: this.user, token: data.token }
		} catch (error) {
			throw {
				code: error.response.data.code || 401,
				message: error.response.data.message || 'Invalid credentials',
			}
		}
	}

	async updateUser(user, token) {
		this.updateToken(token)
		try {
			const { data } = await this.api.put('/account/info', user)
			return data
		} catch (error) {
			throw {
				code: error.response.data.code || 401,
				message: error.response.data.message || 'Invalid credentials',
			}
		}
	}

	updateToken(token) {
		this.token = token || store.getters['user/getToken']
		this.api = axios.create({
			baseURL: 'http://localhost:3090/api',
			headers: { Authorization: `Bearer ${this.token}` },
		})
		return jwt.decode(this.token)
	}

	async getAllRecipes(token) {
		this.updateToken(token)
		const { data } = await this.api.get('/recipes')
		return data.recipes
	}

	async getOneRecipe(id, token) {
		this.updateToken(token)
		const { data } = await this.api.get(`/recipes/${id}`)
		return data.recipe
	}

	async makeRate(recipe, { rate, comment }, token) {
		this.updateToken(token)
		const { data } = await this.api.post(`/recipes/${recipe}/rate`, {
			rate,
			comment,
		})
		return data.rate
	}

	async addRecipe(recipe, token) {
		this.updateToken(token)
		try {
			const { data } = await this.api.post(`/recipes`, recipe)
			return data
		} catch (error) {
			throw {
				code: error.response.data.code || 401,
				message: error.response.data.message || 'Invalid credentials',
			}
		}
	}

	async editRecipe(recipe, token) {
		this.updateToken(token)
		try {
			const { data } = await this.api.put(`/recipes/${recipe.id}`, recipe)
			return data
		} catch (error) {
			throw {
				code: error.response.data.code || 401,
				message: error.response.data.message || 'Invalid credentials',
			}
		}
	}
}

export default new API()
