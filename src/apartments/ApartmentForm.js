import React from 'react'
import TextField from 'material-ui/TextField'

const TextFieldForm = () => (
  <div className='apartment-form-container'>
    <div className='field-one'>
      <TextField
        hintText='Address'
        floatingLabelText='Address'
      /><br />
      <TextField
        hintText='City'
        floatingLabelText='City'
      /><br />
      <TextField
        hintText='State'
        floatingLabelText='State'
      /><br />
      <TextField
        hintText='Zip Code'
        floatingLabelText='Zip Code'
      /><br />
      <TextField
        hintText='Multi-Family'
        floatingLabelText='Apartment Type'
      /><br />
    </div>
    <div className='field-two'>
      <TextField
        hintText='10'
        floatingLabelText='Total Rooms'
      /><br />
      <TextField
        hintText='20'
        floatingLabelText='Total Rooms'
      /><br />
      <TextField
        hintText='5,000 sqft'
        floatingLabelText='Lot Size (Sqft)'
      /><br />
      <TextField
        hintText='2,000'
        floatingLabelText='Total Sqft'
      /><br />
      <TextField
        hintText='$155'
        floatingLabelText='$ per Sqft'
      /><br />
    </div>
  </div>
)

export default TextFieldForm
