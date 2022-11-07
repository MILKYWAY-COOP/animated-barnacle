import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider, ColorProvider } from './Context'
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ColorProvider>
          <App />
        </ColorProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
