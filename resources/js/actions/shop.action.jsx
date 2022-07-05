import {exceptionConstants, shopConstants} from "../constants";
import ShopService from "../services/shop.service";
const { BAD_REQUEST, SUCCESS } = exceptionConstants
const { GET_AUTHOR, GET_CATEGORY, GET_STAR } = shopConstants

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
