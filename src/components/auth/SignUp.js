import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import { alertContext } from '../../context/alerts'

const SignUp = () => {
  const { alert, showAlert } = useContext(alertContext)

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

    if (
      name.trim() === '' ||
      email.trim() === '' ||
      password.trim() === '' ||
      confirm.trim() === ''
    ) {
      showAlert('Todos los campos son requeridos', 'alert-error')
      return 1
    }

    if (password.length < 6) {
      showAlert(
        'El password tiene que tener al menos 6 carácteres',
        'alert-error'
      )
      return 1
    }

    if (password !== confirm) {
      showAlert('las contraseñas no son iguales', 'alert-error')
      return 1
    }
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
