import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
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
  }

  return (
    <div className='form-user'>
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
