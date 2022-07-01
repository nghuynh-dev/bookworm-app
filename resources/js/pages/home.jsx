import Banner from "../components/home/banner";
import Feature from "../components/home/feature";
import { getBookBanner } from "../actions";
import { connect } from 'react-redux';
import {useEffect} from "react";


function Home(props){
    const getBanner = props.books;
    useEffect(() => {
        const content = getBanner()
        console.log(content)
        // getBanner();
    } ,[])
    useEffect(() => console.log(props.bannerList),[props.bannerList])
    return(
        <>
            <Banner list={props.bannerList}/>
            <Feature />
        </>
    );
}
const mapStateToProps = (state) => ({
    bannerList: state.homeBannerList,
})
const mapDispatchToProps = (dispatch) => {
    return {
        books: () => dispatch(getBookBanner()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
