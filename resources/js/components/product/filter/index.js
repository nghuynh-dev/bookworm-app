import React from 'react';
import { useSelector } from 'react-redux';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import BookCardComponent from '../../bookcard';

export default function FilterComponent(props) {
    const { sort, show, handleOnClickPage, handleOnClickSort, handlePaginateClick } = props;
    const booksDefault = useSelector(state => state.shopReducer.bookDefaultReducer);
    const paginate = useSelector(state => state.shopReducer.paginate);

    const filterPage = [5, 10, 15, 20, 25];

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
    ];

    const dataBindingGrid = () => {
        return (
            <div className="mt-4 mb-3 product-show-list">
                <div className="row">
                    <BookCardComponent attribute={booksDefault} />
                </div>
            </div>
        );
    };

    return (
        <div className="col-lg-10 col-md-9 col-sm-12 pr-0 product-show-list">
            <div className="mt-4 mb-3 filter-dropdown">
                <div>
                    Showing {paginate.from}-{paginate.to} of {paginate.total} books
                </div>
                <div className="filter-dropdown-button">
                    <DropdownButton
                        title={sort}
                        key="sortFilter"
                        id="dropdown-variants-sort"
                        variant="secondary"
                        className="ml-4"
                    >
                        {filterSort.map((item, index) => (
                            <Dropdown.Item
                                key={`sort-${index}`}
                                data-render={item.value}
                                data-sort={item.key}
                                eventKey={item.key}
                                onClick={handleOnClickSort}
                            >
                                {item.value}
                            </Dropdown.Item>
                        ))}
                    </DropdownButton>
                    <DropdownButton
                        title={show}
                        key="showFilter"
                        id="dropdown-variants-show"
                        variant="secondary"
                        className="ml-4"
                    >
                        {filterPage.map((page, index) => (
                            <Dropdown.Item
                                key={`show-${page}`}
                                data-show={`Show ${page}`}
                                data-page={page}
                                onClick={handleOnClickPage}
                                eventKey={page}
                            >
                                Show {page}
                            </Dropdown.Item>
                        ))}
                    </DropdownButton>
                </div>
            </div>
            <>
                {dataBindingGrid()}
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="Next"
                    previousLabel="Previous"
                    forcePage={paginate.currentPage - 1}
                    onPageChange={(e) => handlePaginateClick(e, paginate.lastPage)}
                    pageRangeDisplayed={3}
                    pageCount={paginate.lastPage}
                    renderOnZeroPageCount={null}
                    containerClassName="pagination"
                    previousLinkClassName="pagination__link-prev"
                    nextLinkClassName="pagination__link-next"
                    disabledClassName="pagination__link--disabled"
                    activeClassName="pagination__link--active"
                />
            </>
        </div>
    );
}
