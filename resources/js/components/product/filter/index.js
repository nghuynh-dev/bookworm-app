import { Dropdown, DropdownButton } from 'react-bootstrap';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {chunk} from "lodash";
import BookCardComponent from "../../bookcard";
import {useEffect, useState} from "react";

export default function FilterComponent(props){
    const dataSort = props.sort
    const dataShow = props.show
    // console.log(dataSort, dataShow)
    const {handleOnClickPage, handleOnClickSort} = props
    const booksDefault = useSelector(state => state.shopReducer.bookDefaultReducer)
    //bug
    // const booksList = useSelector(state => state.shopReducer.bookShow)
    // console.log(booksList)
    let from;
    let to;
    let totalProduct;
    const filterPage = [
        20,40,60,80,100
    ]
    const filterSort = [
        {
            key: 'sale',
            value: 'Sort by on sale'
        },
        {
            key: 'popular',
            value: 'Sort by popularity'
        },
        {
            key: 'asc',
            value: 'Sort by price: low to high'
        },
        {
            key: 'desc',
            value: 'Sort by price: high to low'
        }
    ]

    const dataBindingGrid =  () => {
        return(
            <div className="mt-4 mb-3 product-show-list" >
                <div className="row">
                    <BookCardComponent attribute = {booksDefault} />
                </div>
            </div>
        )
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
                <div className="filter-dropdown-button">
                    <DropdownButton  title={dataSort} key='sortFilter' id='dropdown-variants-sort' variant='secondary' className="ml-4">
                        {
                            filterSort.map((item,index) => {
                                return(
                                    <Dropdown.Item key={'show'+index} data-render={item.value} data-sort={item.key} eventKey={item.key} onClick={e => handleOnClickSort(e)} >
                                        {item.value}
                                    </Dropdown.Item>
                                )
                            })
                        }
                    </DropdownButton>
                    <DropdownButton  key='showFilter' title={dataShow} id='dropdown-variants-show' variant='secondary'  className="ml-4">
                        {filterPage.map((page, index) => {
                            return(
                                <Dropdown.Item key={'show'+page} data-show={`Show ${page}`} data-page={page} onClick={e => handleOnClickPage(e)} eventKey={page}>
                                    Show {page}
                                </Dropdown.Item>
                            )
                        })}
                    </DropdownButton>
                </div>
            </div>
            <>
                {dataBindingGrid()}
                {/*<div className="mt-4 mb-3 pagination">*/}
                {/*    <nav aria-label=" Page navigation product">*/}
                {/*        <ul className="pagination justify-content-end" id='pagination-ul'>*/}
                {/*            {currentPage === 1 ? (*/}
                {/*                <li className="page-item disabled">*/}
                {/*                    {prevButton}*/}
                {/*                </li>*/}
                {/*            ) : (*/}
                {/*                <li className="page-item">*/}
                {/*                    {prevButton}*/}
                {/*                </li>*/}
                {/*            )}*/}

                {/*            {renderPageNumbers}*/}
                {/*            {currentPage === lastPage ? (*/}
                {/*                <li className="page-item disabled">*/}
                {/*                    {nextButton}*/}
                {/*                </li>*/}
                {/*            ) : (*/}
                {/*                <li className="page-item">*/}
                {/*                    {nextButton}*/}
                {/*                </li>*/}
                {/*            )}*/}
                {/*        </ul>*/}
                {/*    </nav>*/}
                {/*</div>*/}
            </>
        </div>
    )
}
