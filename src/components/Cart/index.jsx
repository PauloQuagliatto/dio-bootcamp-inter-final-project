import { Modal } from "react-modal";

import useCart from "../../hooks/useCart";

const Cart = ({isOpen, setIsOpen}) => {
    const { }
  const { cart } = useCart();
  const dispatch = useDispatch();

  const onRequestClose = () => {
    setIsOpen(false);
  }

  return (
      <Modal
        className="modal fade"
        aria-hidden="true"
        isOpen={isOpen}
        onRequestClose={onRequestClose}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="CartModalLabel">
                Meu Carrinho
              </h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th></th>
                    <th>Produto</th>
                    <th>Qtd</th>
                    <th>Preço</th>
                    <th></th>
                    <th></th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => {
                    return (
                      <tr key={item.id}>
                        <th>
                          <button
                            onClick={() =>
                              dispatch(cartActions.DeleteItem(cart, item))
                            }
                            className="badge bg-danger"
                          >
                            <i className="fas fa-window-close"></i>
                          </button>
                        </th>
                        <th>
                          <img
                            className="img-fluid img-thumbnail"
                            src={item.image}
                            alt={item.Name}
                            width="50px"
                          />
                        </th>
                        <th>
                          <span className="badge badge-pill bg-warning">
                            {item.quantity}
                          </span>
                        </th>
                        <th>R$ {item.price.toFixed(2)}</th>
                        <th>
                          <button
                            onClick={() =>
                              dispatch(cartActions.AddItem(cart, item))
                            }
                            className="badge badge-pill bg-primary"
                          >
                            <i className="fas fa-plus"></i>
                          </button>
                        </th>
                        <th>
                          <button
                            onClick={() =>
                              dispatch(cartActions.RemoveItem(cart, item))
                            }
                            className="badge badge-pill bg-danger"
                          >
                            <i className="fas fa-minus"></i>
                          </button>
                        </th>
                        <th>R$ {(item.price * item.quantity).toFixed(2)}</th>
                      </tr>
                    );
                  })}
                  <tr>
                    <th colSpan="2" scope="col">
                      Total
                    </th>
                    <th colSpan="3">{cart.value} itens</th>
                    <th colSpan="2">R$ {totalPrice.toFixed(2)}</th>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </Modal>
  );
};

export default Cart;
