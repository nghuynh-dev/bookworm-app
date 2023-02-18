import MainTitleComponent from "../components/cart/title";
import CartListComponent from "../components/cart/list";

export default function Cart() {
    return (
        <div className="wrapper-cart">
            <MainTitleComponent />
            <CartListComponent />
        </div>
    );
}
