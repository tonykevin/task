import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Login, SignUp } from './components/auth'
import { Projects } from './components/projects'

function App () {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/registrarse' component={SignUp} />
        <Route exact path='/proyectos' component={Projects} />
      </Switch>
    </Router>
  )
}

export default App
