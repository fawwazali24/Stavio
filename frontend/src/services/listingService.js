import { api } from './api'

export const listingService = {
  getAll: (category) =>
    api.get(
      `/api/listings${category ? `?category=${encodeURIComponent(category)}` : ''}`,
    ),
  search: (query) =>
    api.get(`/api/listings/search?q=${encodeURIComponent(query)}`),
  getById: (id) => api.get(`/api/listings/${id}`),
  create: (formData) =>
    api.request('/api/listings', {
      method: 'POST',
      body: formData,
      headers: {},
    }),
  update: (id, formData) =>
    api.request(`/api/listings/${id}`, {
      method: 'PUT',
      body: formData,
      headers: {},
    }),
  remove: (id) => api.request(`/api/listings/${id}`, { method: 'DELETE' }),
}
