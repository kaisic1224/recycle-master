import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useSession, signIn, signOut } from "next-auth/react";

import ChatBubble from "../components/ChatBubble";
import SendMessage from "../components/SendMessage";
import ChatWindow from "../components/ChatWindow";

import NavBar from "../components/NavBar";


const Home: NextPage = () => {
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title></title>
      </Head>
      <NavBar />
      <ChatWindow />

 
    </>
  );
};

export default Home;
