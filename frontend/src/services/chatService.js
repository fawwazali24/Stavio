import { api } from './api'

export const chatService = {
  send: (message, conversationId) =>
    api.post('/api/chat', { message, conversationId }),
  history: (conversationId) => api.get(`/api/chat/history/${conversationId}`),
}
