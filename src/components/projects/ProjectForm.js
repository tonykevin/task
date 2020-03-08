import React, { useState, useContext } from 'react'
import { projectContext } from '../../context/projects'

const ProjectForm = () => {
  const { form, formError, showForm, addProject, showError } = useContext(projectContext)

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

    // validate project data
    if (name === '') {
      showError()
      return
    }

    addProject(project)

    setProject({
      name: ''
    })
  }

  // Show project form
  const onClick = () => showForm()

  return (
    <>
      <button
        type='button'
        className='btn btn-block btn-primary'
        onClick={onClick}
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
      {
        formError
          ? <p className='message error'>El nombre es obligatiorio.</p>
          : null
      }
    </>
  )
}

export default ProjectForm
