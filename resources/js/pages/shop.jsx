import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getAuthor, getBookDefault, getCategory, getShow, getStar, updateQueryParams} from "../actions/shop.action";
import ShopTitleComponent from "../components/product/title";
import SidebarComponent from "../components/product/sidebar";
import FilterComponent from "../components/product/filter";

function Shop() {
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
        let query_string = `sort=${filter.sort}&show=${filter.show}`
        if(filter.type !== undefined && filter.id !== undefined){
            query_string = `sort=${filter.sort}&${filter.type}=${filter.id}&show=${filter.show}`
        }
        dispatch(getBookDefault(query_string))
    },[filter])

    const [by, setBy] = useState('')
    const handleOnClickCate = e => {
        const query_params = {
            type: 'category',
            id: e.target.dataset.id,
        }
        setBy(`Category: ${e.target.dataset.name}`)
        dispatch(updateQueryParams(query_params));
    }
    const handleOnClickAuthor = e => {
        const query_params = {
            type: 'author',
            id: e.target.dataset.id,
        }

        setBy(`Author: ${e.target.dataset.name}`)
        dispatch(updateQueryParams(query_params));
    }
    const handleOnClickStar = e => {
        const query_params = {
            type: 'star',
            id: e.target.dataset.id,
        }
        setBy(`Star: ${e.target.dataset.id} Star`)
        dispatch(updateQueryParams(query_params));
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
            sort: e.target.dataset.sort
        }
        setSort(e.target.dataset.render)
        dispatch(updateQueryParams(query_params))
    }
    return (
        <>
            <div className="wrapper-shop" >
                <ShopTitleComponent attribute={by}/>
                <div className="row mx-5">
                    <SidebarComponent handleOnClickCate = {e => handleOnClickCate(e)}
                                      handleOnClickAuthor = {e => handleOnClickAuthor(e)}
                                      handleOnClickStar ={ e => handleOnClickStar(e)} />
                    <FilterComponent handleOnClickPage = {e => handleOnClickPage(e)}
                                     handleOnClickSort = {e => handleOnClickSort(e)}
                                     sort={sort}
                                     show={show}
                    />
                </div>
            </div>
        </>
    );
}
export default Shop
