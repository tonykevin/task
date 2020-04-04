import React, { useContext, useState, useEffect } from 'react'

import { projectContext } from '../../context/projects'
import { taskContext } from '../../context/tasks'

const TaskForm = () => {
  const { project } = useContext(projectContext)
  const {
    createTask,
    currentTask,
    initializeTask,
    taskError,
    updateTask,
    validateTask
  } = useContext(taskContext)

  useEffect(() => {
    if (currentTask) {
      setTask(currentTask)
    } else {
      setTask({
        name: ''
      })
    }
  }, [currentTask])

  const [task, setTask] = useState({
    name: ''
  })

  const { name } = task

  if (!project) { return null }

  const defineData = ({ target }) => {
    setTask({
      ...task,
      [target.name]: target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault()
    // Validate a task
    if (name.trim() === '') {
      validateTask()
      return
    }

    if (!currentTask) {
      // Add a task
      task._projectId = project._id
      createTask(task)
    } else {
      // Update a task
      updateTask(task)

      // Clean the form
      initializeTask()
    }

    // Reset form
    setTask({
      name: ''
    })
  }

  return (
    <div className='form'>
      <form
        onSubmit={onSubmit}
      >
        <div className='container-input'>
          <input
            className='input-text'
            name='name'
            onChange={defineData}
            placeholder='Nombre de tarea'
            type='text'
            value={name}
          />
        </div>

        <div className='container-input'>
          <button
            className='btn btn-primary btn-submit btn-block'
            type='submit'
          >
            {currentTask ? 'Editar tarea' : 'Agregar tarea'}
          </button>
        </div>
      </form>
      {
        taskError
          ? <p className='message error'>El nombre de la tarea es requerido</p>
          : null
      }
    </div>
  )
}

export default TaskForm
