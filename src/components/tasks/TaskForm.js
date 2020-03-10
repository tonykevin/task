import React, { useContext, useState } from 'react'

import { projectContext } from '../../context/projects'
import { taskContext } from '../../context/tasks'

const TaskForm = () => {
  const { project } = useContext(projectContext)
  const { addTask, getTasks, taskError, validateTask } = useContext(taskContext)

  const [task, setTask] = useState({
    name: ''
  })

  const { name } = task

  if (!project) { return null }

  const defineData = ({ target }) => {
    console.log(target)
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

    // Add a task
    task.projectId = project.id
    task.state = false
    addTask(task)

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
            Agregar tarea
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
