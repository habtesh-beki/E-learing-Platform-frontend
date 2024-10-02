import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Header from './ui/Header'
import App from './App.jsx'
import './index.css'
// import Header from './ui/Header'
// import Nav from './ui/Nav'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Nav /> */}
    {/* <Header /> */}
  </StrictMode>,
)
