import React, { useContext, useEffect } from 'react'
import { projectContext } from '../../context/projects'
import Project from './Project'

const ProjectList = () => {
  // Extract projects from the initial state
  const { projects, getProjects } = useContext(projectContext)

  useEffect(() => {
    getProjects()
  }, [])

  if (projects.length === 0) {
    return <p>No hay proyectos, comienza a crear uno</p>
  }

  return (
    <ul className='project-list'>
      {projects.map(({ id, name }) => (
        <Project
          key={id}
          id={id}
          name={name}
        />
      ))}
    </ul>
  )
}

export default ProjectList
