export default function MainTitleComponent(){
    return (
        // Main Title
        <div className="main-title mx-5 mb-4">
            <div className="main-title-information">
                <b className="main-title-information-1">{this.state.category_name}</b>
            </div>
            <hr />
        </div>
    )
}
