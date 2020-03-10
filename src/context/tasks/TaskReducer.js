import {
  ADD_TASK,
  PROJECT_TASKS,
  VALIDATE_TASK
} from '../../types'

export default (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        taskError: false,
        tasks: [...state.tasks, action.payload]
      }
    case PROJECT_TASKS:
      return {
        ...state,
        projectTasks: state.tasks.filter(
          task => task.projectId === action.payload
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
