import { getBookBanner, getBookPopular, getBookRecommend } from "../actions";
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import BannerComponent from "../components/home/banner";
import FeatureComponent from "../components/home/feature";

export default function Home() {
    const dispatch = useDispatch();

    const getRecommend = () => dispatch(getBookRecommend());
    const getPopular = () => dispatch(getBookPopular());

    useEffect(() => {
        dispatch(getBookBanner());
        getRecommend();
    }, []);

    const handleOnChangeButton = (e) => {
        if (e === 'recommend') {
            getRecommend();
        } else {
            getPopular();
        }
    };

    return (
        <>
            <BannerComponent />
            <FeatureComponent handleOnChange={handleOnChangeButton} />
        </>
    );
}
