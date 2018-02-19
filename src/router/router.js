import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../components/Home'
import Sound from './../components/sound'
import Animal from './../components/dog'

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/sound" component={Sound} />
    <Route path="/:animal" component={Animal} />
  </Switch>

)