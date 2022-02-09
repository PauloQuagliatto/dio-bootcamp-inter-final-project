import { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Container>
        <h3>Dio Shopping</h3>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/contato">
          <button>Contato</button>
        </Link>
        <button onClick={() => setIsOpen(true)}>
          <span>
            <BsCart />
          </span>
          <span>{cart.value}</span>
        </button>
      </Container>
      <Cart isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Header;
