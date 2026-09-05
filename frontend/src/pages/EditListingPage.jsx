import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ListingForm from '../components/ListingForm'
import { listingService } from '../services/listingService'
import { fallbackListings } from '../utils/mockData'

export default function EditListingPage() {
  const { id } = useParams()
  const listing =
    fallbackListings.find((item) => item._id === id) || fallbackListings[0]
  const [message, setMessage] = useState('')
  const submit = async (values) => {
    const data = new FormData()
    Object.entries(values).forEach(([key, value]) =>
      data.append(`listing[${key}]`, value),
    )
    try {
      await listingService.update(id, data)
      setMessage('Listing updated.')
    } catch {
      setMessage('Changes will connect when the backend API is ready.')
    }
  }
  return (
    <section className="form-page">
      <Link className="back-link" to={`/listings/${id}`}>
        Back to listing
      </Link>
      <p className="eyebrow">YOUR SPACE</p>
      <h1>Edit your listing</h1>
      <p className="form-lede">
        Keep the details of your stay current and clear.
      </p>
      <ListingForm initialValues={listing} edit onSubmit={submit} />
      {message && <p className="success-text">{message}</p>}
    </section>
  )
}
