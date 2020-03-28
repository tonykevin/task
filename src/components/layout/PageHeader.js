import React, { useContext, useEffect } from 'react'

import { authContext } from '../../context/auth'

const ProjectHeader = () => {
  const { user, authenticateUser, logout } = useContext(authContext)

  useEffect(() => {
    authenticateUser()
  }, [])

  return (
    <header className='app-header'>
      {
        user
          ? (
            <p className='username'>
              Hola <span>{user.name}</span>
            </p>
          )
          : null
      }
      <nav className='nav-main'>
        <button
          className='btn btn-blank close-session'
          onClick={() => logout()}
        >
          Cerrar sesión
        </button>
      </nav>
    </header>
  )
}

export default ProjectHeader
