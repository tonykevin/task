import React from 'react'
import { PageHeader, Sidebar } from '../layout'

const Projects = () => {
  return (
    <div className='container-app'>
      <Sidebar />
      <div className='section-main'>
        <PageHeader />
        <main>
          <div className='container-tasks'>
          </div>
        </main>
    </div>
    </div>
  )
}

export default Projects
