import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import ExpenseTracker from './ExpenseTracker.jsx'
import './ExpenseTracker.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ExpenseTracker />
  </StrictMode>,
)
