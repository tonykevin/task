import React, { useReducer } from 'react'

import TaskContext from './TaskContext'
import TaskReducer from './TaskReducer'

const TaskState = props => {
  const initialState = {
    tasks: []
  }

  const [state, dispatch] = useReducer(TaskReducer, initialState)

  return (
    <TaskContext.Provider>
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskState
