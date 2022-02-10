import { useContext } from "react";

import { ContactsContext } from "../context/ContactsContext";

import api from "../services/api";

const useMessage = () => {
  const { messages, setMessages } = useContext(ContactsContext);

  const fetchMessages = async () => {
    const response = await api.get("message");
    setMessages(response.data);
    return true;
  };

  const addMessage = async (message) => {
    try {
      const response = await api.post("message", message);

      setMessages([...messages, response.data]);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  return { messages, fetchMessages, addMessage };
};

export default useMessage;
