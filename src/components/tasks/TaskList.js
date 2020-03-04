import React from 'react'
import Task from './Task'

const TaskList = () => {
  const tasks = [
    { id: 1, name: 'Elegir plataforma', state: true },
    { id: 2, name: 'Elegir colores', state: false },
    { id: 3, name: 'Elegir plataforma de pago', state: false },
    { id: 4, name: 'Elegir Hosting', state: true }
  ]

  return (
    <>
      <h2>Proyecto: tienda virtual</h2>
      <ul className='task-list'>
        {
          tasks.length === 0
            ? (
              <li className='task'><p>No hay tareas</p></li>
            )
            : (
              tasks.map(({ id, name, state }) => (
                <Task
                  id={id}
                  key={id}
                  name={name}
                  state={state}
                />
              ))
            )
        }
      </ul>
      <button
        className='btn btn-remove'
        type='button'
      >
        Eliminar proyecto &times;
      </button>
    </>
  )
}

export default TaskList
