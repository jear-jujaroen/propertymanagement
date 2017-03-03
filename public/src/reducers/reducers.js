import { combineReducers } from 'redux'
import ApartmentsReducer from './apartmentReducer'
// import TenantsReducer from './tenantReducer'
import ActiveApartment from './activeApartmentReducer'

const rootReducer = combineReducers({
  apartments: ApartmentsReducer,
  activeApartment: ActiveApartment
})

export default rootReducer
