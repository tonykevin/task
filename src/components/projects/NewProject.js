import React from 'react'

const NewProject = () => {
  return (
    <>
      <button
        type='button'
        className='btn btn-block btn-primary'
      >
        Nuevo proyecto
      </button>
      <form
        className='form-new-project'
      >
        <input
          type='text'
          className='input-text'
          placeholder='Nombre del proyecto'
          name='name'
        />
        <button
          type='submit'
          className='btn btn-primary btn-block'
        >
          Agregar proyecto
        </button>
      </form>
    </>
  )
}

export default NewProject
