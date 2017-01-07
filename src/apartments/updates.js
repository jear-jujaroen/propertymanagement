import React from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const style = {
  height: 450,
  width: 1000
};

const ApartmentUpdates = () => (
    <Paper
    className="HomePaper"
    style={style}
    zDepth={2} />
);

export default ApartmentUpdates;
