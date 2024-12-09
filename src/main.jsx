import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Context from './stores/config.jsx'
import CartProvider from './stores/cartContext.jsx'

createRoot(document.getElementById('root')).render(
  <CartProvider>
    <Context>
        <StrictMode>
          <App />
        </StrictMode>
    </Context>
  </CartProvider>
)
