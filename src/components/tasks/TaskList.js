import React, { useContext } from 'react'

import { projectContext } from '../../context/projects'
import Task from './Task'

const TaskList = () => {
  const { project, deleteProject } = useContext(projectContext)
  if (!project) { return <h2>Selecciona un proyecto</h2> }

  const tasks = []

  // Delete a project
  const onClickDelete = () => {
    deleteProject(project.id)
  }

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
        onClick={onClickDelete}
      >
        Eliminar proyecto &times;
      </button>
    </>
  )
}

export default TaskList
