import {
  GET_USER,
  LOGIN_ERROR,
  LOGIN_SUCCESSFUL,
  LOGOUT,
  SIGNUP_ERROR,
  SIGNUP_SUCCESS
} from '../../types'

export default (state, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload
      }
    case LOGIN_ERROR:
    case SIGNUP_ERROR:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        message: action.payload
      }

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
