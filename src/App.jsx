import { BrowserRouter as Router } from "react-router-dom";

import { CartProvider } from "./context/CartContext";

import AppRoutes from "./routes";
import GlobalStyle from "./styles/globals";

const App = () => {
  return (
    <>
      <CartProvider>
        <Router>
          <AppRoutes />
        </Router>
      </CartProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
