const API_BASE = import.meta.env.VITE_API_BASE || ''

async function request(path, options = {}) {
  const headers =
    options.body instanceof FormData
      ? options.headers
      : { 'Content-Type': 'application/json', ...options.headers }
  const response = await fetch(`${API_BASE}${path}`, {
    credentials: 'include',
    ...options,
    headers,
  })
  const contentType = response.headers.get('content-type') || ''
  if (!contentType.includes('application/json'))
    throw new Error(
      `Expected JSON from ${path}, received ${contentType || 'an unknown response'}`,
    )
  const data = await response.json()
  if (!response.ok) {
    const error = new Error(data.error || 'Request failed')
    error.status = response.status
    throw error
  }
  return data
}

export const api = {
  request,
  get: (path) => request(path),
  post: (path, body) =>
    request(path, { method: 'POST', body: JSON.stringify(body) }),
}
