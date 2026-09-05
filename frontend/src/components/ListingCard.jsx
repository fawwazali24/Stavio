import { Link } from 'react-router-dom'

export default function ListingCard({ listing }) {
  return (
    <Link className="listing-card" to={`/listings/${listing._id}`}>
      <div className="image-wrap">
        <img src={listing.image?.url} alt={listing.title} />
        <span className="card-category">{listing.category}</span>
      </div>
      <div className="card-copy">
        <div>
          <h3>{listing.title}</h3>
          <p>
            {listing.location}, {listing.country}
          </p>
        </div>
        <strong>
          ₹{Number(listing.price).toLocaleString('en-IN')}{' '}
          <small>/ night</small>
        </strong>
      </div>
    </Link>
  )
}
