import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import NavBar from './AppBar'

const Container = (props) => (
  <div>
    <MuiThemeProvider>
      <NavBar />
    </MuiThemeProvider>
    {props.children}
  </div>
)

Container.propTypes = {
  children: React.PropTypes.object.isRequired
}

export default Container
