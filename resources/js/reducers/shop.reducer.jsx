import { shopConstants } from "../constants";
<<<<<<< HEAD
const { GET_AUTHOR, GET_SHOW, GET_CATEGORY, GET_STAR, GET_BOOK_DEFAULT, GET_BOOK_ID, UPDATE_FILTER_PARAMS, UPDATE_LAST_PAGINATION, UPDATE_CURRENT_PAGINATION } = shopConstants
=======
const { GET_AUTHOR, GET_SHOW, GET_CATEGORY, GET_STAR, GET_BOOK_DEFAULT, GET_BOOK_ID, UPDATE_FILTER_PARAMS } = shopConstants
>>>>>>> d9685d60ef33f6005776fca24a3d3bf39cd54703

const initState = {
    filterParams: {
        sort: 'sale',
<<<<<<< HEAD
        show: 5,
        page: 1,
=======
        show: 20,
>>>>>>> d9685d60ef33f6005776fca24a3d3bf39cd54703
        type: undefined,
        id: undefined
    },
    authorReducer: [],
    categoryReducer: [],
    starReducer: [],
    bookDefaultReducer: [],
<<<<<<< HEAD
    paginate: {
        total: 0,
        nextUrl: null,
        previousUrl: null,
        firstUrl: null,
        lastUrl: null,
        from: 0,
        to: 0,
        lastPage: 0,
        currentPage: 1,
    },
=======
>>>>>>> d9685d60ef33f6005776fca24a3d3bf39cd54703
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
<<<<<<< HEAD
                    review_title: "",
                    rating_start: "",
                    review_date: "",
                    review_details: "",
=======
                    review_title:"",
                    rating_start:"",
                    review_date:"",
                    review_details:"",
>>>>>>> d9685d60ef33f6005776fca24a3d3bf39cd54703
                }
            ]
        },
        count: [
            {
<<<<<<< HEAD
                avg_star: "",
                count_star: "",
=======
                avg_star:"",
                count_star:"",
>>>>>>> d9685d60ef33f6005776fca24a3d3bf39cd54703
            },
        ]
    },
    bookShow: []
    // bookIdReducer: [],
}
const shopReducer = (state = initState, action) => {
    switch (action.type) {
        case UPDATE_LAST_PAGINATION:
            return {
                ...state,
                paginate: {
                    ...state.paginate,
                    lastPage: action.payload.data
                }
            }
        case UPDATE_CURRENT_PAGINATION:
            return {
                ...state,
                paginate: {
                    ...state.paginate,
                    currentPage: action.payload.data
                }
            }
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
<<<<<<< HEAD
            const data = action.payload.data
            const books = data.data
            const paginate = {
                total: data.meta.total,
                nextUrl: data.link.next_url,
                previousUrl: data.link.prev_url,
                firstUrl: data.link.first_url,
                lastUrl: data.link.last_url,
                from: data.meta.from,
                to: data.meta.to,
                lastPage: data.meta.last_page,
                currentPage: data.meta.current_page,

            }
            return {
                ...state,
                bookDefaultReducer: books,
                paginate: paginate,
=======
            return {
                ...state,
                bookDefaultReducer: action.payload.data
>>>>>>> d9685d60ef33f6005776fca24a3d3bf39cd54703
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

