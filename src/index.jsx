import React from 'react'
import { createRoot } from 'react-dom/client'
import { MyCV } from './component'

const root = createRoot(document.querySelector('#here'))
root.render(
  <React.StrictMode>
    <MyCV />
  </React.StrictMode>
)

// reportWebVitals()
