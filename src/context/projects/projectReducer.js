import {
  ADD_PROJECT,
  CURRENT_PROJECT,
  DELETE_PROJECT,
  GET_PROJECTS,
  PROJECT_ERROR,
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

    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(
          project => project._id !== action.payload
        ),
        project: null
      }

    case CURRENT_PROJECT:
      return {
        ...state,
        project: state.projects.filter(
          project => project._id === action.payload
        )[0]
      }

    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload
      }

    case PROJECT_ERROR:
      return {
        ...state,
        message: action.payload
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
