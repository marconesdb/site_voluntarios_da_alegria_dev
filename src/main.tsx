import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home.tsx'
import Nossa_Historia from './Nossa_Historia.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
    <Nossa_Historia/>
  </StrictMode>,
)
