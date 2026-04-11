import { Box, Typography, Link } from '@mui/material'

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        mt: 4,
        textAlign: 'center',
        borderTop: 1,
        borderColor: 'divider',
        backgroundColor: 'background.paper',
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Profiles. Hecho con React.
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
        <Link href="#" underline="hover" color="inherit">
          Privacidad
        </Link>
        {' · '}
        <Link href="#" underline="hover" color="inherit">
          Contacto
        </Link>
      </Typography>
    </Box>
  )
}

export default Footer
