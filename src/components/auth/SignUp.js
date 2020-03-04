import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirm: ''
  })

  const { confirm, email, name, password } = user

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
        <h1>Crear una cuenta</h1>
        <form
          onSubmit={onSubmit}
        >
          <div className='form-field'>
            <label htmlFor='name'>Nombre</label>
            <input
              id='name'
              name='name'
              onChange={defineData}
              placeholder='Ingresa tu nombre'
              type='text'
              value={name}
            />
          </div>

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
            <label htmlFor='confirm'>Confirmar contraseña</label>
            <input
              id='confirm'
              name='confirm'
              onChange={defineData}
              placeholder='Repite tu contraseña'
              type='password'
              value={confirm}
            />
          </div>
          <div className='form-field'>
            <button
              className='btn btn-primary btn-block'
              type='submit'
            >
              Registrarme
            </button>
          </div>
        </form>
        <Link to='/' className='link-account'>
          Volver a iniciar sesión
        </Link>
      </div>
    </div>
  )
}

export default SignUp
