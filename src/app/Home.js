import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ApartmentUpdates from '../apartments/ApartmentUpdates';
import TenantUpdates from '../tenants/TenantUpdates';
import Apartment from '../apartments/Apartment';

const Home = () => (
  <div className="Updates">
    <MuiThemeProvider>
      <ApartmentUpdates />
    </MuiThemeProvider>
    <MuiThemeProvider>
      <TenantUpdates />
    </MuiThemeProvider>
    <Apartment />
  </div>
)

export default Home;
