import { Routes, Route } from "react-router-dom";

import { ContactsProvider } from "./context/ContactsContext";
import Home from "./pages/Home";
import Messages from "./pages/Messages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/messages"
        element={
          <ContactsProvider>
            <Messages />
          </ContactsProvider>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
