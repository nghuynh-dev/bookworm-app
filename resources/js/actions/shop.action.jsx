import { exceptionConstants, shopConstants } from "../constants";
import ShopService from "../services/shop.service";
const { BAD_REQUEST, SUCCESS } = exceptionConstants
<<<<<<< HEAD
const { GET_AUTHOR, GET_SHOW, GET_BOOK_ID, GET_CATEGORY, GET_STAR, GET_BOOK_DEFAULT, UPDATE_FILTER_PARAMS, UPDATE_LAST_PAGINATION, UPDATE_CURRENT_PAGINATION } = shopConstants
=======
const { GET_AUTHOR, GET_SHOW, GET_BOOK_ID, GET_CATEGORY, GET_STAR, GET_BOOK_DEFAULT, UPDATE_FILTER_PARAMS } = shopConstants
>>>>>>> d9685d60ef33f6005776fca24a3d3bf39cd54703

export const updateQueryParams = (data) => {
    return async function (dispatch) {
        dispatch({
            type: UPDATE_FILTER_PARAMS,
            payload: {
                data: data,
            },
        })
    }
}
<<<<<<< HEAD
export const updateLastPage = (last_page) => {
    return async function (dispatch) {
        dispatch({
            type: UPDATE_LAST_PAGINATION,
            payload: {
                data: last_page,
            },
        })
    }
}

export const updateCurrentPage = (current_page) => {
    return async function (dispatch) {
        dispatch({
            type: UPDATE_CURRENT_PAGINATION,
            payload: {
                data: current_page,
            },
        })
    }
}
=======
>>>>>>> d9685d60ef33f6005776fca24a3d3bf39cd54703

export const getBookDefault = (query_string) => {
    return async function (dispatch) {
        const response = await ShopService.getBookDefault(query_string)
<<<<<<< HEAD
        const BookDefault = response.data
=======
        const BookDefault = response.data.data
>>>>>>> d9685d60ef33f6005776fca24a3d3bf39cd54703
        const code = response.code
        if (code === SUCCESS) {
            dispatch({
                type: GET_BOOK_DEFAULT,
                payload: {
                    data: BookDefault,
                },
            })
        }
        return response
    }
}

// export const getShow = (query_string) => {
//     return async function (dispatch) {
//         const response = await ShopService.getBookDefault(query_string)
//         const BookList = response.data.meta
//         const code = response.code
//         if (code === SUCCESS) {
//             dispatch({
//                 type: GET_SHOW,
//                 payload: {
//                     data: BookList,
//                 },
//             })
//         }
//         return response
//     }
// }

export const getAuthor = () => {
    return async function (dispatch) {
        const response = await ShopService.getType()
        const author = response.data.authors
        const code = response.code
        if (code === SUCCESS) {
            dispatch({
                type: GET_AUTHOR,
                payload: {
                    data: author,
                },
            })
        }
        return response
    }
}
export const getCategory = () => {
    return async function (dispatch) {
        const response = await ShopService.getType()
        const category = response.data.categories
        const code = response.code
        if (code === SUCCESS) {
            dispatch({
                type: GET_CATEGORY,
                payload: {
                    data: category,
                },
            })
        }
        return response
    }
}

export const getStar = () => {
    return async function (dispatch) {
        const response = await ShopService.getType()
        const star = response.data.star
        const code = response.code
        if (code === SUCCESS) {
            dispatch({
                type: GET_STAR,
                payload: {
                    data: star,
                },
            })
        }
        return response
    }
}

export const getBookById = (id) => {
    return async function (dispatch) {
        const response = await ShopService.getBookById(id)
        const bookId = response.data
        const code = response.code
        if (code === SUCCESS) {
            dispatch({
                type: GET_BOOK_ID,
                payload: {
                    data: bookId,
                },
            })
        }
        return response
    }
}

