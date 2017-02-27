import React from 'react'
import Paper from 'material-ui/Paper'
import AppBar from 'material-ui/AppBar'

const style = {
  height: 450,
  width: 530,
  // margin: 20,
  // textAlign: 'center',
  display: 'inline-block'
}

const ApartmentUpdates = () => (
  <div className='ApartmentHome'>
    <Paper
      style={style}
      zDepth={2}
    >
      <AppBar
        title='Apartment'
        showMenuIconButton={false}
      />
    </Paper>
  </div>
)

export default ApartmentUpdates
