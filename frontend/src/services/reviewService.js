import { api } from './api'

export const reviewService = {
  create: (listingId, review) =>
    api.post(`/listings/${listingId}/reviews`, { review }),
  remove: (listingId, reviewId) =>
    api.request(`/listings/${listingId}/reviews/${reviewId}`, {
      method: 'DELETE',
    }),
}
