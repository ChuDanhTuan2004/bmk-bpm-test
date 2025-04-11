import './App.css'
import { Routes, Route } from 'react-router-dom';
import LandingPage from './app/landingPage/page'
import LoginPage from './app/login/page'
import Dashboard from './app/dashboard/page'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App
