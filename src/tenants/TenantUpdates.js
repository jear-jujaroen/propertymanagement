import React from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

const style = {
  height: 450,
  width: 530,
  // margin: 20,
  // textAlign: 'center',
  display: 'inline-block',
};

const TenantUpdates = () => (
  <div className="TenantHome">
    <Paper
      style={style}
      zDepth={2}
    >
      <AppBar
        title="Tenant"
        showMenuIconButton={false}
      />
    </Paper>
  </div>
);

export default TenantUpdates;
