import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { authService } from '../services/authService'
import { useAuth } from '../context/AuthContext'

export default function AuthPage({ login = false }) {
  const navigate = useNavigate()
  const location = useLocation()
  const { refreshUser } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const submit = async (event) => {
    event.preventDefault()
    setError('')
    setLoading(true)
    const form = new FormData(event.currentTarget)
    const credentials = Object.fromEntries(form.entries())
    try {
      if (login) await authService.login(credentials)
      else await authService.signup(credentials)
      await refreshUser()
      navigate(location.state?.from || '/listings', {
        replace: true,
        state: {},
      })
    } catch (requestError) {
      setError(requestError.message)
    } finally {
      setLoading(false)
    }
  }
  return (
    <section className="auth-page">
      <div className="auth-art">
        <span>Stavio</span>
        <p>Make room for a different kind of getaway.</p>
      </div>
      <form className="auth-form" onSubmit={submit}>
        <p className="eyebrow">WELCOME {login ? 'BACK' : 'IN'}</p>
        <h1>{login ? 'Login on Stavio' : 'Sign up on Stavio'}</h1>
        <p>
          {login
            ? 'Pick up where your next stay begins.'
            : 'Join a community of people who travel with intention.'}
        </p>
        {location.state?.message && (
          <p className="flash-message error">{location.state.message}</p>
        )}
        <label className="field">
          Username
          <input name="username" required />
        </label>
        {!login && (
          <label className="field">
            Email
            <input name="email" type="email" required />
          </label>
        )}
        <label className="field">
          Password
          <input name="password" type="password" required />
        </label>
        {error && <p className="error-text">{error}</p>}
        <button className="button button-dark" disabled={loading}>
          {loading ? 'Please wait...' : login ? 'Login' : 'Sign up'}
        </button>
        <Link to={login ? '/signup' : '/login'} className="auth-switch">
          {login ? 'New to Stavio? Sign up' : 'Already have an account? Login'}
        </Link>
      </form>
    </section>
  )
}
