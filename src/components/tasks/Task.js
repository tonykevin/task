import React, { useContext } from 'react'
import { taskContext } from '../../context/tasks'
import { projectContext } from '../../context/projects'

const Task = ({ id, name, state }) => {
  const { deleteTask, getTasks } = useContext(taskContext)
  const { project } = useContext(projectContext)

  const handleDelete = taskId => {
    deleteTask(taskId)
    getTasks(project.id)
  }

  return (
    <li className='task shadow'>
      <p>{name}</p>
      <div className='state'>
        {
          state
            ? (
              <button
                className='complete'
                type='button'
              >
                completo
              </button>
            )
            : (
              <button
                className='incomplete'
                type='button'
              >
                incompleto
              </button>

            )
        }
      </div>
      <div className='actions'>
        <button className='btn btn-primary' type='button'>Editar</button>
        <button
          className='btn btn-secondary'
          type='button'
          onClick={() => handleDelete(id)}
        >
          Eliminar
        </button>
      </div>
    </li>
  )
}

export default Task
