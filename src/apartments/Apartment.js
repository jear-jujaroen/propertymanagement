import React, { Component } from 'react'
import ApartmentTable from './ApartmentListContainer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Tabs, Tab} from 'material-ui/Tabs'
// import muiTheme from 'material-ui/styles/muiTheme'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  }
}

const Apartment = () => (

  <MuiThemeProvider>
    <Tabs
      initialSelectedIndex={0}
    >
      <Tab label='Item One' >
        <div>
          <h2 style={styles.headline}>Apartment List</h2>
          <ApartmentTable />
        </div>
      </Tab>
      <Tab label='Item Two' >
        <div>
          <h2 style={styles.headline}>Apartment Form</h2>
          <p>
            This is another example tab.
          </p>
        </div>
      </Tab>
    </Tabs>
  </MuiThemeProvider>
)

export default Apartment
