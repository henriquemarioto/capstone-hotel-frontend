import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";
import { connect } from "socket.io-client";
import { apiChat } from "../../services/apiChat";


interface Messages {
  username: string
  room: string
  message: string
}

interface MessagesContextData {
  messagesList: Messages[]
  joinRoom: (username: string, room: string) => void
  sendMessage:  (username: string, room: string, message: string) => void
}

interface Props {
  children: ReactNode
}
const socket = connect(apiChat);

const MessagesContext = createContext<MessagesContextData>({} as MessagesContextData)

export const MessagesProvider = ({children}: Props) => {
  const [messagesList, setMessagesList] = useState<Messages[]>([]);
  const history = useHistory<unknown>()


  const joinRoom = (username: string, room: string) => {

    if (username) {
      socket.emit("join_room", room, (data:any) => {
        setMessagesList(data);
      });
      history.push(`/chat/${room}/${username}`);
    }
    else {
      toast.error("Username is required")
    }
  };
  const sendMessage = (username: string, room: string, message: string) => {
    if (message) {
      const data = {
        username,
        room,
        message
      } 
      
      socket.emit("send_message", data)
      setMessagesList((list) => [...list, data]);
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessagesList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <MessagesContext.Provider value={{messagesList, joinRoom, sendMessage}}>
      {children}
    </MessagesContext.Provider>
  )
}

export const useMessages = () => useContext(MessagesContext)