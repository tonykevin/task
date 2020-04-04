import React, { useContext } from 'react'
import { taskContext } from '../../context/tasks'
import { projectContext } from '../../context/projects'

const Task = ({ task }) => {
  const { deleteTask, getCurrentTask, getTasks, ChangeTaskState } = useContext(taskContext)
  const { project } = useContext(projectContext)

  const { _id, name, state } = task

  const handleEdit = task => {
    getCurrentTask(task)
  }

  const handleDelete = taskId => {
    deleteTask(taskId)
    getTasks(project._id)
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
        <button
          className='btn btn-primary'
          onClick={() => handleEdit(task)}
          type='button'
        >
          Editar
        </button>
        <button
          className='btn btn-secondary'
          onClick={() => handleDelete(_id)}
          type='button'
        >
          Eliminar
        </button>
      </div>
    </li>
  )
}

export default Task
