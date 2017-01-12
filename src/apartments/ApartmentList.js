import React, { Component, PropTypes } from 'react'
// import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import { connect } from 'react-redux'

class ApartmentTable extends Component {
  propTypes = {
    apartments: PropTypes.array.isRequired
  }

  renderList () {
    return this.props.apartments.map((apartment) => {
      return (
        <li key={apartment.title}>{apartment.title}</li>
      )
    })
  }

  render () {
    return (
      <ul>
        {this.renderList()}
      </ul>
      // <Table>
      //   <TableHeader>
      //     <TableRow>
      //       <TableHeaderColumn>ID</TableHeaderColumn>
      //       <TableHeaderColumn>Name</TableHeaderColumn>
      //       <TableHeaderColumn>Capacity</TableHeaderColumn>
      //     </TableRow>
      //   </TableHeader>
      //   <TableBody>
      //     <TableRow>
      //       <TableRowColumn>1</TableRowColumn>
      //       <TableRowColumn>Apartment #1</TableRowColumn>
      //       <TableRowColumn>Full</TableRowColumn>
      //     </TableRow>
      //     <TableRow>
      //       <TableRowColumn>2</TableRowColumn>
      //       <TableRowColumn>Apartment #2</TableRowColumn>
      //       <TableRowColumn>3 Room Available</TableRowColumn>
      //     </TableRow>
      //     <TableRow>
      //       <TableRowColumn>3</TableRowColumn>
      //       <TableRowColumn>Apartment #3</TableRowColumn>
      //       <TableRowColumn>1 Room Available</TableRowColumn>
      //     </TableRow>
      //     <TableRow>
      //       <TableRowColumn>4</TableRowColumn>
      //       <TableRowColumn>Apartment #4</TableRowColumn>
      //       <TableRowColumn>Full</TableRowColumn>
      //     </TableRow>
      //   </TableBody>
      // </Table>
    )
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
