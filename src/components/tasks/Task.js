import React from 'react'

const Task = ({ id, name, state }) => (
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
      <button className='btn btn-secondary' type='button'>Eliminar</button>
    </div>
  </li>
)

export default Task
