import React from 'react'
import TenantTable from './TenantList'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const Tenant = () => (
  <MuiThemeProvider>
    <TenantTable />
  </MuiThemeProvider>
)

export default Tenant
