import {
  ADD_TASK,
  PROJECT_TASKS
} from '../../types'

export default (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      }
    case PROJECT_TASKS:
      return {
        ...state,
        projectTasks: state.tasks.filter(
          task => task.projectId === action.payload
        )
      }
    default:
      return state
  }
}
