import * as ApartmentActionTypes from '../actions/apartment/actionTypes'
// State argument is not application state, only the state
// this reducer is responsible for
export default function (state = null, action) {
  switch (action.type) {
    case ApartmentActionTypes.SELECTED_APARTMENT:
      return action.payload
  }

  return state
}
