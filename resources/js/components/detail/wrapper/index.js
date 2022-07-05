export default function WrapperDetailComponent(){
    return (
        <>
            {book ? (
                <div className="wrapper-detail">
                    <MainTitle category={book.category} />
                    <div className="mx-5">
                        <Describe book={book} />
                        <Review idBook = {idBook} />
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    )
}
