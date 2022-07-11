<<<<<<< HEAD
export default function ShopTitleComponent(props) {
=======
export default function ShopTitleComponent(props){
>>>>>>> d9685d60ef33f6005776fca24a3d3bf39cd54703
    const attribute = props.attribute;
    return (
        <div className="main-title mx-5">
            <div className="main-title-information">
                <b className="main-title-information-1">Books</b>
                {attribute.length > 0 ? (<span className="ml-3">(Filtered by {attribute})</span>) : (<></>)}
            </div>
            <hr />
        </div>
    )
}
