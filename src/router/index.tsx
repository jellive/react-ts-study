import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "../pages/App"

const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  </BrowserRouter>
)

export default Router
