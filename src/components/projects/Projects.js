import React, { useContext, useEffect } from 'react'
import { PageHeader, Sidebar } from '../layout'
import { TaskForm, TaskList } from '../tasks'
import { authContext } from '../../context/auth'

const Projects = () => {
  const { authenticateUser } = useContext(authContext)

  useEffect(() => {
    authenticateUser()
    // eslint-disable-next-line
  }, [])

  return (
    <div className='container-app'>
      <Sidebar />
      <div className='section-main'>
        <PageHeader />
        <main>
          <TaskForm />
          <div className='container-tasks'>
            <TaskList />
          </div>
        </main>
      </div>
    </div>
  )
}

export default Projects
