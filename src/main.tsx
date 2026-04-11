import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import ThemeWrapper from './ThemeWrapper'
import './index.scss'
import App from './App'
import Login from './pages/Login/Login'
import Layout from './components/layout/Layout'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeWrapper>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<App />} />
            <Route path="/Login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeWrapper>
  </StrictMode>,
)
