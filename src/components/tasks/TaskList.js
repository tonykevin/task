import React, { useContext } from 'react'

import { projectContext } from '../../context/projects'
import Task from './Task'

const TaskList = () => {
  const { project } = useContext(projectContext)
  if (!project) { return <h2>Selecciona un proyecto</h2> }

  const tasks = [
    { id: 1, name: 'Elegir plataforma', state: true },
    { id: 2, name: 'Elegir colores', state: false },
    { id: 3, name: 'Elegir plataforma de pago', state: false },
    { id: 4, name: 'Elegir Hosting', state: true }
  ]

  return (
    <>
      <h2>Proyecto: {project.name}</h2>
      <ul className='task-list'>
        {
          tasks.length === 0
            ? (
              <li className='task'><p>No hay tareas</p></li>
            )
            : (
              tasks.map(({ id, name, state }) => (
                <Task
                  id={id}
                  key={id}
                  name={name}
                  state={state}
                />
              ))
            )
        }
      </ul>
      <button
        className='btn btn-remove'
        type='button'
      >
        Eliminar proyecto &times;
      </button>
    </>
  )
}

export default TaskList
