import React from 'react';
<<<<<<< HEAD
import { useSelector } from "react-redux";
import { chunk } from "lodash";
import { Carousel } from 'react-bootstrap';
import BookCardComponent from "../../bookcard";
import { Link } from "react-router-dom";
=======
import { useSelector} from "react-redux";
import {chunk} from "lodash";
import {Carousel} from 'react-bootstrap';
import BookCardComponent from "../../bookcard";
import {Link} from "react-router-dom";
>>>>>>> d9685d60ef33f6005776fca24a3d3bf39cd54703

export default function BannerComponent() {
    const books = useSelector(state => state.bookReducer.homeBannerList);

    const state = {
        nextIcon: <i className="fa fa-caret-right"></i>,
        prevIcon: <i className="fa fa-caret-left"></i>,
        bannerBook: []
    }
<<<<<<< HEAD


    const dataBindingGrid = () => {
        const rows = chunk(books, 4);
        return rows.map((item, index) => {
=======
    const dataBindingGrid = () => {
        const rows = chunk(books, 4);
        return rows.map((item,index) =>{
>>>>>>> d9685d60ef33f6005776fca24a3d3bf39cd54703
            return (
                <Carousel.Item key={index}>
                    <div className="mx-6 mt-4">
                        <div className="row">
                            <BookCardComponent attribute={item} />
                        </div>
                    </div>
                </Carousel.Item>
            );
        })
    }
    return (
        <div className="banner mt-4">
            <div className="mx-5 mb-2">
                <div className="row">
                    <div className="col-auto mr-auto my-auto">
                        <p className="h4"><b>On Sale</b></p>
                    </div>
                    <div className="col-auto my-auto">
                        <Link to={'/shop'}>
                            <button type="button" className="btn btn-secondary btn-view-all">
                                View All <i className="fa fa-caret-right"></i>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <Carousel className="mx-5" nextIcon={state.nextIcon} prevIcon={state.prevIcon} index={state.index}>
                {dataBindingGrid()}
            </Carousel>
        </div>
    );
}
