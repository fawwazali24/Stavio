import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ChatbotWidget from './components/ChatbotWidget'
import Layout from './components/Layout'
import SplashScreen from './components/SplashScreen'
import EditListingPage from './pages/EditListingPage'
import ErrorPage from './pages/ErrorPage'
import ListingDetailsPage from './pages/ListingDetailsPage'
import ListingsPage from './pages/ListingsPage'
import LoginPage from './pages/LoginPage'
import NewListingPage from './pages/NewListingPage'
import SearchResultsPage from './pages/SearchResultsPage'
import SignupPage from './pages/SignupPage'
import { AuthProvider } from './context/AuthContext'

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <SplashScreen />
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/listings" replace />} />
            <Route path="/listings" element={<ListingsPage />} />
            <Route path="/listings/search" element={<SearchResultsPage />} />
            <Route path="/listings/new" element={<NewListingPage />} />
            <Route path="/listings/:id/edit" element={<EditListingPage />} />
            <Route path="/listings/:id" element={<ListingDetailsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Layout>
        <ChatbotWidget />
      </AuthProvider>
    </BrowserRouter>
  )
}
