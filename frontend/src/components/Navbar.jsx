import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CircleUserRound, Menu, Search } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [query, setQuery] = useState('')
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const submitSearch = (event) => {
    event.preventDefault()
    const trimmedQuery = query.trim()
    if (trimmedQuery)
      navigate(`/listings/search?q=${encodeURIComponent(trimmedQuery)}`)
  }

  const openNewListing = (event) => {
    event.preventDefault()
    setMenuOpen(false)
    navigate(
      user ? '/listings/new' : '/login',
      user
        ? undefined
        : { state: { message: 'Please login first.', from: '/listings/new' } },
    )
  }

  return (
    <header className="navbar">
      <Link to="/listings" className="brand">
        <span className="brand-icon">
          <i
            className="fa-solid fa-person-walking-luggage"
            aria-hidden="true"
          />
        </span>
        <span>Stavio</span>
      </Link>
      <form className="search-bar" onSubmit={submitSearch}>
        <Search size={17} />
        <input
          name="q"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search destinations"
        />
        <button aria-label="Search" type="submit">
          <Search size={17} />
        </button>
      </form>
      <div className="nav-actions">
        <a href="/listings/new" className="nav-link" onClick={openNewListing}>
          Add a listing
        </a>
        {user && <span className="username">{user.username}</span>}
        <span className="nav-divider" />
        <button
          className="user-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open user menu"
        >
          <Menu size={18} />
          <CircleUserRound size={22} />
        </button>
        {menuOpen && (
          <div className="menu-popover">
            {!user && (
              <>
                <Link to="/signup" onClick={() => setMenuOpen(false)}>
                  Signup
                </Link>
                <Link to="/login" onClick={() => setMenuOpen(false)}>
                  Login
                </Link>
              </>
            )}
            {user && (
              <button
                onClick={async () => {
                  await logout()
                  setMenuOpen(false)
                  navigate('/listings')
                }}
              >
                Logout
              </button>
            )}
          </div>
        )}
      </div>
    </header>
  )
}
