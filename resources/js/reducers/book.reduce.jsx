import { bookConstants } from "../constants";
const { GET_BOOK_BANNER, GET_BOOK_POPULAR, GET_BOOK_RECOMMEND } = bookConstants

const initialState = {
    homeBannerList:[],
    homePopularList:[],
    homeRecommendList:[],
};
// luu lay data tu redux store
//  type : key đã khai báo trong constant
//    payload : {
//        các biến mà có trong store mình sẽ tác động tới
const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BOOK_BANNER:
            // console.log(action)
            let bien = {
                ...state, //copy state hien tai
                homeBannerList: action.payload.data //update
            }
            console.log(bien)
            return bien
        case GET_BOOK_RECOMMEND:
            return {
                ...state,
                homeRecommendList: action.payload.data //update
            }
        case GET_BOOK_POPULAR:
            return {
                ...state,
                homePopularList: action.payload.data //update
            }
        default:
            return state
    }
}

export default bookReducer;
