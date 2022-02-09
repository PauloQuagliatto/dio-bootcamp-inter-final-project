import { createContext, useState } from "react";

const ContactsContext = createContext({});

const ContactsProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  return (
    <ContactsContext.Provider value={{ messages, setMessages }}>
      {children}
    </ContactsContext.Provider>
  );
};

export { ContactsContext, ContactsProvider };
