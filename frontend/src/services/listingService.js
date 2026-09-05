import { api } from './api'

export const listingService = {
  getAll: (category) =>
    api.get(
      `/listings${category ? `?category=${encodeURIComponent(category)}` : ''}`,
    ),
  search: (query) => api.get(`/listings/search?q=${encodeURIComponent(query)}`),
  getById: (id) => api.get(`/listings/${id}`),
  create: (formData) =>
    api.request('/listings', { method: 'POST', body: formData, headers: {} }),
  update: (id, formData) =>
    api.request(`/listings/${id}`, {
      method: 'PUT',
      body: formData,
      headers: {},
    }),
  remove: (id) => api.request(`/listings/${id}`, { method: 'DELETE' }),
}
