# Stavio

Stavio is a full-stack property listing platform where users can browse stays, search and filter listings, create their own listings, leave reviews, and receive help from an integrated chatbot assistant.

## Live Demo

**https://stavio-1.onrender.com**

## Tech Stack

- **Frontend:** React, Vite, React Router, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas with Mongoose
- **Authentication:** Passport.js Local Strategy 
- **Image Storage:** Cloudinary 
- **Extra Feature:** Integrated Chatbot Assistant

## Features

### Redis caching

The listings read endpoints use Redis when `REDIS_URL` is configured. Without it, the application continues to use MongoDB directly.

Set this environment variable locally or in the Render service environment:

```text
REDIS_URL=redis://localhost:6379
```

For a hosted Redis provider, use the provider's complete connection URL. Use `rediss://` when the provider requires TLS.

### Authentication

- User registration, login, and logout
- Password hashing through Passport Local Mongoose
- Session-based authentication
- Login prompts for protected actions

### Authorization

- Only authenticated users can create listings
- Only listing owners can edit or delete their listings
- Only authenticated users can submit reviews

### Listings

- Browse listings from MongoDB
- View detailed listing information
- Create and edit listings
- Upload listing images 
- Filter listings by category
- Search by keyword

### Reviews

- View listing reviews and ratings
- Submit star ratings and comments

### Chatbot Assistant

- Ask questions about available listings, locations, categories, amenities, and pricing
- Uses listing data to provide relevant responses
- Persists conversation history 

