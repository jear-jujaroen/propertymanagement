import React from 'react'
import ApartmentTable from './ApartmentListContainer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Tabs, Tab} from 'material-ui/Tabs'
import Paper from 'material-ui/Paper'
import '../../css/apartment.css'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  }
}

const style = {
  height: 500,
  width: 1000,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block'
}

const Apartment = () => (

  <MuiThemeProvider>
    <div className='apartment'>
      <Tabs
        initialSelectedIndex={0}
        contentContainerClassName='5'
      >
        <Tab label='Apartment Form'>
          <div style={{textAlign: 'center', margin: '25px'}}>
            <Paper style={style} zDepth={1}>
              <h2 style={styles.headline}>Apartment Form</h2>
            </Paper>
          </div>
        </Tab>
        <Tab label='Apartment List'>
          <div style={{textAlign: 'center', margin: '25px'}}>
            <Paper style={style} zDepth={1}>
              <ApartmentTable />
            </Paper>
          </div>
        </Tab>
      </Tabs>
    </div>
  </MuiThemeProvider>
)

export default Apartment
