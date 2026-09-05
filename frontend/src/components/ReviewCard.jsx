import { Star } from 'lucide-react'

export default function ReviewCard({ review }) {
  return (
    <article className="review-card">
      <div className="review-top">
        <b>@{review.author?.username || 'guest'}</b>
        <span>
          {new Date(review.createdAt || '2025-01-01').toLocaleDateString(
            'en-US',
            { month: 'long', year: 'numeric' },
          )}
        </span>
      </div>
      <div className="review-stars">
        {[1, 2, 3, 4, 5].map((value) => (
          <Star
            key={value}
            size={14}
            fill={value <= review.rating ? 'currentColor' : 'none'}
          />
        ))}
      </div>
      <p>{review.comment}</p>
    </article>
  )
}
