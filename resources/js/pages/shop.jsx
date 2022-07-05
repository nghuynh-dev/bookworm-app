import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAuthor, getCategory, getStar } from "../actions/shop.action";
import ShopTitleComponent from "../components/product/title";
import SidebarComponent from "../components/product/sidebar";
import FilterComponent from "../components/product/filter";

function Shop() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategory());
        dispatch(getAuthor());
        dispatch(getStar());
    }, [])
    return (
        <>
            <div className="wrapper-shop">
                <ShopTitleComponent />
                <div className="row mx-5">
                    <SidebarComponent />
                    <FilterComponent />
                </div>
            </div>
        </>
    );
}
export default Shop
