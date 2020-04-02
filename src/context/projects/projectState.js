import React, { useReducer } from 'react'

import projectContext from './projectContext'
import projectReducer from './projectReducer'
import {
  ADD_PROJECT,
  CURRENT_PROJECT,
  DELETE_PROJECT,
  GET_PROJECTS,
  PROJECT_ERROR,
  PROJECT_FORM,
  VALIDATE_FORM
} from '../../types'
import axiosClient from '../../config/axios'

const ProjectState = props => {
  const initialState = {
    form: false,
    formError: false,
    message: null,
    projects: [],
    project: null
  }

  // Actions dispatch
  const [state, dispatch] = useReducer(projectReducer, initialState)
  const { form, formError, message, projects, project } = state

  // Functions for CRUD
  const showForm = () => {
    dispatch({
      type: PROJECT_FORM
    })
  }

  // Get projects
  const getProjects = async () => {
    try {
      const { data } = await axiosClient.get('/api/projects')

      dispatch({
        type: GET_PROJECTS,
        payload: data.projects
      })
    } catch (err) {
      const alert = {
        msg: 'Hubó un error',
        category: 'alert-error'
      }

      dispatch({
        type: PROJECT_ERROR,
        payload: alert
      })
    }
  }

  // Add new project
  const addProject = async (project) => {
    try {
      const res = await axiosClient.post('/api/projects', project)
      dispatch({
        type: ADD_PROJECT,
        payload: res.data
      })
    } catch (err) {
      const alert = {
        msg: 'Hubó un error',
        category: 'alert-error'
      }

      dispatch({
        type: PROJECT_ERROR,
        payload: alert
      })
    }
  }

  // validate form
  const showError = () => {
    dispatch({
      type: VALIDATE_FORM
    })
  }

  // Select a project
  const currentProject = projectId => {
    dispatch({
      type: CURRENT_PROJECT,
      payload: projectId
    })
  }

  // Delete a project
  const deleteProject = async projectId => {
    try {
      await axiosClient.delete(`/api/projects/${projectId}`)

      dispatch({
        type: DELETE_PROJECT,
        payload: projectId
      })
    } catch (err) {
      const alert = {
        msg: 'Hubó un error',
        category: 'alert-error'
      }

      dispatch({
        type: PROJECT_ERROR,
        payload: alert
      })
    }
  }

  return (
    <projectContext.Provider
      value={{
        form,
        formError,
        message,
        projects,
        project,
        addProject,
        currentProject,
        deleteProject,
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
