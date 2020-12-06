import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { alertContext } from '../../context/alerts'
import { authContext } from '../../context/auth'

const SignUp = (props) => {
  const { alert, showAlert } = useContext(alertContext)
  const { authenticated, message, signUp } = useContext(authContext)

  useEffect(() => {
    if (authenticated) {
      props.history.push('/proyectos')
    }

    if (message) {
      showAlert(message.msg, message.category)
    }
    // eslint-disable-next-line
  }, [authenticated, message, props.history])

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

    signUp({
      name,
      email,
      password
    })
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
        <h1 data-cy='signUpTitle'>Crear una cuenta</h1>
        <form
          data-cy='signUpForm'
          onSubmit={onSubmit}
        >
          <div className='form-field'>
            <label htmlFor='name'>Nombre</label>
            <input
              data-cy='nameInput'
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
              data-cy='emailInput'
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
              data-cy='passwordInput'
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
              data-cy='confirmInput'
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
              data-cy='submitSignUp'
              className='btn btn-primary btn-block'
              type='submit'
            >
              Registrarme
            </button>
          </div>
        </form>
        <Link data-cy='signInLink' to='/' className='link-account'>
          Volver a iniciar sesión
        </Link>
      </div>
    </div>
  )
}

export default SignUp
