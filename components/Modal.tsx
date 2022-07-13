import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const text1 = "Hey there! I'm Recycle Master.";
const text2 = "You look like you asked for some help...";

const parentVars = {
  show: {
    transition: {
      staggerChildren: 1
    }
  },
  hidden: {}
};

const letterVars = {
  hidden: {
    x: -50
  },
  show: {
    x: 0,
    transition: {
      duration: 0.75
    }
  }
};

const roboAnims1 = {
  hidden: {
    x: -850
  },
  show: {
    x: 0,
    rotate: "35deg",
    y: -75,
    transition: {
      x: {
        duration: 1
      },
      rotate: {
        delay: 1.25,
        duration: 0.25,
        repeat: 1,
        repeatDelay: 0.25,
        repeatType: "reverse"
      },
      y: {
        delay: 3.5,
        duration: 0.4,
        repeat: 1,
        repeatType: "reverse"
      }
    }
  }
};

const Modal = () => {
  const [roboImg, setImg] = useState("/noTextRecycle.png");
  const [animStep, setStep] = useState(1);
  useEffect(() => {
    if (animStep === 1) return;
    setImg("/happy2.png");
  }, [animStep]);

  return (
    <div className='fixed inset-0 bg-black/60'>
      <motion.div
        className='absolute'
        variants={roboAnims1}
        initial='hidden'
        animate='show'
        onTransitionEnd={() => setStep(animStep + 1)}
      >
        <img src={`${roboImg}`} width={525} height={375} />
      </motion.div>
      <div className='bg-white'>
        <motion.h1
          className={``}
          variants={parentVars}
          initial='hidden'
          animate='show'
        >
          {text1.split("").map((letter) => (
            <motion.span
              className=''
              variants={letterVars}
              key={letter + Math.random() * 100}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>
      </div>
    </div>
  );
};
export default Modal;
