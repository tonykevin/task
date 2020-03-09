import React, { useReducer } from 'react'

import TaskContext from './TaskContext'
import TaskReducer from './TaskReducer'

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

  return (
    <TaskContext.Provider
      value={{
        tasks
      }}
    >
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskState
