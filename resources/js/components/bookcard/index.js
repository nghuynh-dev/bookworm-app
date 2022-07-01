import React from 'react';
import {CardLink} from "reactstrap";
import './style.scss';

function BookCard(){
    return(
        <CardLink>
            <div className="card">
                <img src="./assets/bookcover/book1.jpg" className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">Book title</h5>
                    <p className="card-text">Author name</p>
                    <del>Discount</del>
                    <b>Final</b>
                </div>
            </div>
        </CardLink>
    );
}
export default BookCard;
