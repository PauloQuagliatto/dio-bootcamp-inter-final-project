import { useContext } from "react";

import { ContactsContext } from "../context/ContactsContext";

const useMessage = () => {
  const { messages, setMessages } = useContext(ContactsContext);

  const fetchMessages = async () => {
    const response = await api.get("message");
    setMessages(response.data);
  };

  const addMessage = async (message) => {
    const response = await api.post("message", message);

    setMessages([...messages, response.data]);
  };

  return { messages, fetchMessages, addMessage };
};

export default useMessage;
