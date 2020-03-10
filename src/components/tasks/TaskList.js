import React, { useContext } from 'react'

import { projectContext } from '../../context/projects'
import { taskContext } from '../../context/tasks'
import Task from './Task'

const TaskList = () => {
  const { project, deleteProject } = useContext(projectContext)
  const { getTasks, projectTasks, deleteTaskByProject } = useContext(taskContext)
  if (!project) { return <h2>Selecciona un proyecto</h2> }

  // Delete a project
  const handleDelete = () => {
    deleteProject(project.id)
    deleteTaskByProject(project.id)
    getTasks(project.id)
  }

  return (
    <>
      <h2>Proyecto: {project.name}</h2>
      <ul className='task-list'>
        {
          projectTasks.length === 0
            ? (
              <li className='task'><p>No hay tareas</p></li>
            )
            : (
              projectTasks.map(({ id, name, state }) => (
                <Task
                  key={id}
                  id={id}
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
        onClick={handleDelete}
      >
        Eliminar proyecto &times;
      </button>
    </>
  )
}

export default TaskList
