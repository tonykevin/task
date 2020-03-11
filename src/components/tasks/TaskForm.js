import React, { useContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { projectContext } from '../../context/projects'
import { taskContext } from '../../context/tasks'

const TaskForm = () => {
  const { project } = useContext(projectContext)
  const {
    addTask,
    currentTask,
    getTasks,
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
      task.id = uuidv4()
      task.projectId = project.id
      task.state = false
      addTask(task)
    } else {
      // Update a task
      updateTask(task)
    }

    // Get and filter current project tasks
    getTasks(project.id)

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
