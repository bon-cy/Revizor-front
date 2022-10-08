import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import axios from "axios";
import { useSelector } from "react-redux";
import styles from "./chat.module.css";
import { format } from "timeago.js";

const Chat = ({ socket, username, room, avatar}) => {
  const id = useSelector((state) => state.application.id);
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get("http://localhost:4000/messages");
        setMessages(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMessages();
  }, []);

  const sendMessage = async () => {
    await axios.post("http://localhost:4000/messages", {
      text: currentMessage,
      author: id,
    });

    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        avatar: avatar,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <>
      <div className={styles.chat_window}>
        <div className={styles.chat_header}>
          <p>Live Chat</p>
        </div>
        <div className={styles.chat_body}>
          <ScrollToBottom className={styles.message_container}>
            {messages.map((mess, index) => {
              return (
                <div
                  key={index}
                  className={styles.message}
                  id={mess.author._id === id ? styles.you : styles.other}
                >
                  <img
                    src={`http://localhost:4000/public/avatar/${mess.author.avatar}`}
                    alt=""
                  />
                  <div className={styles.mess_wrap}>
                    <div className={styles.message_content}>
                      <p>{mess.text}</p>
                    </div>
                    <div className={styles.message_meta}>
                      <p id={styles.time}>{format(mess.createdAt)}</p>
                      <p id={styles.author}>{mess.author.login}</p>
                    </div>
                  </div>
                </div>
              );
            })}
            {messageList.map((messageContent, index) => {

              return (
                <div
                  key={index}
                  className={styles.message}
                  id={
                    username === messageContent.author
                      ? styles.you
                      : styles.other
                  }
                >
                   <img
                    src={`http://localhost:4000/public/avatar/${messageContent.avatar}`}
                    alt=""
                  />
    
                  <div className={styles.mess_wrap}>
                    <div className={styles.message_content}>
                      <p>{messageContent.message}</p>
                    </div>
                    <div className={styles.message_meta}>
                      <p id={styles.time}>{messageContent.time}</p>
                      <p id={styles.author}>{messageContent.author}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </ScrollToBottom>
        </div>
      </div>
      <div className={styles.chat_footer}>
        <input
          type="text"
          value={currentMessage}
          placeholder="hey..."
          onChange={(e) => setCurrentMessage(e.target.value)}
          onKeyPress={(e) => {
            e.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </>
  );
};

export default Chat;
