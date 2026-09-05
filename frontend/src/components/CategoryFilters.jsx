import { Link } from 'react-router-dom'
import { categories } from '../utils/constants'

const categoryIcons = {
  All: 'fa-border-all',
  Cities: 'fa-city',
  Mountains: 'fa-mountain',
  Beaches: 'fa-umbrella-beach',
  Pools: 'fa-person-swimming',
  Farms: 'fa-tractor',
  Resorts: 'fa-hotel',
  Forests: 'fa-tree',
  Heritage: 'fa-archway',
  Arctic: 'fa-snowflake',
  Premium: 'fa-crown',
}

export default function CategoryFilters({ selected }) {
  return (
    <div className="filters">
      {categories.map((category) => (
        <Link
          className={selected === category ? 'filter active' : 'filter'}
          to={
            category === 'All' ? '/listings' : `/listings?category=${category}`
          }
          key={category}
        >
          <span className="category-symbol">
            <i className={`fa-solid ${categoryIcons[category]} filter-icon`} />
          </span>
          <span>{category}</span>
        </Link>
      ))}
    </div>
  )
}
