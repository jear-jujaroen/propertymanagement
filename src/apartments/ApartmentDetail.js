import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class ApartmentDetail extends Component {
  static propTypes = {
    apartment: PropTypes.string.isRequired
  }

  render () {
    // if (!this.props.apartment) {
    //   return <div> Select an apartment to get started.</div>
    // }

    return (
      <div>
        <h3>Details for:</h3>
        <div>{this.props.apartment}</div>
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
