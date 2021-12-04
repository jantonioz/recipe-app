import axios from 'axios'
import jwt from 'jsonwebtoken'
import store from '../store'

const baseURL = process.env.VUE_APP_API_BASE_URL

class API {
	constructor() {
		this.api = axios.create({ baseURL })
		this.user = null
		this.token = null
	}

	async upload(formData, onUploadProgress) {
		return this.api.post('/previews', formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			},
			onUploadProgress
		})
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

	async registerRestaurant(restaurant) {
		try {
			const { data } = await this.api.post('/register/restaurant', restaurant)
			return data
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
			baseURL,
			headers: { Authorization: `Bearer ${this.token}` },
		})
		return jwt.decode(this.token)
	}

	async getAllMenus(token) {
		this.updateToken(token)
		const { data } = await this.api.get('/menuitems')
		return data.menuitems
	}

	async getOneMenu(id, token) {
		this.updateToken(token)
		const { data } = await this.api.get(`/menuitems/${id}`)
		return data.recipe
	}

	async makeRate(recipe, { rate, comment }, token) {
		this.updateToken(token)
		const { data } = await this.api.post(`/menuitems/${recipe}/rate`, {
			rate,
			comment,
		})
		return data.rate
	}

	async addMenuItem(recipe, token) {
		this.updateToken(token)
		try {
			const { data } = await this.api.post(`/menuitems`, recipe)
			return data
		} catch (error) {
			throw {
				code: error.response.data.code || 401,
				message: error.response.data.message || 'Invalid credentials',
			}
		}
	}

	async editMenuItem(recipe, token) {
		this.updateToken(token)
		try {
			const { data } = await this.api.put(`/menuitems/${recipe.id}`, recipe)
			return data
		} catch (error) {
			throw {
				code: error.response.data.code || 401,
				message: error.response.data.message || 'Invalid credentials',
			}
		}
	}

	async deleteMenuItem(recipe, token) {
		this.updateToken(token)
		try {
			const { data } = await this.api.delete(`/menuitems/${recipe.id}`, recipe)
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
