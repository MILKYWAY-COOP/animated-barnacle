import { useContext, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { useCurrentPath } from '../../Elements'
import { ColorContext, useData } from '../../Context'

import * as Styled from './Signin.styled'

const Register = () => {
  const { user, createUser, signInWithGoogle } = useData()

  const schema = yup.object().shape({
    Name: yup.string().required(),
    Email: yup.string().email().required(),
    Password: yup.string().required(),
    ConfirmPassword: yup
      .string()
      .oneOf([yup.ref('Password'), null], 'Passwords must match')
      .required(),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <Styled.StyledRegister>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Your Name" {...register('Name')} />
        <input type="email" placeholder="Your Email" {...register('Email')} />
        <input
          type="password"
          placeholder="Your Password"
          {...register('Password')}
        />
        <input
          type="password"
          placeholder="Confirm Your Password"
          {...register('ConfirmPassword')}
        />
        <button type="submit" >Register</button>
      </form>
    </Styled.StyledRegister>
  )
}

const Login = () => {
  const schema = yup.object().shape({
    Email: yup.string().email().required(),
    Password: yup.string().required(),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <Styled.StyledRegister>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" placeholder="Your Email" {...register('Email')} />
        <input
          type="password"
          placeholder="Your Password"
          {...register('Password')}
        />
        <button type="submit">Log In</button>
      </form>
    </Styled.StyledRegister>
  )
}

const SignIn = () => {
  const path = useCurrentPath()
  const theme = useContext(ColorContext)
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
          <button>{essentials.path} with Google</button>
        </div>
        {essentials.path === 'Register' ? (
          <span>
            Already have an account?<a onClick={handleLogin}>Log in</a>
          </span>
        ) : null}
        {essentials.path === 'Login' ? (
          <span>
            Don't have an account?<a onClick={handleRegister}>{` Register`}</a>
          </span>
        ) : null}
      </div>
    </Styled.StyledMain>
  )
}

export default SignIn
