import {
  ADD_PROJECT,
  GET_PROJECTS,
  PROJECT_FORM,
  VALIDATE_FORM
} from '../../types'

export default (state, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
        form: false,
        formError: false
      }
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

    case VALIDATE_FORM:
      return {
        ...state,
        formError: true
      }

    default:
      return state
  }
}
