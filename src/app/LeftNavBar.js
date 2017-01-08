import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const LeftNavBar = ({open, handleToggle, handleClose}) => (
  <Drawer
    docked={false}
    open={open}
    onRequestChange={() => handleToggle({open})}
  >
    <MenuItem onTouchTap={() => handleClose({open})}>Profile</MenuItem>
    <MenuItem onTouchTap={() => handleClose({open})}>Apartments</MenuItem>
    <MenuItem onTouchTap={() => handleClose({open})}>Tenants</MenuItem>
    <MenuItem onTouchTap={() => handleClose({open})}>Settings</MenuItem>
  </Drawer>
);

LeftNavBar.propTypes = {
  open: React.PropTypes.bool.isRequired,
  handleToggle: React.PropTypes.func.isRequired,
  handleClose: React.PropTypes.func.isRequired
};

export default LeftNavBar
