import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import { alertContext } from '../../context/alerts'
import { authContext } from '../../context/auth'

const Login = () => {
  const { alert, showAlert } = useContext(alertContext)
  const { message, login } = useContext(authContext)

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const { email, password } = user

  const defineData = ({ target }) => {
    setUser({
      ...user,
      [target.name]: target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault()

    if (email.trim() === '' || password.trim() === '') {
      showAlert('Todos los campos son requeridos', 'alert-error')
      return 1
    }

    login({ email, password })
  }

  return (
    <div className='form-user'>
      {
        alert
          ? (
            <div
              className={`alert ${alert.category}`}
            >
              {alert.msg}
            </div>
          )
          : null
      }
      <div className='container-form shadow--dark'>
        <h1>Iniciar sesión</h1>
        <form
          onSubmit={onSubmit}
        >
          <div className='form-field'>
            <label htmlFor='email'>Correo</label>
            <input
              id='email'
              name='email'
              onChange={defineData}
              placeholder='Ingresa tu correo electrónico'
              type='email'
              value={email}
            />
          </div>
          <div className='form-field'>
            <label htmlFor='password'>Contraseña</label>
            <input
              id='password'
              name='password'
              onChange={defineData}
              placeholder='Ingresa tu contraseña'
              type='password'
              value={password}
            />
          </div>
          <div className='form-field'>
            <button
              className='btn btn-primary btn-block'
              type='submit'
            >
              Iniciar sesión
            </button>
          </div>
        </form>
        <Link to='/registrarse' className='link-account'>
          registrarse
        </Link>
      </div>
    </div>
  )
}

export default Login
