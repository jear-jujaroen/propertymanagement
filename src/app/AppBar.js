import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
// import LeftNavBar from './LeftNavBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
export default class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <AppBar
          title="Property Management"
          onLeftIconButtonTouchTap={this.handleToggle}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <Drawer

          docked={false}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose}>Profile</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Apartments</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Tenants</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Settings</MenuItem>
        </Drawer>
      </div>
    )
  }
};

          // onLeftIconButtonTouchTap={this.handleToggle}
// <LeftNavBar
//   open={this.state.open}
//   onLeftIconButtonTouchTap={this.handleToggle}
// />
