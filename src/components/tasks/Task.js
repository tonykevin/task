import React, { useContext } from 'react'
import { taskContext } from '../../context/tasks'
import { projectContext } from '../../context/projects'

const Task = ({ task }) => {
  const { deleteTask, getTasks, ChangeTaskState } = useContext(taskContext)
  const { project } = useContext(projectContext)

  const { id, name, state } = task

  const handleDelete = taskId => {
    deleteTask(taskId)
    getTasks(project.id)
  }

  const changeState = task => {
    if (task.state) {
      task.state = false
    } else {
      task.state = true
    }

    ChangeTaskState(task)
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
                onClick={() => changeState(task)}
              >
                completo
              </button>
            )
            : (
              <button
                className='incomplete'
                onClick={() => changeState(task)}
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
