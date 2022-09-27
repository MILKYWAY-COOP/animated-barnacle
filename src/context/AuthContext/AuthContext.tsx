import React, { createContext, useContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from 'firebase/auth'
import { auth } from '../Firebase'
import { IUserContext } from '../../Elements/types'

const AuthContext = createContext<IUserContext>({} as IUserContext)
export const useData = () => useContext(AuthContext)

interface Props {
  children: React.ReactNode
}

export const AuthContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const createUser = async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (error) {
      console.log(error)
    }
  }

  const signInWithGoogle = async (): Promise<void> => {
    const provider = new GoogleAuthProvider()
    try {
      await signInWithPopup(auth, provider)
    } catch (error) {
      console.log(error)
    }
  }

  const signIn = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      console.log(error)
    }
  }

  const logOut = async (): Promise<void> => {
    try {
      await signOut(auth)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user)
        setIsLoggedIn(true)
      } else {
        setUser({})
        setIsLoggedIn(false)
      }
    })

    return unsubscribe
  }, [])

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, logOut, signInWithGoogle, user, createUser }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
