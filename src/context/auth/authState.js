import React, { useReducer } from 'react'

import authContext from './authContext'
import authReducer from './authReducer'
import axiosClient from '../../config/axios'
import authToken from '../../config/authToken'
import {
  GET_USER,
  LOGIN_ERROR,
  LOGIN_SUCCESSFUL,
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

      authenticatedUser()
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
  const authenticatedUser = async () => {
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
