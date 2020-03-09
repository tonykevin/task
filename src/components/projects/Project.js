import React, { useContext } from 'react'
import { projectContext } from '../../context/projects'
import { taskContext } from '../../context/tasks'

const Project = ({ id, name }) => {
  const { currentProject } = useContext(projectContext)
  const { getTasks } = useContext(taskContext)

  const selectProject = id => {
    currentProject(id)
    getTasks(id)
  }

  return (
    <li>
      <button
        type='button'
        className='btn btn-blank'
        onClick={() => selectProject(id)}
      >
        {name}
      </button>
    </li>
  )
}

export default Project
