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
        © {new Date().getFullYear()} Profiles. All rights reserved.
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
        <Link href="#" underline="hover" color="inherit">
          Privacy Policy
        </Link>
        {' · '}
        <Link href="#" underline="hover" color="inherit">
          Contact
        </Link>
      </Typography>
    </Box>
  )
}

export default Footer
