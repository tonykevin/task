import React, { useReducer } from 'react'

import taskContext from './taskContext'
import TaskReducer from './TaskReducer'

import {
  PROJECT_TASKS
} from '../../types'

const TaskState = props => {
  const initialState = {
    tasks: [
      { name: 'Elegir plataforma', state: true, projectId: 1 },
      { name: 'Elegir colores', state: false, projectId: 2 },
      { name: 'Elegir plataforma de pago', state: false, projectId: 3 },
      { name: 'Elegir Hosting', state: true, projectId: 2 },
      { name: 'Elegir plataforma de pago', state: true, projectId: 2 },
      { name: 'Elegir colores', state: false, projectId: 3 },
      { name: 'Elegir Hosting', state: true, projectId: 1 },
      { name: 'Comprar dominio', state: false, projectId: 3 },
      { name: 'Comprar dominio', state: true, projectId: 1 },
      { name: 'Diseñar logo', state: false, projectId: 1 },
      { name: 'Diseñar logo', state: true, projectId: 2 },
      { name: 'Diseñar logo', state: false, projectId: 3 },
      { name: 'Eligir gestor de DB', state: false, projectId: 3 }
    ]
  }

  const [state, dispatch] = useReducer(TaskReducer, initialState)
  const { tasks } = state

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
        tasks,
        getTasks
      }}
    >
      {props.children}
    </taskContext.Provider>
  )
}

export default TaskState
