import React, { useReducer } from 'react'

import authContext from './authContext'
import authReducer from './authReducer'
/* import {
 *   GET_USER,
 *   LOGIN_ERROR,
 *   LOGIN_SUCCESSFUL,
 *   LOGOUT,
 *   SIGNUP_ERROR,
 *   SIGNUP_SUCCESSFUL
 * } from '../../types' */

const AuthState = props => {
  const initialState = {
    authenticated: null,
    message: null,
    token: localStorage.getItem('token'),
    user: null
  }

  const [state, dispatch] = useReducer(authReducer, initialState)
  const { authenticated, message, token, user } = state

  return (
    <authContext.Provider
      value={{
        authenticated,
        message,
        token,
        user
      }}
    >
      {props.children}
    </authContext.Provider>
  )
}

export default AuthState
