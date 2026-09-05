import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import ListingCard from '../components/ListingCard'
import { listingService } from '../services/listingService'

export default function SearchResultsPage() {
  const [params] = useSearchParams()
  const query = params.get('q') || ''
  const [listings, setListings] = useState([])
  useEffect(() => {
    listingService
      .search(query)
      .then((data) => setListings(data.listings || []))
      .catch(() => setListings([]))
  }, [query])
  return (
    <section className="page-wrap">
      <div className="page-heading">
        <p className="eyebrow">SEARCH RESULTS</p>
        <h1>Stays matching “{query}”</h1>
        <p>A few places that might fit the shape of your trip.</p>
      </div>
      <Link className="back-link" to="/listings">
        Back to all stays
      </Link>
      <div className="listing-grid">
        {listings.map((listing) => (
          <ListingCard key={listing._id} listing={listing} />
        ))}
      </div>
      {!listings.length && <p className="empty-state">No listings found.</p>}
    </section>
  )
}
