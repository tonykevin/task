import React, { useState, useContext } from 'react'
import { projectContext } from '../../context/projects'

const ProjectForm = () => {
  const { form } = useContext(projectContext)

  const [project, setProject] = useState({
    name: ''
  })

  const { name } = project

  const defineData = ({ target }) => {
    setProject({
      ...project,
      [target.name]: target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault()
  }

  return (
    <>
      <button
        type='button'
        className='btn btn-block btn-primary'
      >
        Nuevo proyecto
      </button>
      {
        form
          ? (
            <form
              className='form-new-project'
              onSubmit={onSubmit}
            >
              <input
                className='input-text'
                name='name'
                onChange={defineData}
                placeholder='Nombre del proyecto'
                type='text'
                value={name}
              />
              <button
                type='submit'
                className='btn btn-primary btn-block'
              >
                Agregar proyecto
              </button>
            </form>
          )
          : null
      }
    </>
  )
}

export default ProjectForm
