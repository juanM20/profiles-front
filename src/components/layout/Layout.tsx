import { Box } from '@mui/material'
import { Outlet } from 'react-router'
import Header from './Header/Header'
import Footer from './Footer/Footer'

const Layout = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Box component="main" sx={{ flex: 1, px: 2, py: 3 }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  )
}

export default Layout
