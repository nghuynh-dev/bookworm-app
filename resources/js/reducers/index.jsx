import { combineReducers } from 'redux'
import bookReducer from './book.reduce'
import shopReducer from './shop.reducer'
import cartReducer from "./cart.reducer";

const appReducer = combineReducers({
<<<<<<< HEAD
    bookReducer, shopReducer, cartReducer
=======
    bookReducer,shopReducer,cartReducer
>>>>>>> d9685d60ef33f6005776fca24a3d3bf39cd54703
})
const rootReducer = (state, action) => {
    return appReducer(state, action)
}
export default rootReducer
