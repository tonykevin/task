import {
  HIDDEN_ALERT,
  SHOW_ALERT
} from '../../types'

export default (state, action) => {
  switch (action.type) {
    case HIDDEN_ALERT:
      return {
        alert: null
      }

    case SHOW_ALERT:
      return {
        alert: action.payload
      }

    default:
      return state
  }
}
