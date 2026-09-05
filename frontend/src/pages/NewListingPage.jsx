import { useState } from 'react'
import { Link } from 'react-router-dom'
import ListingForm from '../components/ListingForm'
import { listingService } from '../services/listingService'

export default function NewListingPage() {
  const [message, setMessage] = useState('')
  const submit = async (values) => {
    const data = new FormData()
    Object.entries(values).forEach(([key, value]) =>
      data.append(`listing[${key}]`, value),
    )
    try {
      await listingService.create(data)
      setMessage('Listing submitted.')
    } catch {
      setMessage('Listing will connect when the backend API is ready.')
    }
  }
  return (
    <section className="form-page">
      <Link className="back-link" to="/listings">
        Back to all stays
      </Link>
      <p className="eyebrow">SHARE YOUR SPACE</p>
      <h1>Create a new listing</h1>
      <p className="form-lede">
        Give travelers a clear sense of the place and the feeling they can
        expect.
      </p>
      <ListingForm onSubmit={submit} />
      {message && <p className="success-text">{message}</p>}
    </section>
  )
}
