import React from 'react'
import ReactDOM from 'react-dom/client'
import CalculateGPA from './pages/CGPA/CalculateGPA.tsx'
import './assets/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CalculateGPA />
  </React.StrictMode>,
)