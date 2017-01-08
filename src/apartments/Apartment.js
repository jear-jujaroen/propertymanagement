import React from 'react';
import ApartmentTable from './ApartmentList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Apartment = () => (
  <MuiThemeProvider>
    <ApartmentTable />
  </MuiThemeProvider>
);

export default Apartment;
