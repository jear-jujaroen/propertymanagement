import React from 'react'
import ApartmentTable from './ApartmentListContainer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const Apartment = () => (
  <MuiThemeProvider>
    <ApartmentTable />
  </MuiThemeProvider>
)

export default Apartment
