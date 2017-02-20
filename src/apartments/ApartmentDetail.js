import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class ApartmentDetail extends Component {
  static propTypes = {
    apartment: PropTypes.object.isRequired
  }

  render () {
    if (!this.props.apartment) {
      return <div />
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>Address: {this.props.apartment.address} {this.props.apartment.city} {this.props.apartment.state} {this.props.apartment.zip}
        </div>
        <div>Units Available: {this.props.apartment.status}</div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    apartment: state.activeApartment
  }
}

export default connect(mapStateToProps)(ApartmentDetail)
