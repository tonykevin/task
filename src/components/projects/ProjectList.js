import React from 'react'
import Project from './Project'

const ProjectList = () => {
  const projects = [
    { id: 1, name: 'tienda virtual' },
    { id: 2, name: 'intranet' },
    { id: 3, name: 'Diseño de sitio web' }
  ]

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
