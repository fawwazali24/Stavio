import { api } from './api'

export const authService = {
  me: () => api.get('/api/auth/me'),
  login: (credentials) => api.post('/login', credentials),
  signup: (credentials) => api.post('/signup', credentials),
  logout: () => api.request('/logout', { method: 'GET' }),
}
