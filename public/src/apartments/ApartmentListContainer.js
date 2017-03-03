import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import ApartmentDetail from './ApartmentDetail'
import { selectApartment } from '../actions/apartment/actionCreators'
import { bindActionCreators } from 'redux'
// import {Link} from 'react-router'

class ApartmentTable extends Component {
  static propTypes = {
    apartments: PropTypes.array.isRequired,
    selectApartment: PropTypes.func.isRequired
  }

  render () {
    return (
      <div>
        <Table
          fixedHeader
          selectable
          multiSelectable={false}
          onCellClick={(row) => this.props.selectApartment(this.props.apartments[row])}
        >
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
            enableSelectAll={false}
          >
            <TableRow>
              <TableHeaderColumn tooltip='The ID'>ID</TableHeaderColumn>
              <TableHeaderColumn tooltip='The Name'>Address</TableHeaderColumn>
              <TableHeaderColumn tooltip='The Status'>Units Available</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={false}
            deselectOnClickaway
            showRowHover
            stripedRows
          >
            {this.props.apartments.map((row, index) => (
              <TableRow key={index} selected={row.selected}>
                <TableRowColumn>{index}</TableRowColumn>
                <TableRowColumn
                >{row.address} {row.city} {row.state} {row.zip}</TableRowColumn>
                <TableRowColumn>{row.status}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
        </Table>
        <ApartmentDetail />
      </div>
    )
  }
}

function mapStateToProps (state) {
// whatever is returned will show up as props
// inside of ApartmentList
  return {
    apartments: state.apartments
  }
}

// Anything returned from this function will end up
// as props on the apartmentList container
function mapDispatchToProps (dispatch) {
  // whenever selectApartment is called, the result should be
  // passed to all of our reducers
  return bindActionCreators({ selectApartment: selectApartment }, dispatch)
}

// promote apartmentList from a component to a container
// it needs to know aout this new dispatch method, selectApartment.
// Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(ApartmentTable)
