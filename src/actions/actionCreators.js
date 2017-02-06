export function selectApartment (apartment) {
  // selectApartment is an ActionCreator, it needs to return
  // an action, an object with a type property.
  return {
    type: 'APARTMENT_SELECTED',
    payload: apartment
  }
}
