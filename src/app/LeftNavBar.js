// import React from 'react';
// import Drawer from 'material-ui/Drawer';
// import MenuItem from 'material-ui/MenuItem';
// import RaisedButton from 'material-ui/RaisedButton';
// //
// // var injectTapEventPlugin = require("react-tap-event-plugin");
// // injectTapEventPlugin();
//
// export default class LeftNavBar extends React.Component {
//
//   constructor(props) {
//     super(props);
//     this.state = {open: false};
//   }
//
//   // handleToggle = () => this.setState({open: !this.state.open});
//   //
//   handleClose = () => this.setState({open: false});
//
//   // componentDidMount(){
//   //   this.onEventListener();
//   // }
//   //
//   // onEventListener(){
//   //   emitter.on('OPEN_NAV', (e) => {
//   //     this.refs.leftNav.toggle();
//   //   })
//   // }
//
//   render() {
//     return (
//       <Drawer
//         onLeftIconButtonTouchTap={this.handleToggle}
//         docked={false}
//         open={this.props.open}
//         onRequestChange={(open) => this.setState({open})}
//       >
//         <MenuItem onTouchTap={this.handleClose}>Profile</MenuItem>
//         <MenuItem onTouchTap={this.handleClose}>Apartments</MenuItem>
//         <MenuItem onTouchTap={this.handleClose}>Tenants</MenuItem>
//         <MenuItem onTouchTap={this.handleClose}>Settings</MenuItem>
//       </Drawer>
//     );
//   }
// }
