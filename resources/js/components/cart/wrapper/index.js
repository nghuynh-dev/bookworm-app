import MainTitleComponent from "../title";
import CartListComponent from "../list";

export default function WrapperCartComponent(){
    return (
        <div className="wrapper-cart">
            <MainTitleComponent />

            <CartListComponent />
        </div>
    )
}
