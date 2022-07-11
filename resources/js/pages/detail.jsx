<<<<<<< HEAD
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getBookById } from "../actions";
import MainTitleComponent from "../components/detail/title";
import DescribeComponent from "../components/detail/describe";
import ReviewCardComponent from "../components/detail/reviewcard";
import { useEffect } from "react";
import { addToCart } from "../actions/cart.action";

export default function Detail() {
=======
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getBookById} from "../actions";
import MainTitleComponent from "../components/detail/title";
import DescribeComponent from "../components/detail/describe";
import ReviewCardComponent from "../components/detail/reviewcard";
import {useEffect} from "react";
import {addToCart} from "../actions/cart.action";

export default function Detail(){
>>>>>>> d9685d60ef33f6005776fca24a3d3bf39cd54703
    const { id } = useParams()
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBookById(id));
<<<<<<< HEAD
    }, [])
=======
    },[])
>>>>>>> d9685d60ef33f6005776fca24a3d3bf39cd54703
    const handleAddToCart = (e) => {
        const book = JSON.parse(e.target.dataset.book).book
        const quantity = e.target.dataset.quantity
        // console.log(book)

        const data = {
            id: book.book_id,
            title: book.book_title,
            img: book.book_cover_photo,
            author: book.author.author_name,
<<<<<<< HEAD
            final_price: book.final_price,
=======
            final_price:book.final_price,
>>>>>>> d9685d60ef33f6005776fca24a3d3bf39cd54703
            book_price: book.book_price,
            quantity: parseInt(quantity)

        }
        dispatch(addToCart(data))
    }

    return (
        <div className="wrapper-detail">
<<<<<<< HEAD
            <MainTitleComponent id={id} />
            <div className="mx-5">
                <DescribeComponent handleAddToCart={e => handleAddToCart(e)} />
=======
            <MainTitleComponent id={id}/>
            <div className="mx-5">
                <DescribeComponent handleAddToCart={e => handleAddToCart(e)}/>
>>>>>>> d9685d60ef33f6005776fca24a3d3bf39cd54703
                <ReviewCardComponent />
            </div>
        </div>
    )
}
