import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../pages/App'
import ReactIndex from '../pages/rxjs'

const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/react" component={ReactIndex} />
    </Switch>
  </BrowserRouter>
)

export default Router
