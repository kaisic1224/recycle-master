import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useSession, signIn, signOut } from "next-auth/react";

import ChatBubble from "../components/ChatBubble";
import SendMessage from "../components/SendMessage";
import ChatWindow from "../components/ChatWindow";

import NavBar from "../components/NavBar";
import ChatWindow from "../components/ChatWindow";


const Home: NextPage = () => {
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>Recycle Master</title>
      </Head>
      <NavBar />
        <div className='relative'>
          <img src="/twoPlantPic.jpg" className="aspect-video h-full -z-50" />
        </div>
        <div className="absolute font-bold text-5xl text-white z-50 -translate-x-1/2 -translate-y-1/2 right-[10%] top-1/2">
          Get Started
        </div>
        <div className="bg-lime-100 h-screen pt-8">
          <ChatWindow />
        </div>

 
    </>
  );
};

export default Home;
