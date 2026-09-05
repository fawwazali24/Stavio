import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import CategoryFilters from '../components/CategoryFilters'
import ListingCard from '../components/ListingCard'
import { listingService } from '../services/listingService'
import { fallbackListings } from '../utils/mockData'

export default function ListingsPage() {
  const [params] = useSearchParams()
  const [listings, setListings] = useState(fallbackListings)
  const [usingFallback, setUsingFallback] = useState(false)
  const category = params.get('category') || 'All'
  useEffect(() => {
    listingService
      .getAll(category === 'All' ? '' : category)
      .then((data) => {
        setListings(data.listings || [])
        setUsingFallback(false)
      })
      .catch(() => setUsingFallback(true))
  }, [category])
  const visible =
    category === 'All' || usingFallback
      ? listings
      : listings.filter((listing) => listing.category === category)
  return (
    <section className="page-wrap">
      <div className="page-heading">
        <p className="eyebrow">FIND YOUR NEXT STAY</p>
        <h1>Places with a little more feeling</h1>
        <p>
          From coastal quiet to mountain air, find a stay that changes the pace.
        </p>
      </div>
      <CategoryFilters selected={category} />
      {usingFallback && (
        <p className="status">Database unavailable. Showing demo stays.</p>
      )}
      <div className="listing-grid">
        {visible.map((listing) => (
          <ListingCard key={listing._id} listing={listing} />
        ))}
      </div>
      {!visible.length && <p className="empty-state">No listings found.</p>}
    </section>
  )
}
