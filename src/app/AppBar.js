import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import LeftNavBar from './LeftNavBar';

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
        <LeftNavBar
          open={this.state.open}
          handleToggle={this.handleToggle.bind(this)}
          handleClose={this.handleClose.bind(this)}
        />
      </div>
    )
  }
};
