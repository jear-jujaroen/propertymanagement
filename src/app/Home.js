import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ApartmentUpdates from '../apartments/ApartmentUpdates'
import TenantUpdates from '../tenants/TenantUpdates'

const Home = () => (
  <div className='Updates'>
    <MuiThemeProvider>
      <ApartmentUpdates />
    </MuiThemeProvider>
    <MuiThemeProvider>
      <TenantUpdates />
    </MuiThemeProvider>
  </div>
)

export default Home
