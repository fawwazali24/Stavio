import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  BedDouble,
  CircleUserRound,
  Clock3,
  Star,
  Tag,
} from 'lucide-react'
import ReviewCard from '../components/ReviewCard'
import ReviewForm from '../components/ReviewForm'
import { fallbackListings } from '../utils/mockData'
import { listingService } from '../services/listingService'
import { useAuth } from '../context/AuthContext'

export default function ListingDetailsPage() {
  const { id } = useParams()
  const [listing, setListing] = useState(null)
  const [usingFallback, setUsingFallback] = useState(false)
  const [bookingDates, setBookingDates] = useState({
    checkIn: '',
    checkOut: '',
  })
  const [bookingKey, setBookingKey] = useState('')
  const [bookingState, setBookingState] = useState({ status: 'idle', message: '' })
  const navigate = useNavigate()
  const { user, loading: authLoading } = useAuth()
  useEffect(() => {
    listingService
      .getById(id)
      .then((data) => {
        setListing(data.listing)
        setUsingFallback(false)
      })
      .catch(() => {
        setListing(
          fallbackListings.find((item) => item._id === id) ||
            fallbackListings[0],
        )
        setUsingFallback(true)
      })
  }, [id])
  if (!listing)
    return (
      <section className="detail-page">
        <p className="status">Loading listing...</p>
      </section>
    )
  const average = listing.reviews.length
    ? (
        listing.reviews.reduce((sum, review) => sum + review.rating, 0) /
        listing.reviews.length
      ).toFixed(1)
    : 'No ratings yet'
  const updateBookingDate = (event) => {
    const { name, value } = event.target
    setBookingDates((current) => ({ ...current, [name]: value }))
    setBookingKey('')
    setBookingState({ status: 'idle', message: '' })
  }
  const reserve = async () => {
    if (authLoading) return
    if (!user) {
      navigate('/login', {
        state: {
          message: 'Please login first.',
          from: `/listings/${listing._id}`,
        },
      })
      return
    }
    if (usingFallback) {
      setBookingState({
        status: 'error',
        message: 'Booking is unavailable while viewing demo data.',
      })
      return
    }
    if (!bookingDates.checkIn || !bookingDates.checkOut) {
      setBookingState({
        status: 'error',
        message: 'Choose both arrival and departure dates.',
      })
      return
    }
    if (bookingDates.checkOut <= bookingDates.checkIn) {
      setBookingState({
        status: 'error',
        message: 'Departure must be after arrival.',
      })
      return
    }
    const nextKey = bookingKey || crypto.randomUUID()
    setBookingKey(nextKey)
    setBookingState({ status: 'loading', message: '' })
    try {
      const response = await listingService.book(
        listing._id,
        bookingDates,
        nextKey,
      )
      setBookingState({
        status: 'success',
        message: response.replay
          ? 'Your booking was confirmed again.'
          : 'Your booking is confirmed.',
      })
    } catch (error) {
      setBookingState({
        status: 'error',
        message:
          error.status === 409
            ? 'Those dates are no longer available.'
            : error.message,
      })
    }
  }
  const ownerId = listing.owner?._id || listing.owner
  const isOwner = Boolean(
    user?._id && ownerId && String(ownerId) === String(user._id),
  )
  return (
    <section className="detail-page">
      <Link className="back-link" to="/listings">
        <ArrowLeft size={16} /> All stays
      </Link>
      {usingFallback && (
        <p className="status">Database unavailable. Showing demo stay.</p>
      )}
      <div className="detail-hero">
        <img src={listing.image.url} alt={listing.title} />
        <div className="detail-intro">
          <p className="eyebrow">
            {listing.category} · {listing.location}
          </p>
          <h1>{listing.title}</h1>
          <p className="detail-description">{listing.description}</p>
          <div className="host-row">
            <span className="avatar">
              {listing.owner.username[0].toUpperCase()}
            </span>
            <span>
              Hosted by <b>{listing.owner.username}</b>
            </span>
            <span className="rating">
              <Star size={15} fill="currentColor" /> {average}
            </span>
          </div>
          {isOwner && (
            <Link
              className="button button-dark"
              to={`/listings/${listing._id}/edit`}
            >
              Edit listing
            </Link>
          )}
        </div>
      </div>
      <div className="detail-columns">
        <div>
          <div className="usp-list">
            {[listing.usp1, listing.usp2, listing.usp3]
              .filter(Boolean)
              .map((usp) => (
                <span key={usp}>
                  <Tag size={17} />
                  {usp}
                </span>
              ))}
          </div>
          <div className="review-section">
            <div className="section-title">
              <h2>Guest reviews</h2>
              <span>
                <Star size={15} fill="currentColor" /> {average} ·{' '}
                {listing.reviews.length} reviews
              </span>
            </div>
            {listing.reviews.map((review, index) => (
              <ReviewCard review={review} key={index} />
            ))}
            <ReviewForm listingId={listing._id} />
          </div>
        </div>
        <form
          className="booking-panel"
          onSubmit={(event) => {
            event.preventDefault()
            reserve()
          }}
        >
          <div className="price-line">
            <strong>₹{Number(listing.price).toLocaleString('en-IN')}</strong>
            <span>/ night</span>
          </div>
          <div className="facts">
            <span>
              <BedDouble size={18} />
              {listing.bedrooms} bedrooms
            </span>
            <span>
              <CircleUserRound size={18} />
              {listing.guests} guests
            </span>
            <span>
              <Clock3 size={18} />
              {listing.checkin} check-in
            </span>
            <span>
              <Clock3 size={18} />
              {listing.checkout} check-out
            </span>
          </div>
          <div className="booking-fields">
            <label className="field">
              Arrival
              <input
                name="checkIn"
                type="date"
                value={bookingDates.checkIn}
                onChange={updateBookingDate}
              />
            </label>
            <label className="field">
              Departure
              <input
                name="checkOut"
                type="date"
                value={bookingDates.checkOut}
                min={bookingDates.checkIn || undefined}
                onChange={updateBookingDate}
              />
            </label>
          </div>
          <button
            type="submit"
            className="button button-coral"
            disabled={authLoading || bookingState.status === 'loading'}
          >
            {bookingState.status === 'loading'
              ? 'Reserving...'
              : bookingState.status === 'success'
                ? 'Reservation confirmed'
                : 'Reserve'}
          </button>
          {bookingState.message && (
            <p className={`booking-message ${bookingState.status}`}>
              {bookingState.message}
            </p>
          )}
          <p className="quiet-note">You won't be charged yet</p>
        </form>
      </div>
    </section>
  )
}
