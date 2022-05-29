import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useSession, signIn, signOut } from "next-auth/react";

import NavBar from "../components/NavBar";
import ChatWindow from "../components/ChatWindow";
import { MotionConfig } from "framer-motion";
import { motion } from "framer-motion";

const vars = {
  hidden: {y: 100, opacity: 0},
  visible: {y: 0, opacity: 1}
}

const vars2 = {
  visible: {
    transition: {
      staggerChildren: 0.1}
    }
}

const Home: NextPage = () => {
  const start = "Get Started".split("");

  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <Head>
          <title>Recycle Master</title>
        </Head>
        <NavBar />
        <div className="relative">
          <img src="/twoPlantPic.jpg" className="aspect-video h-full -z-50" />
        </div>
        <div className="absolute font-bold text-5xl text-white z-50 -translate-x-1/2 -translate-y-1/2 -right-[10%] top-1/2">
          <p className="whitespace-pre-line max-w-2xl">
            Welcome, {session?.user?.name}
          </p>
          <button
            className="pt-1 pb-2 px-2 bg-amber-400 text-3xl rounded-2xl mt-6 font-bold"
            onClick={() => signOut()}
          >
            Log Out
          </button>
        </div>
        <div className="relative bg-lime-100 h-screen pt-8">
          <ChatWindow />
          <img src="/realRecycleMaster.png" className="absolute -left-48 bottom-1/4 rotate-12 select-none"/>
        </div>
      </>
    );
  }
  return (
    <>
      <Head>
        <title>Recycle Master</title>
      </Head>
      <NavBar />
      <div className="relative">
        <img src="/twoPlantPic.jpg" className="aspect-video h-full -z-50" />
      </div>
      <div className="absolute font-bold text-5xl text-white z-50 -translate-x-1/2 -translate-y-1/2 right-[10%] top-1/2">
        <motion.p variants={vars2} initial="hidden" animate="visible">{start.map((letter) => (
          <motion.span variants={vars}>
            {letter}
          </motion.span>
        ))}</motion.p>
        <motion.button initial={{y: 200, opacity: 0}} animate={{y: 0, opacity: 1, transition: {type: "spring", bounce: 0.2}}} whileTap={{scale:0.9}}
          className="pt-1 pb-2 px-2 bg-amber-400 text-3xl rounded-2xl mt-6 font-bold hover:bg-amber-300 shadow-md"
          onClick={() => signIn()}
        >
          Sign In
        </motion.button>
      </div>
      <div className="relative bg-lime-100 h-screen pt-8">
        <div>
          <ChatWindow />
        </div>
        <img src="/realRecycleMaster.png" className="absolute -left-48 bottom-1/4 rotate-12 select-none"/>
      </div>
    </>
  );
};

export default Home;
