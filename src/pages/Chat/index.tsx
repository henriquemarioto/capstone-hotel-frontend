import { useState } from "react";
import { useParams } from "react-router-dom";
import Margin from "../../components/Margin";
import { useMessages } from "../../providers/Messages";
import ButtonIcon from "../../components/ButtonIcon";
import {
  Container,
  DivMessage,
  SectionMessages,
  MessageOwner,
  MessageReceived,
  Username,
  Message,
  Hour,
  Title
} from "./style";
import { FaRegPaperPlane } from "react-icons/fa";
import { Input } from "../../components/Input";

const Chat = () => {
  const { username, room } = useParams<any>();
  const { messagesList, sendMessage } = useMessages();
  const [message, setMessage] = useState<string>("");

  return (
    <Margin>
      <Container>
        <Title>Quarto número: {room}</Title>
        <SectionMessages>
          {messagesList.map((message) => {
            if (username !== message.username) {
              return (
                <MessageOwner>
                  <Username>{message.username}</Username>
                  <Message>{message.message}</Message>
                  <Hour>
                    {new Date(message.createdAt)
                      .toLocaleTimeString()
                      .slice(0, 5)}
                  </Hour>
                </MessageOwner>
              );
            } else {
              return (
                <MessageReceived>
                  <Username>{message.username}</Username>
                  <Message>{message.message}</Message>
                  <Hour>
                    {new Date(message.createdAt)
                      .toLocaleTimeString()
                      .slice(0, 5)}
                  </Hour>
                </MessageReceived>
              );
            }
          })}
        </SectionMessages>
        <DivMessage>
          <Input
            title=""
            type="text"
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                e.currentTarget.value = "";
                sendMessage(username, room, message);
              }
            }}
          />
          <ButtonIcon
            icon={FaRegPaperPlane}
            onClick={() => {
              sendMessage(username, room, message);
            }}
          ></ButtonIcon>
        </DivMessage>
      </Container>
    </Margin>
  );
};

export default Chat;
