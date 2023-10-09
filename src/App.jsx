import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/index.jsx'
import './styles/styleGlobal.css'
import { ThemeProvider } from 'styled-components'
import { temaEscuro } from './styles/temaEscuro.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={temaEscuro}>
      <Home />

    </ThemeProvider>
  </React.StrictMode>,
)
