
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrav } from '@fortawesome/free-brands-svg-icons'
import { useTheme } from '@mui/material/styles'
import Input from '@mui/material/TextField'
import { Button } from '@mui/material'
import {Link} from '@mui/material'
import './Login.scss'


const Login = () => {
  const theme = useTheme()

  return (
    <div>
      <div className='login-main-container'>
        <FontAwesomeIcon icon={faGrav} size="6x" color={theme.palette.primary.main} />
        <Input label='Email' variant='standard' />
        <Input label='Password' variant='standard' type='password' />
        <Link className='login-link' href='#' underline='hover' variant='body2'>Forgot password?</Link>
        <Button variant='contained' color='primary'>Sign in</Button>

      </div>
    </div>
  )
}

export default Login