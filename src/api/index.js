import axios from 'axios'
import jwt from 'jsonwebtoken'

class API {
	constructor() {
		this.api = axios.create({ baseURL: 'http://localhost:3090/api' })
		this.user = null
	}

	async login(username, password) {
		try {
			const { data } = await this.api.post('/login', { username, password })
			if (data.token) {
				this.updateToken(data.token)
			}
			return this.user
		} catch (error) {
			throw {
				code: error.response.data.code || 401,
				message: error.response.data.message || 'Invalid credentials',
			}
		}
	}

	async updateUser(user) {
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
		this.api = axios.create({
			baseURL: 'http://localhost:3090/api',
			headers: { Authorization: `Bearer ${token}` },
		})
		this.user = jwt.decode(token)
	}

	async getAllRecipes() {
		const { data } = await this.api.get('/recipes')
		return data.recipes
	}

	async getOneRecipe(id) {
		const { data } = await this.api.get(`/recipes/${id}`)
		return data.recipe
	}

	async makeRate(recipe, { rate, comment }) {
		const { data } = await this.api.post(`/recipes/${recipe}/rate`, {
			rate,
			comment,
		})
		return data.rate
	}

	async addRecipe(recipe) {
		const { data } = await this.api.post(`/recipes`, recipe)
		return data
	}
}

export default new API()
