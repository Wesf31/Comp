import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../components/Home'
import Sound from './../components/sound'

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/sound" component={Sound} />
  </Switch>

)