import React from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const style = {
  height: 450,
  width: 540,
  // margin: 20,
  // textAlign: 'center',
  display: 'inline-block',
};

const ApartmentUpdates = () => (
  <div className="Updates">
    <Paper
    className="ApartmentHome"
    style={style}
    zDepth={2} />

    <Paper
    className="TenantHome"
    style={style}
    zDepth={2} />
  </div>
);

export default ApartmentUpdates;
