import { combineReducers } from 'redux'
import ApartmentsReducer from './apartmentReducer'
import TenantsReducer from './tenantReducer'

const rootReducer = combineReducers({
  apartments: ApartmentsReducer,
  tenants: TenantsReducer
})

export default rootReducer
