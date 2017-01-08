import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router';

const LeftNavBar = ({open, handleToggle, handleClose}) => (
  <Drawer
    docked={false}
    open={open}
    onRequestChange={() => handleToggle({open})}
  >
    <Link to='/'><MenuItem onTouchTap={() => handleClose({open})}>Home</MenuItem></Link>
    <Link to='/apartment'><MenuItem onTouchTap={() => handleClose({open})}>Apartments</MenuItem></Link>
    <Link to='/tenant'><MenuItem onTouchTap={() => handleClose({open})}>Tenants</MenuItem></Link>
    <MenuItem onTouchTap={() => handleClose({open})}>Settings</MenuItem>
  </Drawer>
);

LeftNavBar.propTypes = {
  open: React.PropTypes.bool.isRequired,
  handleToggle: React.PropTypes.func.isRequired,
  handleClose: React.PropTypes.func.isRequired
};

export default LeftNavBar
