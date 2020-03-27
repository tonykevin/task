import React, { useReducer } from 'react'

import authContext from './authContext'
import authReducer from './authReducer'
import axiosClient from '../../config/axios'
import authToken from '../../config/authToken'
import {
  GET_USER,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP_ERROR,
  SIGNUP_SUCCESS
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

  // Sign up an user
  const signUp = async data => {
    try {
      const res = await axiosClient.post('/api/users', data)

      dispatch({
        type: SIGNUP_SUCCESS,
        payload: res.data
      })

      authenticateUser()
    } catch (err) {
      const alert = {
        category: 'alert-error',
        msg: err.response.data.msg
      }

      dispatch({
        type: SIGNUP_ERROR,
        payload: alert
      })
    }
  }
  // Return authenticated user
  const authenticateUser = async () => {
    const token = localStorage.getItem('token')

    if (token) {
      authToken(token)
    }

    try {
      const res = await axiosClient.get('/api/auth')
      dispatch({
        type: GET_USER,
        payload: res.data.user
      })
    } catch (err) {
      console.log(err.response)
      dispatch({
        type: LOGIN_ERROR
      })
    }
  }
  // Login user
  const login = async data => {
    try {
      const res = await axiosClient.post('/api/auth', data)

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })

      authenticateUser()
    } catch (err) {
      const alert = {
        category: 'alert-error',
        msg: err.response.data.msg
      }

      dispatch({
        type: LOGIN_ERROR,
        payload: alert
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
        authenticateUser,
        login,
        signUp
      }}
    >
      {props.children}
    </authContext.Provider>
  )
}

export default AuthState
