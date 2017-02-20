import * as ApartmentActionTypes from './actionTypes'

export function selectApartment (apartment) {
  // selectApartment is an ActionCreator, it needs to return
  // an action, an object with a type property.
  console.log('selectApartment', apartment)
  return {
    type: ApartmentActionTypes.SELECTED_APARTMENT,
    payload: apartment
  }
}

export function addApartment (apartmentInfo) {
  console.log('addApartment', apartmentInfo)
  return {
    type: ApartmentActionTypes.ADD_APARTMENT,
    payload: apartmentInfo
  }
}
