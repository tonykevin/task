import React, { useContext, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { projectContext } from '../../context/projects'
import { alertContext } from '../../context/alerts'
import Project from './Project'

const ProjectList = () => {
  // Extract projects from the initial state
  const { message, projects, getProjects } = useContext(projectContext)

  const { alert, showAlert } = useContext(alertContext)

  useEffect(() => {
    if (message) {
      showAlert(message.msg, message.category)
    }

    getProjects()
    // eslint-disable-next-line
  }, [message])

  if (projects.length === 0) {
    return <p>No hay proyectos, comienza a crear uno</p>
  }

  return (
    <ul className='project-list'>
      {
        alert
          ? (
            <div className={`alert ${alert.category}`}>
              {alert.msg}
            </div>
          ) : null
      }
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
