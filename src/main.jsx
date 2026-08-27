import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'
import { HelmetProvider } from 'react-helmet-async' // 1. این خط را اضافه کنید
import '@/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider> {/* 2. اپلیکیشن را داخل این تگ بپیچید */}
      <App />
    </HelmetProvider>
  </React.StrictMode>
)