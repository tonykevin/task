import React, { useReducer } from 'react'

import taskContext from './taskContext'
import TaskReducer from './TaskReducer'

import {
  PROJECT_TASKS
} from '../../types'

const TaskState = props => {
  const initialState = {
    tasks: [
      { id: 0, name: 'Elegir colores', state: false, projectId: 2 },
      { id: 1, name: 'Elegir plataforma de pago', state: false, projectId: 3 },
      { id: 2, name: 'Elegir Hosting', state: true, projectId: 2 },
      { id: 3, name: 'Elegir plataforma de pago', state: true, projectId: 2 },
      { id: 4, name: 'Elegir colores', state: false, projectId: 3 },
      { id: 5, name: 'Elegir Hosting', state: true, projectId: 1 },
      { id: 6, name: 'Comprar dominio', state: false, projectId: 3 },
      { id: 7, name: 'Comprar dominio', state: true, projectId: 1 },
      { id: 8, name: 'Diseñar logo', state: true, projectId: 2 },
      { id: 9, name: 'Diseñar logo', state: false, projectId: 3 },
      { id: 10, name: 'Eligir gestor de DB', state: false, projectId: 3 }
    ],
    projectTasks: null
  }

  const [state, dispatch] = useReducer(TaskReducer, initialState)
  const { projectTasks, tasks } = state

  // Create functions

  // Get project tasks
  const getTasks = projectId => {
    dispatch({
      type: PROJECT_TASKS,
      payload: projectId
    })
  }

  return (
    <taskContext.Provider
      value={{
        projectTasks,
        tasks,
        getTasks
      }}
    >
      {props.children}
    </taskContext.Provider>
  )
}

export default TaskState
