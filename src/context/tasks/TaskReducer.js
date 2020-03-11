import {
  ADD_TASK,
  DELETE_TASK,
  DELETE_TASK_BY_PROJECT,
  PROJECT_TASKS,
  TASK_STATE,
  VALIDATE_TASK
} from '../../types'

export default (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        taskError: false,
        tasks: [action.payload, ...state.tasks]
      }
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(
          task => task.id !== action.payload
        )
      }
    case DELETE_TASK_BY_PROJECT:
      return {
        ...state,
        tasks: state.tasks.filter(
          task => task.projectId !== action.payload
        )
      }
    case PROJECT_TASKS:
      return {
        ...state,
        projectTasks: state.tasks.filter(
          task => task.projectId === action.payload
        )
      }
    case TASK_STATE:
      return {
        ...state,
        tasks: state.projectTasks.map(
          task => task.id === action.payload.id
            ? action.payload
            : task
        )
      }
    case VALIDATE_TASK:
      return {
        ...state,
        taskError: true
      }
    default:
      return state
  }
}
