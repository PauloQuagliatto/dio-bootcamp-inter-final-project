import { Routes, Route } from "react-router-dom";

import { ContactsProvider } from "./context/ContactsContext";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/comments"
        element={
          <ContactsProvider>
            <Contacts />
          </ContactsProvider>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
