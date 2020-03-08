import React, { useReducer } from 'react'

import projectContext from './projectContext'
import projectReducer from './projectReducer'
import { PROJECT_FORM } from '../../types'

const ProjectState = props => {
  const initialState = {
    form: false,
    projects: [
      { id: 1, name: 'tienda virtual' },
      { id: 2, name: 'intranet' },
      { id: 3, name: 'Diseño de sitio web' }
    ]
  }

  // Actions dispatch
  const [state, dispatch] = useReducer(projectReducer, initialState)
  const { form, projects } = state

  // Functions for CRUD
  const showForm = () => {
    dispatch({
      type: PROJECT_FORM
    })
  }

  return (
    <projectContext.Provider
      value={{
        form,
        projects,
        showForm
      }}
    >
      {props.children}
    </projectContext.Provider>
  )
}

export default ProjectState
