import React, { Component, PropTypes } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addApartment } from '../actions/apartment/actionCreators'

const style = {
  margin: 12
}

class TextFieldForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      address: '',
      city: '',
      state: '',
      zip: ''
    }

    this.onAddressChange = this.onAddressChange.bind(this)
    this.onCityChange = this.onCityChange.bind(this)
    this.onStateChange = this.onStateChange.bind(this)
    this.onZipChange = this.onZipChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  static propTypes = {
    addApartment: PropTypes.func.isRequired
  }

  onAddressChange (e) {
    console.log(e.target.value)
    this.setState({ address: e.target.value })
  }

  onCityChange (e) {
    console.log(e.target.value)
    this.setState({ city: e.target.value })
  }

  onStateChange (e) {
    console.log(e.target.value)
    this.setState({ state: e.target.value })
  }

  onZipChange (e) {
    console.log(e.target.value)
    this.setState({ zip: e.target.value })
  }

  onFormSubmit (e) {
    e.preventDefault()
    console.log('submit button clicked')

    this.props.addApartment(
      {
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip
      }
    )

    this.setState({
      address: '',
      city: '',
      state: '',
      zip: ''
    })
  }

  render () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className='apartment-form-container'>
          <div className='field-one'>
            <TextField
              hintText='Address'
              floatingLabelText='Address'
              value={this.state.address}
              onChange={this.onAddressChange}
            /><br />
            <TextField
              hintText='City'
              floatingLabelText='City'
              value={this.state.city}
              onChange={this.onCityChange}
            /><br />
            <TextField
              hintText='State'
              floatingLabelText='State'
              value={this.state.state}
              onChange={this.onStateChange}
            /><br />
            <TextField
              hintText='Zip Code'
              floatingLabelText='Zip Code'
              value={this.state.zip}
              onChange={this.onZipChange}
            /><br />
          </div>
        </div>
        <RaisedButton label='Cancel' style={style} />
        <RaisedButton type='submit' label='Submit' primary style={style} />
      </form>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ addApartment }, dispatch)
}

// we pass in null into the first parameter because we are not mapping state to props
export default connect(null, mapDispatchToProps)(TextFieldForm)
