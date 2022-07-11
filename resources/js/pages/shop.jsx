<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAuthor, getBookDefault, getCategory, getShow, getStar, updateQueryParams, updateLastPage, updateCurrentPage } from "../actions/shop.action";
=======
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getAuthor, getBookDefault, getCategory, getShow, getStar, updateQueryParams} from "../actions/shop.action";
>>>>>>> d9685d60ef33f6005776fca24a3d3bf39cd54703
import ShopTitleComponent from "../components/product/title";
import SidebarComponent from "../components/product/sidebar";
import FilterComponent from "../components/product/filter";

function Shop(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        // const query_string = 'show=20&sort=sale'
        // dispatch(getShow(query_string))
        dispatch(getCategory());
        dispatch(getAuthor());
        dispatch(getStar());
    }, [])

    const filter = useSelector(state => state.shopReducer.filterParams)

    useEffect(() => {
<<<<<<< HEAD
        // const params = new URLSearchParams(window.location.search)
        // let page = params.get('page')
        let query_string = `sort=${filter.sort}&show=${filter.show}&page=${filter.page}`
        if (filter.type !== undefined && filter.id !== undefined) {
            query_string = `sort=${filter.sort}&${filter.type}=${filter.id}&show=${filter.show}&page=${filter.page}`
        }
        dispatch(getBookDefault(query_string))
    }, [filter])
=======
        let query_string = `sort=${filter.sort}&show=${filter.show}`
        if(filter.type !== undefined && filter.id !== undefined){
            query_string = `sort=${filter.sort}&${filter.type}=${filter.id}&show=${filter.show}`
        }
        dispatch(getBookDefault(query_string))
    },[filter])
>>>>>>> d9685d60ef33f6005776fca24a3d3bf39cd54703

    const [by, setBy] = useState('')
    const handleOnClickCate = e => {
        const query_params = {
            type: 'category',
            id: e.target.dataset.id,
        }
        setBy(`Category: ${e.target.dataset.name}`)
        dispatch(updateQueryParams(query_params));
<<<<<<< HEAD
        dispatch(updateCurrentPage(1))
=======
>>>>>>> d9685d60ef33f6005776fca24a3d3bf39cd54703
    }
    const handleOnClickAuthor = e => {
        const query_params = {
            type: 'author',
            id: e.target.dataset.id,
        }

        setBy(`Author: ${e.target.dataset.name}`)
        dispatch(updateQueryParams(query_params));
<<<<<<< HEAD
        dispatch(updateCurrentPage(1))
=======
>>>>>>> d9685d60ef33f6005776fca24a3d3bf39cd54703
    }
    const handleOnClickStar = e => {
        const query_params = {
            type: 'star',
            id: e.target.dataset.id,
        }
        setBy(`Star: ${e.target.dataset.id} Star`)
        dispatch(updateQueryParams(query_params));
<<<<<<< HEAD
        dispatch(updateCurrentPage(1))
    }

    const [sort, setSort] = useState('Sort by on sale')
    const [show, setShow] = useState(`Show ${5}`)
    const handleOnClickPage = e => {
        const query_params = {
            show: e.target.dataset.page,
            page: 1
        }
        setShow(e.target.dataset.show)
        dispatch(updateQueryParams(query_params))
        dispatch(updateCurrentPage(1))
    }
    const handleOnClickSort = e => {

        const query_params = {
=======
    }

    const [sort, setSort] = useState('Sort by on sale')
    const [show, setShow] =useState(`Show ${20}`)
    const handleOnClickPage = e => {
        const query_params ={
            show: e.target.dataset.page
        }
        setShow(e.target.dataset.show)
        dispatch(updateQueryParams(query_params))
    }
    const handleOnClickSort = e => {

        const query_params ={
>>>>>>> d9685d60ef33f6005776fca24a3d3bf39cd54703
            sort: e.target.dataset.sort
        }
        setSort(e.target.dataset.render)
        dispatch(updateQueryParams(query_params))
<<<<<<< HEAD
        dispatch(updateCurrentPage(1))
    }

    const handlePaginateClick = (e, last_page) => {
        const newOffset = (e.selected + 1);
        const query_params = {
            page: newOffset
        }
        dispatch(updateQueryParams(query_params))
        dispatch(updateLastPage(last_page))
=======
>>>>>>> d9685d60ef33f6005776fca24a3d3bf39cd54703
    }
    return (
        <>
            <div className="wrapper-shop" >
<<<<<<< HEAD
                <ShopTitleComponent attribute={by} />
                <div className="row mx-5">
                    <SidebarComponent handleOnClickCate={e => handleOnClickCate(e)}
                        handleOnClickAuthor={e => handleOnClickAuthor(e)}
                        handleOnClickStar={e => handleOnClickStar(e)} />
                    <FilterComponent handleOnClickPage={e => handleOnClickPage(e)}
                        handleOnClickSort={e => handleOnClickSort(e)}
                        handlePaginateClick={(e, last_page) => handlePaginateClick(e, last_page)}
                        sort={sort}
                        show={show}
=======
                <ShopTitleComponent attribute={by}/>
                <div className="row mx-5">
                    <SidebarComponent handleOnClickCate = {e => handleOnClickCate(e)}
                                      handleOnClickAuthor = {e => handleOnClickAuthor(e)}
                                      handleOnClickStar ={ e => handleOnClickStar(e)} />
                    <FilterComponent handleOnClickPage = {e => handleOnClickPage(e)}
                                     handleOnClickSort = {e => handleOnClickSort(e)}
                                     sort={sort}
                                     show={show}
>>>>>>> d9685d60ef33f6005776fca24a3d3bf39cd54703
                    />
                </div>
            </div>
        </>
    );
}
export default Shop
