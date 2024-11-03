import React from 'react'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import Message from './hooks/message'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App />
  </StrictMode>,
)
