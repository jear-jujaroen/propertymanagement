import { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
// import ApartmentList from './ApartmentList'

class ApartmentTable extends Component {
  static propTypes = {
    apartments: PropTypes.array.isRequired
  }

  render () {
    return
  }
}

function mapStateToProps (state) {
// whatever is returned will show up as props
// inside of BookList
  return {
    apartments: state.apartments
  }
}

export default connect(mapStateToProps)(ApartmentTable)

// <li key={apartment.name}> {apartment.name} </li>
