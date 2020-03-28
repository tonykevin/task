import {
  GET_USER,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP_ERROR,
  SIGNUP_SUCCESS
} from '../../types'

export default (state, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        authenticated: true,
        user: action.payload
      }
    case LOGIN_ERROR:
    case LOGOUT:
    case SIGNUP_ERROR:
      localStorage.removeItem('token')
      return {
        ...state,
        authenticated: false,
        message: action.payload,
        token: null,
        user: null
      }

    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        authenticated: true,
        message: null
      }

    default:
      return state
  }
}
