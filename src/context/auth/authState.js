import React, { useReducer } from 'react'

import authContext from './authContext'
import authReducer from './authReducer'
import axiosClient from '../../config/axios'
import {
  GET_USER,
  LOGIN_ERROR,
  LOGIN_SUCCESSFUL,
  LOGOUT,
  SIGNUP_ERROR,
  SIGNUP_SUCCESSFUL
} from '../../types' 

const AuthState = props => {
  const initialState = {
    authenticated: null,
    message: null,
    token: localStorage.getItem('token'),
    user: null
  }

  const [state, dispatch] = useReducer(authReducer, initialState)
  const { authenticated, message, token, user } = state

  const signUp = async data => {
    try {
      const res = await axiosClient.post('/api/users', data)
      console.log(res)
      dispatch({
        type: SIGNUP_SUCCESSFUL
      })
    } catch (err) {
      console.log(err)
      dispatch({
        type: SIGNUP_ERROR
      })
    }
  }

  return (
    <authContext.Provider
      value={{
        authenticated,
        message,
        token,
        user,
        signUp
      }}
    >
      {props.children}
    </authContext.Provider>
  )
}

export default AuthState
