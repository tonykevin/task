import React, { useContext, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { authContext } from '../../context/auth'

const RoutePrivate = ({ component: Component, ...props }) => {
  const { authenticated, isLoading, authenticateUser } = useContext(authContext)

  useEffect(() => {
    authenticateUser()
    // eslint-disable-next-line
  }, [])

  return (
    <Route
      {...props}
      render={
        props => !authenticated && !isLoading
          ? <Redirect to='/' />
          : <Component {...props} />
      }
    />
  )
}

export default RoutePrivate
