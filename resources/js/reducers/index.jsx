import { combineReducers } from 'redux'
import bookReducer from './book.reduce'


const appReducer = combineReducers({
    bookReducer
})
// cap nhat state tron store
// state luc nay la init value
const rootReducer = (state, action) => {
    switch (action.type) {
        // case LOGOUT:
        //     return appReducer(undefined, action)
        default:
            return appReducer(state, action)
    }
}
export default rootReducer
