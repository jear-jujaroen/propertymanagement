import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Home from './app/Home'
import Container from './app/App'
import Apartment from './apartments/Apartment'
import Tenant from './tenants/Tenant'

import '../css/main.css'

export default class App extends Component {
  render () {
    return (
      // Provider "provides" all the components here with data from the store.
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path='/' component={Container}>
            <IndexRoute component={Home} />
            <Route path='/apartment' component={Apartment} />
            <Route path='/tenant' component={Tenant} />
          </Route>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
)
