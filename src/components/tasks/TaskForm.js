import React, { useContext } from 'react'

import { projectContext } from '../../context/projects'

const TaskForm = () => {
  const { project } = useContext(projectContext)
  if (!project) { return null }

  return (
    <div className='form'>
      <form>
        <div className='container-input'>
          <input
            className='input-text'
            name='name'
            placeholder='Nombre de tarea'
            type='text'
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
    </div>
  )
}

export default TaskForm
