import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export default class LeftNavBar extends Component {

  constructor(props) {
    super(props);
    // this.state = {open: false};
  }

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <Drawer
        docked={false}
        open={this.props.open}
        onRequestChange={(open) => this.props.handleToggle({open})}
      >
        <MenuItem onTouchTap={this.handleClose}>Profile</MenuItem>
        <MenuItem onTouchTap={this.handleClose}>Apartments</MenuItem>
        <MenuItem onTouchTap={this.handleClose}>Tenants</MenuItem>
        <MenuItem onTouchTap={this.handleClose}>Settings</MenuItem>
      </Drawer>
    );
  }
}
