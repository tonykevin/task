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

export default (state, action) => {
  switch (action.type) {
    case CREATE_TASK:
      return {
        ...state,
        taskError: false,
        tasks: [action.payload, ...state.tasks]
      }
    case CURRENT_TASK:
      return {
        ...state,
        currentTask: action.payload
      }
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(
          task => task._id !== action.payload
        )
      }
    case DELETE_TASK_BY_PROJECT:
      return {
        ...state,
        tasks: state.tasks.filter(
          task => task.projectId !== action.payload
        )
      }

    case INITIALIZE_TASK:
      return {
        ...state,
        currentTask: null
      }

    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload
      }

    case TASK_STATE:
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(
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
