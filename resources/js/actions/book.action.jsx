import {bookConstants, exceptionConstants } from "../constants";
import BookService from "../services/book.service";
const { BAD_REQUEST,SUCCESS } = exceptionConstants
const { GET_BOOK_POPULAR, GET_BOOK_RECOMMEND, GET_BOOK_BANNER } = bookConstants

// credentials books?id=plaplap,la
// cái plaplapla là credentials
// action la obj gom type va payload
// type la ten su kien
// payload la gia tri dc gan
export const getBookBanner = () => {
    return async function (dispatch) {
        const response = await BookService.getBookBanner()
        // const { code, data } = response
        const BookBanner = response.data.data
        const code = response.code
        console.log(code)
        // checkAuthentication(code)
        if (code === SUCCESS) {
            console.log('ok')
            // luu
            // dispatch la func, cap nhat state trong store
            // nhan vao action (obj)
            // tu ui ban di action vao store -> reducer nhan dc va cap nhat
            dispatch({
                type: GET_BOOK_BANNER,
                payload: {
                    data: BookBanner,
                },
            })
        }
        return response
    }
}
