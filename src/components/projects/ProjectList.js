import React, { useContext, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { projectContext } from '../../context/projects'
import Project from './Project'

const ProjectList = () => {
  // Extract projects from the initial state
  const { projects, getProjects } = useContext(projectContext)

  useEffect(() => {
    getProjects()
    // eslint-disable-next-line
  }, [])

  if (projects.length === 0) {
    return <p>No hay proyectos, comienza a crear uno</p>
  }

  return (
    <ul className='project-list'>
      <TransitionGroup>
        {projects.map(({ _id, name }) => (
          <CSSTransition
            key={_id}
            timeout={200}
            classNames='project'
          >
            <Project
              _id={_id}
              name={name}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  )
}

export default ProjectList
