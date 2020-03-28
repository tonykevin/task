import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Login, SignUp } from './components/auth'
import { Projects } from './components/projects'
import { ProjectState } from './context/projects'
import { TaskState } from './context/tasks'
import { AlertState } from './context/alerts'
import { AuthState } from './context/auth'
import authToken from './config/authToken'
import RoutePrivate from './components/routes/routePrivate'

const token = localStorage.getItem('token')

if (token) {
  authToken(token)
}

function App () {
  return (
    <ProjectState>
      <TaskState>
        <AlertState>
          <AuthState>
            <Router>
              <Switch>
                <Route exact path='/' component={Login} />
                <Route exact path='/registrarse' component={SignUp} />
                <RoutePrivate exact path='/proyectos' component={Projects} />
              </Switch>
            </Router>
          </AuthState>
        </AlertState>
      </TaskState>
    </ProjectState>
  )
}

export default App
