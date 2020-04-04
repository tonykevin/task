import React, { useReducer } from 'react'

import taskContext from './taskContext'
import TaskReducer from './TaskReducer'

import {
  CREATE_TASK,
  CURRENT_TASK,
  DELETE_TASK,
  DELETE_TASK_BY_PROJECT,
  INITIALIZE_TASK,
  GET_TASKS,
  TASK_STATE,
  UPDATE_TASK,
  VALIDATE_TASK
} from '../../types'
import axiosClient from '../../config/axios'

const TaskState = props => {
  const initialState = {
    currentTask: null,
    taskError: false,
    tasks: []
  }

  const [state, dispatch] = useReducer(TaskReducer, initialState)
  const { currentTask, tasks, taskError } = state

  // Create functions

  // Get project tasks
  const getTasks = async project => {
    try {
      const res = await axiosClient.get('/api/tasks', { params: { project } })

      dispatch({
        type: GET_TASKS,
        payload: res.data.tasks
      })
    } catch (err) {
      console.log(err)
    }
  }

  // Add a task to project
  const createTask = async task => {
    try {
      const res = await axiosClient.post('/api/tasks', task)

      dispatch({
        type: CREATE_TASK,
        payload: res.data.task

      })
    } catch (err) {
      console.log(err)
    }
  }

  // Validate a task
  const validateTask = () => {
    dispatch({
      type: VALIDATE_TASK
    })
  }

  // Delete a task
  const deleteTask = async taskId => {
    try {
      await axiosClient.delete(`/api/tasks/${taskId}`)

      dispatch({
        type: DELETE_TASK,
        payload: taskId
      })
    } catch (err) {
      console.log(err)
    }
  }

  // Delete tasks by project
  const deleteTaskByProject = projectId => {
    dispatch({
      type: DELETE_TASK_BY_PROJECT,
      payload: projectId
    })
  }

  // Change task state
  const ChangeTaskState = task => {
    dispatch({
      type: TASK_STATE,
      payload: task
    })
  }

  // Get current task
  const getCurrentTask = task => {
    dispatch({
      type: CURRENT_TASK,
      payload: task
    })
  }

  // Update a task
  const updateTask = task => {
    dispatch({
      type: UPDATE_TASK,
      payload: task
    })
  }

  // Initialize task
  const initializeTask = () => {
    dispatch({
      type: INITIALIZE_TASK
    })
  }

  return (
    <taskContext.Provider
      value={{
        currentTask,
        tasks,
        taskError,
         createTask,
        ChangeTaskState,
        deleteTask,
        deleteTaskByProject,
        getCurrentTask,
        getTasks,
        initializeTask,
        updateTask,
        validateTask
      }}
    >
      {props.children}
    </taskContext.Provider>
  )
}

export default TaskState
