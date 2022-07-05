import React from 'react';
import { useSelector} from "react-redux";
import {chunk} from "lodash";
import Slider from "react-slick";
import {Carousel} from 'react-bootstrap';
import BookCardComponent from "../../bookcard";

export default function BannerComponent() {
    const books = useSelector(state => state.bookReducer.homeBannerList);
    console.log('1',books)

    const state = {
        index: 0,
        nextIcon: <i className="fa fa-caret-right"></i>,
        prevIcon: <i className="fa fa-caret-left"></i>,
        bannerBook: []
    }

    const dataBindingGrid = () => {
        const rows = chunk(books, 4);
        return rows.map((item,index) =>{
            console.log(item)
            return (
                <Carousel.Item key = {index}>
                    <div className="mx-6 mt-4">
                        <div className="row">
                            <BookCardComponent attribute={item}/>
                        </div>
                    </div>
                </Carousel.Item>
            );
        })
    }
    return (
        <div className="container-fluid banner mt-4">
            <div className="mx-5 my-3 banner_title">
                        <h4>On Sale</h4>
                        <button type="button" className="btn btn-secondary btn-view-all">
                            View All
                        </button>
            </div>
            <div>
                <Carousel className='mx-5'
                          nextIcon={state.nextIcon}
                          prevIcon={state.prevIcon}
                          index={state.index}>
                    {dataBindingGrid()}
                </Carousel>
            </div>
        </div>
    );
}
// function Banner(){
//     const books = useSelector(state => state.bookReducer.homeBannerList);
//     console.log('1',books)
//
//     const getBook = books.map((item, index) => {
//         return();
//     })
//
//     const settings = {
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//     };
//     return(
//         <div className="container-fluid banner mt-4">
//             <div className="mx-5 my-3 banner_title">
//                 <h4>On Sale</h4>
//                 <button type="button" className="btn btn-secondary btn-view-all">
//                     View All
//                 </button>
//             </div>
//             <div>
//                 <Slider {settings}>
//                     <div></div>
//                 </Slider>
//             </div>
//         </div>
//     );
// }
