import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "@material-ui/core/";

import { CartProvider } from "./context/CartContext";

import AppRoutes from "./routes";

import Header from "./components/Header";

const App = () => {
  return (
    <>
      <CartProvider>
        <Container maxWidth="xl">
          <Router>
            <Header />
            <AppRoutes />
          </Router>
        </Container>
      </CartProvider>
    </>
  );
};

export default App;
