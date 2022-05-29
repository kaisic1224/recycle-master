import React from "react";
import { signIn } from "next-auth/react";
import Head from "next/head";

const signin = () => {
  return (
    <>
      <Head>
        <title>Sign In | Recycle Master</title>
      </Head>
      <div className="text-center w-screen h-screen grid place-items-center bg-[#B2D237]">
        <div>
          <div className="flex flex-col">
            <h1 className="text-white text-6xl font-bold translate-y-5 pr-4">
              Sign in to EXPERIENCE
            </h1>
            <img src="/water.gif" className="h-72 object-cover select-none"/>
          </div>
          <button
            className="p-4 text-2xl font-bold bg-sky-500 rounded-2xl shadow-2xl hover:bg-sky-700"
            onClick={() => signIn("google", { callbackUrl: "/" })}
          >
            Sign In
          </button>
        </div>
      </div>
    </>
  );
};

export default signin;