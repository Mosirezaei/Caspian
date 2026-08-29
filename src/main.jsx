import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'
import '@/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. اپلیکیشن را داخل این تگ بپیچید */}
      <App />
  </React.StrictMode>
)