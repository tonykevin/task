import React from 'react'
import { ProjectList, NewProject } from '../projects'

const Sidebar = () => {
  return (
    <aside>
      <h1>MERN <span>Tareas</span></h1>
      <NewProject />
      <div className='projects'>
        <h2>Tus proyectos</h2>
        <ProjectList />
      </div>
    </aside>
  )
}

export default Sidebar
