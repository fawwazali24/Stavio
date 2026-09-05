import { useState } from 'react'
import { categories } from '../utils/constants'

const fields = [
  'title',
  'description',
  'category',
  'price',
  'country',
  'location',
  'usp1',
  'usp2',
  'usp3',
  'guests',
  'bedrooms',
  'beds',
  'bathroom',
  'checkin',
  'checkout',
]

export default function ListingForm({
  initialValues = {},
  edit = false,
  onSubmit,
}) {
  const [form, setForm] = useState(
    Object.fromEntries(
      fields.map((field) => [field, initialValues[field] || '']),
    ),
  )
  const update = (event) =>
    setForm({ ...form, [event.target.name]: event.target.value })
  return (
    <form
      className="listing-form"
      onSubmit={(event) => {
        event.preventDefault()
        onSubmit?.(form)
      }}
    >
      <label className="field">
        Title
        <input name="title" value={form.title} onChange={update} required />
      </label>
      <label className="field">
        Description
        <textarea
          name="description"
          value={form.description}
          onChange={update}
          required
        />
      </label>
      <div className="form-grid">
        <label className="field">
          Category
          <select
            name="category"
            value={form.category}
            onChange={update}
            required
          >
            <option value="">Choose a category</option>
            {categories
              .slice(1)
              .concat('Others')
              .map((category) => (
                <option key={category}>{category}</option>
              ))}
          </select>
        </label>
        <label className="field">
          Price per night
          <input
            name="price"
            type="number"
            value={form.price}
            onChange={update}
            required
          />
        </label>
      </div>
      <div className="form-grid">
        <label className="field">
          Country
          <input
            name="country"
            value={form.country}
            onChange={update}
            required
          />
        </label>
        <label className="field">
          Location
          <input
            name="location"
            value={form.location}
            onChange={update}
            required
          />
        </label>
      </div>
      <div className="form-grid three">
        {['usp1', 'usp2', 'usp3'].map((field, index) => (
          <label className="field" key={field}>
            USP {index + 1}
            <input
              name={field}
              value={form[field]}
              onChange={update}
              required
            />
          </label>
        ))}
      </div>
      <div className="form-grid four">
        {['guests', 'bedrooms', 'beds', 'bathroom'].map((field) => (
          <label className="field" key={field}>
            {field}
            <input
              name={field}
              type="number"
              value={form[field]}
              onChange={update}
              required
            />
          </label>
        ))}
      </div>
      <div className="form-grid">
        <label className="field">
          Check-in
          <input
            name="checkin"
            type="time"
            value={form.checkin}
            onChange={update}
            required
          />
        </label>
        <label className="field">
          Check-out
          <input
            name="checkout"
            type="time"
            value={form.checkout}
            onChange={update}
            required
          />
        </label>
      </div>
      <label className="file-field">
        Listing image
        <input name="image" type="file" accept="image/*" />
      </label>
      <button className="button button-cyan">
        {edit ? 'Save changes' : 'Add listing'}
      </button>
    </form>
  )
}
