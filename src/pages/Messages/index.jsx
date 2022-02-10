import { useState, useEffect } from "react";
import { Grid, Button, TextField } from "@material-ui/core/";

import useMessage from "../../hooks/useMessage";

const Messages = () => {
  const { messages, addMessage, fetchMessages } = useMessage();
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [validator, setValidator] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

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

    const hasSucceeded = await addMessage(bodyForm);

    if (hasSucceeded) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
      setAuthor("");
      setContent("");
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
    }
  };

  return (
    <>
      <Grid container direction="row" xs={12}>
        <TextField
          id="name"
          label="Name"
          value={author}
          onChange={(event) => {
            setAuthor(event.target.value);
          }}
          fullWidth
        />
        <TextField
          id="message"
          label="Message"
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
          fullWidth
        />
      </Grid>

      {validator && (
        <div
          className="alert alert-warning alert-dismissible fade show mt-2"
          role="alert"
        >
          <strong>Por favor preencha todos os campos!</strong>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}

      {success && (
        <div
          className="alert alert-success alert-dismissible fade show mt-2"
          role="alert"
        >
          <strong>Mensagem foi enviada</strong>
        </div>
      )}
      {error && (
        <div
          className="alert alert-success alert-dismissible fade show mt-2"
          role="alert"
        >
          <strong>Erro ao enviar a mensagem</strong>
        </div>
      )}
      <Button
        onClick={sendMessage}
        className="mt-2"
        variant="contained"
        color="primary"
      >
        Sent
      </Button>

      {messages.map((content) => {
        return (
          <div className="card mt-2" key={content.id}>
            <div className="card-body">
              <h5 className="card-title">{content.email}</h5>
              <p className="card-text">{content.message}</p>
              <p className="card-text">
                <small className="text-muted">{content.created_at}</small>
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Messages;
