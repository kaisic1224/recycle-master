import React, { useEffect, useState } from "react";
import ChatBubble from "./ChatBubble";
import SendMessage from "./SendMessage";
import { useSession } from "next-auth/react";
import { stringify } from "querystring";

export interface ChatMessage {
  time: string;
  sender: boolean;
  username: string;
  message: string;
}

const ChatWindow = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const { data: session } = useSession();
  useEffect(() => {
    (async () => {
      const res = await fetch("/api/question", {
        method: "POST",
        body: new URLSearchParams({
          question: "Where do we throw plastic forks?"
        })
      });
      const data = await res.json();
      const prediction = data[0].prediction;

      const res2 = await fetch(
        "/api/response?" + new URLSearchParams({ prediction: prediction })
      );
      const data2 = await res2.json();
      const hashtag = data2.generations[0].text.split("\n")[0];
      const sendMsg = `Throw it in the ${prediction} ${hashtag}`;

      setMessages([...messages, {
          time: new Date().toLocaleString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true, 
        }), sender: false, username: "Recycle Master", message: sendMsg}])
    }) ()
  }, [messages])
  
  return (
    <>
      <div className="max-w-4xl mx-auto mr-24 bg-emerald-300 rounded-2xl">
        <ul className="max-h-[700px] min-h-[700px] overflow-y-auto">
          {messages.length != 0 &&
            messages.map((msg) => {
              return (
                <li>
                  <ChatBubble chat={msg} />
                </li>
              );
            })}
        </ul>
      </div>
      <div className="max-w-4xl mx-auto mr-24">
        <SendMessage messages={messages} setMessages={setMessages} />
      </div>
    </>
  );
};

export default ChatWindow;
