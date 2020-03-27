import React, { useContext, useEffect } from 'react'

import { authContext } from '../../context/auth'

const ProjectHeader = () => {
  const { user, authenticateUser } = useContext(authContext)

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
        <a href='#!'>Cerrar sesión</a>
      </nav>
    </header>
  )
}

export default ProjectHeader
