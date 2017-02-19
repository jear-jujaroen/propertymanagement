import * as ApartmentActionTypes from '../actions/apartment/actionTypes'

// export default function () {
//   return [
//     {name: 'Apartment #1', status: '0'},
//     {name: 'Apartment #2', status: '1'},
//     {name: 'Apartment #3', status: '3'}
//   ]
// }

export default function Apartment (state = [], action) {
  switch (action.type) {
    case ApartmentActionTypes.ADD_APARTMENT:
      return [
        ...state,
        {
          address: action.address,
          status: action.status
        }
      ]

    case ApartmentActionTypes.REMOVE_APARTMENT:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ]
    default:
      return state
  }
}
