import React, {Component} from 'react';
import ApartmentUpdates from '../apartments/ApartmentUpdates';
import TenantUpdates from '../tenants/TenantUpdates';

const Home = () => (
  <div className="Updates">
    <ApartmentUpdates />
    <TenantUpdates />
  </div>
);

export default Home;
