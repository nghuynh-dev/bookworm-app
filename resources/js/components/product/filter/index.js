import { Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';
import {Link} from "react-router-dom";

export default function FilterComponent(){
    let from;
    let to;
    let totalProduct;

    const dataBindingGrid =  () => {

    }
    let renderPageNumbers;
    let prevButton;
    let nextButton;
    let currentPage;
    let lastPage;

    function setState(param) {

    }

    return(
        <div className="col-lg-10 col-md-9 col-sm-12 pr-0 product-show-list">
            <div className="mt-4 mb-3 filter-dropdown">
                <div>
                    Showing {from}-{to} of {totalProduct} of books
                </div>
            </div>
            <>
                {dataBindingGrid()}
                <div className="mt-4 mb-3 pagination">
                    <nav aria-label=" Page navigation product">
                        <ul className="pagination justify-content-end" id='pagination-ul'>
                            {currentPage === 1 ? (
                                <li className="page-item disabled">
                                    {prevButton}
                                </li>
                            ) : (
                                <li className="page-item">
                                    {prevButton}
                                </li>
                            )}

                            {renderPageNumbers}
                            {currentPage === lastPage ? (
                                <li className="page-item disabled">
                                    {nextButton}
                                </li>
                            ) : (
                                <li className="page-item">
                                    {nextButton}
                                </li>
                            )}
                        </ul>
                    </nav>
                </div>
            </>
        </div>
    )
}
