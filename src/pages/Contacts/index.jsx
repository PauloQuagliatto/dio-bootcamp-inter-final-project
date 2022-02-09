import { useState, useEffect } from "react";

import Container from "./styles";

const Contatos = () => {
  const { messages, addMessage, fetchMessages } = useMessage();
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [validator, setValidator] = useState(false);

  useEffect(() => {
    fetchMessages();
  }, []);

  const sendMessage = async () => {
    setValidator(false);
    if (author.length <= 0 || content.length <= 0) {
      return setValidator(!validator);
    }
    const bodyForm = {
      email: author,
      message: content,
    };

    await addMessage(bodyForm);

    setAuthor("");
    setContent("");
  };

  return (
    <Container>
      <div>
        <input
          label="Name"
          value={author}
          onChange={(email) => {
            setAuthor(e.target.value);
          }}
          fullWidth
        />
        <input
          label="Message"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          fullWidth
        />
      </div>
      <button
        onClick={sendMessage}
        className="mt-2"
        variant="contained"
        color="primary"
      >
        Send
      </button>

      {messages.map((content) => {
        return (
          <div key={content.id}>
            <div>
              <h5>{content.email}</h5>
              <p>{content.message}</p>
              <p>
                <small>{content.created_at}</small>
              </p>
            </div>
          </div>
        );
      })}
    </Container>
  );
};

export default Contatos;
