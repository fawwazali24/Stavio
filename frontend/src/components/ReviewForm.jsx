import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Star } from 'lucide-react'
import { reviewService } from '../services/reviewService'
import { useAuth } from '../context/AuthContext'

export default function ReviewForm({ listingId, onSubmitted }) {
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate()
  const { user } = useAuth()
  const submit = async (event) => {
    event.preventDefault()
    if (!user)
      return navigate('/login', { state: { message: 'Please login first.' } })
    if (!rating || !comment.trim())
      return setMessage('Please choose a rating and add a comment.')
    try {
      await reviewService.create(listingId, { rating, comment })
      setMessage('Review submitted.')
      setComment('')
      onSubmitted?.()
    } catch (requestError) {
      if (
        requestError.message.includes('logged in') ||
        requestError.message.includes('authenticated')
      )
        navigate('/login', { state: { message: 'Please login first.' } })
      else setMessage(requestError.message)
    }
  }
  return (
    <form className="review-form" onSubmit={submit}>
      <h3>Leave a review</h3>
      <div className="stars-input">
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            type="button"
            key={value}
            onClick={() => setRating(value)}
            className={value <= rating ? 'selected' : ''}
          >
            <Star size={24} fill="currentColor" />
          </button>
        ))}
      </div>
      <textarea
        value={comment}
        onChange={(event) => setComment(event.target.value)}
        placeholder="What made your stay memorable?"
        required
      />
      <button className="button button-dark">Submit review</button>
      {message && <p className="success-text">{message}</p>}
    </form>
  )
}
