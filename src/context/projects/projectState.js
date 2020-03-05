import React, { useReducer } from 'react'

import projectContext from './projectContext'
import projectReducer from './projectReducer'

const ProjectState = props => {
  const initialState = {
    form: false
  }

  const [state, dispatch] = useReducer(projectReducer, initialState)

  return (
    <projectContext.Provider
      value={{
        form: state.form
      }}
    >
      {props.children}
    </projectContext.Provider>
  )
}

export default ProjectState
