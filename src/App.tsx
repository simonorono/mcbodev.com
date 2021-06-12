import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Index from './pages/Index'
import Projects from './pages/Projects'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </Router>
  )
}
