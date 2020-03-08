import React, { useContext } from 'react'
import { projectContext } from '../../context/projects'
import Project from './Project'

const ProjectList = () => {
  // Extract projects from the initial state
  const { projects } = useContext(projectContext)

  if (projects.length === 0) return null

  return (
    <ul className='project-list'>
      {projects.map(({ id, name }) => (
        <Project
          key={id}
          name={name}
        />
      ))}
    </ul>
  )
}

export default ProjectList
