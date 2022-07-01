import React, {useEffect} from 'react';
import {Carousel} from "reactstrap";
import './style.scss';
import BookCard from "../../bookcard";
import {connect} from "react-redux";




function Banner(props) {
    const bannerList = props.list
    useEffect(() => console.log(props.list),[])
    return (
        <div className="container-fluid banner mt-4">
            <div className="mx-5 my-3">
                <div className="banner_title row">
                    <div className="col-auto mr-auto my-auto">
                        <h4>On Sale</h4>
                    </div>
                    <div className="col-auto my-auto">
                        <button type="button" className="btn btn-secondary btn-view-all">
                            View All
                            <i className="fa fa-caret-right"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="mx-5 wrap-card row">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <i className="btn-carousel fa fa-caret-left"></i>
                            <BookCard/>
                            <BookCard/>
                            <BookCard/>
                            <BookCard/>
                            <i className="btn-carousel fa fa-caret-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Banner
