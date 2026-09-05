import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <section className="error-page">
      <span>404</span>
      <h1>This place is off the map.</h1>
      <p>Let's get you back to somewhere lovely.</p>
      <Link className="button button-cyan" to="/listings">
        Explore stays
      </Link>
    </section>
  )
}
