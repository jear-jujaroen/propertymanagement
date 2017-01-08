import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ApartmentUpdates from '../apartments/ApartmentUpdates';
import TenantUpdates from '../tenants/TenantUpdates';
import Apartment from '../apartments/Apartment';
import Tenant from '../tenants/Tenant';

const Home = () => (
  <div className="Updates">
    <MuiThemeProvider>
      <ApartmentUpdates />
    </MuiThemeProvider>
    <MuiThemeProvider>
      <TenantUpdates />
    </MuiThemeProvider>
    <Apartment />
    <Tenant />
  </div>
)

export default Home;
