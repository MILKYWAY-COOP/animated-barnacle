import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { useCurrentPath } from '../../Elements'
import { useColor, useData } from '../../Context'

import * as Styled from './Signin.styled'

const Register = () => {
  const { theme } = useColor()
  console.log(theme)
  const { createUser } = useData()
  const schema = yup.object().shape({
    Name: yup.string().required('*Required'),
    Email: yup.string().email().required('*Required'),
    Password: yup.string().required('*Required'),
    ConfirmPassword: yup
      .string()
      .oneOf([yup.ref('Password'), null], 'Passwords must match')
      .required('*Required'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const nameMSG = errors.Name?.message
  const emailMSG = errors.Email?.message
  const passwordMSG = errors.Password?.message
  const confirmPasswordMSG = errors.ConfirmPassword?.message

  const onSubmit = (data: any) => {
    createUser(data.Email, data.Password)
  }

  return (
    <Styled.StyledRegister theme={theme}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {nameMSG && <p>{`${nameMSG}`}</p>}
        <input type="text" placeholder="Your Name" {...register('Name')} />
        {emailMSG && <p>{`${emailMSG}`}</p>}
        <input type="email" placeholder="Your Email" {...register('Email')} />
        {passwordMSG && <p>{`${passwordMSG}`}</p>}
        <input
          type="password"
          placeholder="Your Password"
          {...register('Password')}
        />
        {confirmPasswordMSG && <p>{`${confirmPasswordMSG}`}</p>}
        <input
          type="password"
          placeholder="Confirm Your Password"
          {...register('ConfirmPassword')}
        />
        <button type="submit">Register</button>
      </form>
    </Styled.StyledRegister>
  )
}

const Login = () => {
  const { theme } = useColor()
  const { signIn, errorMSG } = useData()
  const schema = yup.object().shape({
    Email: yup.string().email().required('*Required'),
    Password: yup.string().required('*Required'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const emailMSG = errors.Email?.message
  const passwordMSG = errors.Password?.message

  const onSubmit = (data: any) => {
    signIn(data.Email, data.Password)
  }

  return (
    <Styled.StyledRegister theme={theme}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {errorMSG && <p>{`${errorMSG}`}</p>}
        <input type="email" placeholder="Your Email" {...register('Email')} />
        {emailMSG && <p>{`${emailMSG}`}</p>}
        <input
          type="password"
          placeholder="Your Password"
          {...register('Password')}
        />
        {passwordMSG && <p>{`${passwordMSG}`}</p>}
        <button type="submit">Log In</button>
      </form>
    </Styled.StyledRegister>
  )
}

const SignIn = () => {
  const { signInWithGoogle, isLoggedIn, user } = useData()
  const path = useCurrentPath()
  const { theme } = useColor()
  const navigate = useNavigate()

  const essentials = {
    path: path === '/register' ? 'Register' : 'Login',
  }

  function handleLogin() {
    navigate('/login')
  }

  function handleRegister() {
    navigate('/register')
  }

  function handleGoogleLogin() {
    signInWithGoogle()
    if (isLoggedIn) {
      navigate('/')
      console.log(user)
    }
  }

  return (
    <Styled.StyledMain theme={theme}>
      <div className="container">
        <div className="title">
          <h1>{`House TnC ${essentials.path}`}</h1>
        </div>
        <div className="p">
          <p>{`Hey enter your details to ${essentials.path}`}</p>
        </div>
        <div>
          {essentials.path === 'Register' ? <Register /> : null}
          {essentials.path === 'Login' ? <Login /> : null}
        </div>
        {essentials.path === 'Login' ? (
          <a className="forgot" href="/resetpassword">
            Forgot your password?
          </a>
        ) : null}
        <div className="button">
          <button onClick={handleGoogleLogin}>
            {essentials.path} with Google
          </button>
        </div>
        {essentials.path === 'Register' ? (
          <span>
            Already have an account?
            <button className="login" onClick={handleLogin}>
              Log in
            </button>
          </span>
        ) : null}
        {essentials.path === 'Login' ? (
          <span>
            Don't have an account?
            <button
              className="login"
              onClick={handleRegister}
            >{` Register`}</button>
          </span>
        ) : null}
      </div>
    </Styled.StyledMain>
  )
}

export default SignIn
