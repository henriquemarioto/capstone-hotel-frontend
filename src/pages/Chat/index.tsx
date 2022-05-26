import { useState } from "react";
import { useParams } from "react-router-dom";
import { useMessages } from "../../providers/Messages";

const Chat = () => {
  const {username, room} = useParams<any>()
  const {messagesList, sendMessage} = useMessages()
  const [message, setMessage] = useState<string>("")

  return (
    <>
      Chat
      <input
        type="text"
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => {
          e.key === "Enter" && sendMessage(username, room, message);
        }}
      />
      <button onClick={() => sendMessage(username, room, message)}>&#9658;</button>

      {messagesList.map(messages => 
      <>
        <p>{messages.message}</p> - <p>{messages.username}</p> 
      </>
      )}
    </>
  );
};

export default Chat;