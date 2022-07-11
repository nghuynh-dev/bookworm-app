import { cartConstants } from "../constants";
<<<<<<< HEAD
const { ADD_TO_CART, POST_CART_TO_DB, ADD_QUANTITY_CART, SUB_QUANTITY_CART } = cartConstants
=======
const { ADD_TO_CART ,POST_CART_TO_DB,  ADD_QUANTITY_CART, SUB_QUANTITY_CART } = cartConstants
>>>>>>> d9685d60ef33f6005776fca24a3d3bf39cd54703
const CART_STORAGE = process.env.MIX_CART_STORAGE

const cartStore = JSON.parse(localStorage.getItem(CART_STORAGE))

const initCart = {
<<<<<<< HEAD
    cartListReducer: cartStore === null ? [] : cartStore,
=======
    cartListReducer: cartStore === null ? []: cartStore,
>>>>>>> d9685d60ef33f6005776fca24a3d3bf39cd54703
    alertCart: {
        message: '',
        show: false
    }
}

const checkBookIdIntoCart = (id) => {
    const carts = JSON.parse(localStorage.getItem(CART_STORAGE))
<<<<<<< HEAD
    if (carts === null) {
=======
    if(carts === null){
>>>>>>> d9685d60ef33f6005776fca24a3d3bf39cd54703
        return true
    }
    else {
        let check = true
        carts.map((item) => {
            if (item.id === id) {
                check = false
            }
        })
        if (check) {
            return true
        }
        else {
            return false
        }
    }
}

const cartReducer = (state = initCart, action) => {
<<<<<<< HEAD
    switch (action.type) {
=======
    switch (action.type){
>>>>>>> d9685d60ef33f6005776fca24a3d3bf39cd54703
        case ADD_TO_CART:
            let carts = JSON.parse(localStorage.getItem(CART_STORAGE))
            const book = action.payload.data
            if (checkBookIdIntoCart(book.id)) {
                if (carts === null) {
                    carts = []
                }
                carts.push(book)
                localStorage.setItem(CART_STORAGE, JSON.stringify(carts))
            }
            else {
                // console.log('ton tai')
                carts.map((item) => {
                    if (item.id === book.id) {
                        // console.log('check')
                        item.quantity += book.quantity
                    }
                })
                // console.log(carts)
                localStorage.setItem(CART_STORAGE, JSON.stringify(carts))
            }

<<<<<<< HEAD
            return {
=======
            return{
>>>>>>> d9685d60ef33f6005776fca24a3d3bf39cd54703
                ...state,
                cartListReducer: carts
            }
        case ADD_QUANTITY_CART:
            let cartsS = JSON.parse(localStorage.getItem(CART_STORAGE))
            cartsS.map((cart) => {
                console.log(cartsS)
<<<<<<< HEAD
                if (cart.id === action.payload.data) {
                    if (cart.quantity <= 7) {
                        cart.quantity += 1
=======
                if(cart.id === action.payload.data){
                    if (cart.quantity <= 7){
                        cart.quantity +=1
>>>>>>> d9685d60ef33f6005776fca24a3d3bf39cd54703
                    }
                }
            })
            localStorage.setItem(CART_STORAGE, JSON.stringify(cartsS))

<<<<<<< HEAD
            return {
=======
            return{
>>>>>>> d9685d60ef33f6005776fca24a3d3bf39cd54703
                ...state,
                cartListReducer: cartsS
            }
        case SUB_QUANTITY_CART:
            let cartsSs = JSON.parse(localStorage.getItem(CART_STORAGE))
            cartsSs.map((cart, index) => {
                // console.log(cartsSs)
<<<<<<< HEAD
                if (cart.id === action.payload.data) {
                    if (cart.quantity >= 1) {
                        cart.quantity -= 1
                    }
                    if (cart.quantity == 0) {
=======
                if(cart.id === action.payload.data){
                    if (cart.quantity >=1){
                        cart.quantity -=1
                    }
                    if(cart.quantity == 0){
>>>>>>> d9685d60ef33f6005776fca24a3d3bf39cd54703
                        cartsSs.splice(index, 1)
                        // console.log(cartsSs)
                    }
                }
            })
            localStorage.setItem(CART_STORAGE, JSON.stringify(cartsSs))
<<<<<<< HEAD
            return {
=======
            return{
>>>>>>> d9685d60ef33f6005776fca24a3d3bf39cd54703
                ...state,
                cartListReducer: cartsSs
            }
        case POST_CART_TO_DB:
            localStorage.setItem(CART_STORAGE, JSON.stringify([]))
<<<<<<< HEAD
            return {
=======
            return{
>>>>>>> d9685d60ef33f6005776fca24a3d3bf39cd54703
                ...state,
                alertCart: {
                    ...state.alertCart,
                    message: action.payload.data.message,
                    show: action.payload.data.show
                },
                cartListReducer: []
            }
        default:
            return state
    }
}

export default cartReducer;
