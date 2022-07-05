import { shopConstants } from "../constants";
const { GET_AUTHOR, GET_CATEGORY, GET_STAR } = shopConstants

const initState = {
    authorReducer: [],
    categoryReducer: [],
    starReducer: [],
}
const shopReducer = (state = initState, action) => {
    switch (action.type){
        case GET_AUTHOR:
            return {
                ...state,
                authorReducer: action.payload.data
            }
        case GET_CATEGORY:
            return {
                ...state,
                categoryReducer: action.payload.data
            }
        case GET_STAR:
            return {
                ...state,
                starReducer: action.payload.data
            }
        default:
            return state
    }
}
export default shopReducer;

