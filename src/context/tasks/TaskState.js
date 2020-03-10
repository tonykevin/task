import React, { useReducer } from 'react'

import taskContext from './taskContext'
import TaskReducer from './TaskReducer'

import {
  ADD_TASK,
  DELETE_TASK,
  DELETE_TASK_BY_PROJECT,
  PROJECT_TASKS,
  VALIDATE_TASK
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
    projectTasks: null,
    taskError: false
  }

  const [state, dispatch] = useReducer(TaskReducer, initialState)
  const { projectTasks, tasks, taskError } = state

  // Create functions

  // Get project tasks
  const getTasks = projectId => {
    dispatch({
      type: PROJECT_TASKS,
      payload: projectId
    })
  }

  // Add a task to project
  const addTask = task => {
    dispatch({
      type: ADD_TASK,
      payload: task
    })
  }

  // Validate a task
  const validateTask = () => {
    dispatch({
      type: VALIDATE_TASK
    })
  }

  // Delete a task
  const deleteTask = taskId => {
    dispatch({
      type: DELETE_TASK,
      payload: taskId
    })
  }

  // Delete tasks by project
  const deleteTaskByProject = projectId => {
    dispatch({
      type: DELETE_TASK_BY_PROJECT,
      payload: projectId
    })
  }

  return (
    <taskContext.Provider
      value={{
        projectTasks,
        tasks,
        taskError,
        addTask,
        deleteTask,
        deleteTaskByProject,
        getTasks,
        validateTask
      }}
    >
      {props.children}
    </taskContext.Provider>
  )
}

export default TaskState
