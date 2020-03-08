import React, { useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'

import projectContext from './projectContext'
import projectReducer from './projectReducer'
import {
  ADD_PROJECT,
  GET_PROJECTS,
  PROJECT_FORM,
  VALIDATE_FORM
} from '../../types'

const ProjectState = props => {
  const projectsDB = [
    { id: 1, name: 'tienda virtual' },
    { id: 2, name: 'intranet' },
    { id: 3, name: 'Diseño de sitio web' }
  ]

  const initialState = {
    form: false,
    formError: false,
    projects: []
  }

  // Actions dispatch
  const [state, dispatch] = useReducer(projectReducer, initialState)
  const { form, formError, projects } = state

  // Functions for CRUD
  const showForm = () => {
    dispatch({
      type: PROJECT_FORM
    })
  }

  // Get projects
  const getProjects = () => {
    dispatch({
      type: GET_PROJECTS,
      payload: projectsDB
    })
  }

  // Add new project
  const addProject = (project) => {
    project.id = uuidv4()
    dispatch({
      type: ADD_PROJECT,
      payload: project
    })
  }

  // validate form
  const showError = () => {
    dispatch({
      type: VALIDATE_FORM
    })
  }

  return (
    <projectContext.Provider
      value={{
        form,
        formError,
        projects,
        addProject,
        getProjects,
        showError,
        showForm
      }}
    >
      {props.children}
    </projectContext.Provider>
  )
}

export default ProjectState
