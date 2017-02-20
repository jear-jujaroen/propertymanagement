import * as ApartmentActionTypes from './actionTypes'

export function selectApartment (apartment) {
  // selectApartment is an ActionCreator, it needs to return
  // an action, an object with a type property.
  return {
    type: ApartmentActionTypes.SELECTED_APARTMENT,
    payload: apartment
  }
}
