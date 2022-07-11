import MainTitleComponent from "../components/cart/title";
import CartListComponent from "../components/cart/list";
<<<<<<< HEAD
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addToCart, renderCart } from "../actions/cart.action";

export default function Cart() {
=======
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {addToCart, renderCart} from "../actions/cart.action";

export default function Cart(){
>>>>>>> d9685d60ef33f6005776fca24a3d3bf39cd54703
    return (
        <div className="wrapper-cart">
            <MainTitleComponent />
            <CartListComponent />
        </div>
    )
}
