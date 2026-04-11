import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

const Header = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        borderBottom: 1,
        borderColor: 'divider',
        backgroundColor: 'transparent',
        py: 1,
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1 }}>
        <Box>
          <Typography
            component={RouterLink}
            to="/"
            variant="h6"
            sx={{
              textDecoration: 'none',
              color: 'text.primary',
              fontWeight: 700,
            }}
          >
            Profiles
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Button component={RouterLink} to="/" color="primary">
            Inicio
          </Button>
          <Button component={RouterLink} to="/Login" color="primary">
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
