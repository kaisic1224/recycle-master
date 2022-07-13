import React, { useEffect, useRef, useState } from "react";
import ChatBubble from "./ChatBubble";
import SendMessage from "./SendMessage";
import { useSession } from "next-auth/react";
import { FaCircle } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

export interface ChatMessage {
  time: string;
  sender: boolean;
  username: string;
  message: string;
}

const msgVars = {
  show: {
    transition: {
      staggerChildren: 0.2
    }
  },
  exit: {
    scale: 0,
    transitionOrigin: "left",
    transition: {
      duration: 0.5
    }
  }
};

const ballVars = {
  hidden: {
    y: -15
  },
  show: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.5,
      repeat: Infinity,
      duration: 1,
      repeatType: "reverse",
      ease: "easeIn"
    }
  }
};

const ChatWindow = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [prevMsg, setPrevMsg] = useState<ChatMessage>();
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length === 0) return;
    if (prevMsg?.sender === false) return;
    setTimeout(() => {
      listRef.current?.scrollIntoView(false);
    }, 0);

    (async () => {
      setLoading(true);
      const res = await fetch("/api/question", {
        method: "POST",
        body: new URLSearchParams({
          question: prevMsg?.message!
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
      const reply = {
        time: new Date().toLocaleString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true
        }),
        sender: false,
        username: "Recycle Master",
        message: sendMsg
      };
      setPrevMsg(reply);
      setMessages([...messages, reply]);
      setLoading(false);
      setTimeout(() => {
        listRef.current?.scrollIntoView(false);
      }, 0);
    })();
  }, [messages]);

  return (
    <>
      <div className='max-w-4xl mx-auto mr-24 bg-emerald-300 rounded-2xl'>
        <ul className='max-h-[700px] min-h-[700px] overflow-y-auto pt-4'>
          {messages.length != 0 &&
            messages.map((msg) => {
              return (
                <li>
                  <ChatBubble chat={msg} />
                </li>
              );
            })}
          <AnimatePresence>
            {loading && (
              <motion.div
                className='ml-4 p-3 flex gap-2 rounded-2xl bg-red-100 w-fit'
                variants={msgVars}
                initial='hidden'
                animate='show'
                exit='exit'
              >
                <motion.div variants={ballVars}>
                  <FaCircle />
                </motion.div>
                <motion.div variants={ballVars}>
                  <FaCircle />
                </motion.div>
                <motion.div variants={ballVars}>
                  <FaCircle />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          <div className='float-left clear-both' ref={listRef} />
        </ul>
      </div>
      <div className='max-w-4xl mx-auto mr-24'>
        <SendMessage
          messages={messages}
          setPrevMsg={setPrevMsg}
          setMessages={setMessages}
          loading={loading}
        />
      </div>
    </>
  );
};

export default ChatWindow;
