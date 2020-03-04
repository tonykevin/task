import React from 'react'
import { PageHeader, Sidebar } from '../layout'
import { TaskForm } from '../tasks'

const Projects = () => {
  return (
    <div className='container-app'>
      <Sidebar />
      <div className='section-main'>
        <PageHeader />
        <main>
          <TaskForm />
          <div className='container-tasks'>
          </div>
        </main>
    </div>
    </div>
  )
}

export default Projects
