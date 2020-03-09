import React, { useContext } from 'react'
import { projectContext } from '../../context/projects'

const Project = ({ id, name }) => {
  const { currentProject } = useContext(projectContext)

  return (
    <li>
      <button
        type='button'
        className='btn btn-blank'
        onClick={() => currentProject(id)}
      >
        {name}
      </button>
    </li>
  )
}

export default Project
