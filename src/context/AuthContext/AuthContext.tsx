import React, { createContext, useContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from 'firebase/auth'

import { IUserContext } from '../../Elements/types'
import { useNavigate } from 'react-router-dom'
import * as firebase from '../Firebase'

const AuthContext = createContext<IUserContext>({} as IUserContext)
export const useData = () => useContext(AuthContext)

interface Props {
  children: React.ReactNode
}

export const AuthContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [errorMSG, setErrorMSG] = useState('')
  const navigate = useNavigate()

  const createUser = async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(firebase.auth, email, password)
      setIsLoggedIn(true)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  const signInWithGoogle = async (): Promise<void> => {
    const provider = new GoogleAuthProvider()
    try {
      await signInWithPopup(firebase.auth, provider)
      setIsLoggedIn(true)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  const signIn = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(firebase.auth, email, password)
      setIsLoggedIn(true)
      navigate('/')
    } catch (error) {
      setErrorMSG('Invalid Email or Password')
    }
  }

  const logOut = async (): Promise<void> => {
    try {
      await signOut(firebase.auth)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebase.auth, user => {
      if (user) {
        setUser(user)
        //setIsLoggedIn(true)
      } else {
        setUser({})
        //setIsLoggedIn(false)
      }
    })

    return unsubscribe
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        logOut,
        signInWithGoogle,
        user,
        createUser,
        signIn,
        errorMSG,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
