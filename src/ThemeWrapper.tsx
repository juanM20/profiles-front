import { useMemo } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { useMediaQuery } from '@mui/material'

interface ThemeWrapperProps {
  children: React.ReactNode
}

const ThemeWrapper = ({ children }: ThemeWrapperProps) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
          primary: {
            main: '#3282B8',
          },
          background: {
            default: prefersDarkMode ? '#1B262C' : '#EAF4FF',
            paper: prefersDarkMode ? '#1B262C' : '#EAF4FF',
          },
          text: {
            primary: prefersDarkMode ? '#BDE1FA' : '#0F4C75',
            secondary: prefersDarkMode ? '#EAF4FF' : '#1B262C',
          },
        },
        typography: {
          fontFamily: 'var(--sans)',
          h1: {
            fontFamily: 'var(--heading)',
            fontWeight: 500,
            color: prefersDarkMode ? '#EAF4FF' : '#1B262C',
          },
          h2: {
            fontFamily: 'var(--heading)',
            fontWeight: 500,
            color: prefersDarkMode ? '#EAF4FF' : '#1B262C',
          },
        },
      }),
    [prefersDarkMode],
  )

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default ThemeWrapper