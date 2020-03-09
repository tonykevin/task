import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Login, SignUp } from './components/auth'
import { Projects } from './components/projects'
import { ProjectState } from './context/projects'
import { TaskState } from './context/tasks'

function App () {
  return (
    <ProjectState>
      <TaskState>
        <Router>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/registrarse' component={SignUp} />
            <Route exact path='/proyectos' component={Projects} />
          </Switch>
        </Router>
      </TaskState>
    </ProjectState>
  )
}

export default App
