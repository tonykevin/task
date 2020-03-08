import {
  GET_PROJECTS,
  PROJECT_FORM
} from '../../types'

export default (state, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload
      }

    case PROJECT_FORM:
      return {
        ...state,
        form: true
      }

    default:
      return state
  }
}
