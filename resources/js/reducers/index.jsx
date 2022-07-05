import { combineReducers } from 'redux'
import bookReducer from './book.reduce'
import shopReducer from './shop.reducer'

const appReducer = combineReducers({
    bookReducer,shopReducer
})
// cap nhat state tron store
const rootReducer = (state, action) => {
    return appReducer(state, action)
}
export default rootReducer
