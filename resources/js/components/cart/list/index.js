import { Alert, Modal, Button } from 'react-bootstrap';

export default function CartListComponent(){
    return(
        <div className="mx-5 mb-4">
            <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-12 list-cart">
                    <table className="table table-responsive-lg border">
                        <thead>
                        <tr>
                            <th scope="col" colSpan="2" className="pl-4">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Total</th>
                        </tr>
                        </thead>
                        <tbody>
                        {bookCarts}
                        </tbody>
                    </table>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 place-order">
                    <div className="card">
                        <div className="card-header text-center">
                            <span className="h5"><b>Cart Totals</b></span>
                        </div>
                        <div className="card-body px-5">
                            <h4 className="card-title my-4"><b>${total.toFixed(2)}</b></h4>
                            <button type="button" className="btn btn-secondary btn-place-order mb-3"
                                    id="btn-place-order" onClick={() => this.setState({show: true})}
                            >
                                <b>Place order</b>
                            </button>
                        </div>
                    </div>
                    <Modal show={show} onHide={() => this.setState({show : false})}>
                        <Modal.Header closeButton>
                            <Modal.Title>Place order</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Are you sure to order?</Modal.Body>
                        <Modal.Footer>
                            <Button variant="outline-dark" onClick={() => this.setState({show : false})}>
                                Close
                            </Button>
                            <Button variant="secondary" onClick={this.handleSubmitDataCart.bind(this, carts)}>
                                Order
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    {showAlert ? (
                        <Alert variant="secondary" className="mt-5 text-center">
                            <Alert.Heading>Order Success</Alert.Heading>
                            Go back to <Alert.Link as={Link} to="/">Home Page</Alert.Link> after {seconds} seconds
                        </Alert>
                    ):<></>}
                    {showError && !isNull(isError) ? (
                        <Alert variant="warning" className="mt-5 text-center">
                            <Alert.Heading>Order Failed</Alert.Heading>
                            {isError}
                        </Alert>
                    ):<></>}
                </div>
            </div>
        </div>
    )
}
