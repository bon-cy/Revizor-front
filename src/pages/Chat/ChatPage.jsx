import React, { useEffect} from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import Chat from "./Chat";


const socket = io.connect("http://localhost:3001");

const ChatPage = () => {
  const token = useSelector((state) => state.application.token);
  const username = useSelector((state) => state.application.login);
  const room = "general";


  

  useEffect(() => {
    const joinRoom = () => {
      if (username !== "" && room !== "") {
        socket.emit("join_room", room);
      }
    };
    joinRoom();
  }, []);

  return (
    <>
      {token ? (
        <div className="joinChatContainer">
          <Chat socket={socket} username={username} room={room} />
        </div>
      ) : (
        <div className="no_auth_warning">
          Чтобы зайти в чат, вы должны быть авторизованы!
        </div>
      )}
    </>
  );
};

export default ChatPage;
