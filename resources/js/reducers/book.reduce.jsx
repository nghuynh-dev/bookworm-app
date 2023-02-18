import { bookConstants } from "../constants";
const { GET_BOOK_BANNER, GET_BOOK_POPULAR, GET_BOOK_RECOMMEND } = bookConstants

const initialState = {
    homeBannerList: [],
    homeFeatureList: [],
};

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BOOK_BANNER:
            return {
                ...state,
                homeBannerList: action.payload.data
            }
        case GET_BOOK_RECOMMEND:
            return {
                ...state,
                homeFeatureList: action.payload.data
            }
        case GET_BOOK_POPULAR:
            return {
                ...state,
                homeFeatureList: action.payload.data
            }
        default:
            return state
    }
}

export default bookReducer;
