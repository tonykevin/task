import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { authContext } from '../../context/auth'

const RoutePrivate = ({ component: Component, ...props }) => {
  const { authenticated } = useContext(authContext)

  return (
    <Route
      {...props}
      render={
        props => !authenticated
          ? <Redirect to='/' />
          : <Component {...props} />
      }
    />
  )
}

export default RoutePrivate
