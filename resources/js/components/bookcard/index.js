import React from 'react';
import { isNull } from "lodash";
import { Link } from "react-router-dom";


export default function BookCardComponent(props) {
    const books = props.attribute;

    const checkFinalPrice = (book) => {
        if (book.sub_price !== 0) {
            return (
                <>
                    <span>
                        <del>${book.book_price}</del>
                    </span>
                    <small className="text-muted">
                        <span className="h2 my-0 pl-2">
                            <b>${book.final_price}</b>
                        </span>
                    </small>
                </>
            );
        }
        return <span>${book.book_price}</span>;
    };

    return (
        <>
            {books.map(book => {
                const bookCoverPhoto = isNull(book.book_cover_photo) || (book.book_cover_photo.length === 0) ? 'book5' : book.book_cover_photo;

                return (
                    <div className='col-lg-3 col-xl-3 col-md-6 col-sm-12 mb-4' key={`book_${book.book_id}`}>
                        <div className="card h-100" >
                            <Link to={`/detail/${book.book_id}`}>
                                <img className='card-img-top' src={`/assets/bookcover/${bookCoverPhoto}.jpg`} alt={bookCoverPhoto} />
                            </Link>
                            <div className="card-body">
                                <h5 className="card-title">{book.book_title}</h5>
                                <p className="card-text">{book.author.author_name}</p>
                            </div>
                            <div className="card-footer d-flex align-items-center flex-wrap">
                                {checkFinalPrice(book)}
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    );
}
