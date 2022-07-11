import { shopConstants } from "../constants";
const { GET_AUTHOR, GET_SHOW, GET_CATEGORY, GET_STAR, GET_BOOK_DEFAULT, GET_BOOK_ID, UPDATE_FILTER_PARAMS } = shopConstants

const initState = {
    filterParams: {
        sort: 'sale',
        show: 20,
        type: undefined,
        id: undefined
    },
    authorReducer: [],
    categoryReducer: [],
    starReducer: [],
    bookDefaultReducer: [],
    bookIdReducer: {
        book: {
            discount_price: "",
            final_price: "",
            sub_price: "",
            book_cover_photo: "",
            book_price: "",
            book_summary: "",
            book_title: "",
            category: {
                category_desc: "",
                category_name: "",
            },
            author: {
                author_bio: "",
                author_name: "",
            }
        },
        reviews: {
            data: [
                {
                    review_title:"",
                    rating_start:"",
                    review_date:"",
                    review_details:"",
                }
            ]
        },
        count: [
            {
                avg_star:"",
                count_star:"",
            },
        ]
    },
    bookShow: []
    // bookIdReducer: [],
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
        case GET_BOOK_DEFAULT:
            return {
                ...state,
                bookDefaultReducer: action.payload.data
            }
        case GET_BOOK_ID:
            return {
                ...state,
                bookIdReducer: action.payload.data
            }
        case GET_SHOW:
            return {
                ...state,
                bookShow: action.payload.data
            }
        case UPDATE_FILTER_PARAMS:
            return {
                ...state,
                filterParams: {
                    ...state.filterParams,
                    ...action.payload.data
                }
            }
        default:
            return state
    }
}
export default shopReducer;

