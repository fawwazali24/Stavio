import { api } from './api'

export const reviewService = {
  create: (listingId, review) =>
    api.post(`/api/listings/${listingId}/reviews`, { review }),
  remove: (listingId, reviewId) =>
    api.request(`/api/listings/${listingId}/reviews/${reviewId}`, {
      method: 'DELETE',
    }),
}
