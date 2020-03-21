import React, { useReducer } from 'react'

import alertContext from './alertContext'
import alertReducer from './alertReducer'
import { HIDDEN_ALERT, SHOW_ALERT } from '../../types'

const AlertState = props => {
  const initialState = {
    alert: null
  }

  const [state, dispatch] = useReducer(alertReducer, initialState)
  const { alert } = state

  // Functions
  const showAlert = (msg, category) => {
    dispatch({
      type: SHOW_ALERT,
      payload: {
        msg,
        category
      }
    })

    setTimeout(() => {
      dispatch({
        type: HIDDEN_ALERT
      })
    }, 5000)
  }

  return (
    <alertContext.Provider
      value={{
        alert,
        showAlert
      }}
    >
      {props.children}
    </alertContext.Provider>
  )
}

export default AlertState
