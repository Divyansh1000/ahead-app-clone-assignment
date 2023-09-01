"use client";
import { motion } from "framer-motion";

const Banner3Child1 = () => {
  return (
    <article className="flex flex-col items-center justify-center h-screen m-40">
      <p className="font-medium">We take privacy seriously</p>
      <h1 className="text-3xl font-bold py-3">Before you get started </h1>
      <motion.p
        initial={{ opacity: 0, translateY: -50 }}
        whileInView={{
          opacity: 1,
          translateY: 0,
          transition: { duration: 1, delay: 0.5 },
        }}
        className="tracking-wider text-center"
      >
        "We won't share your answers with anyone (and won't even tell
        <br />
        you which friends said what about you)"
      </motion.p>

      <div className="flex my-5">
        <p className="px-5">with love, </p>
        <motion.img
          src="/sign.png"
          alt="signature"
          width={100}
          height={200}
          initial={{ opacity: 0, translateX: -50 }}
          whileInView={{
            opacity: 1,
            translateX: 0,
            transition: { duration: 1, delay: 0.5 },
          }}
        />
      </div>

      <motion.a
        initial={{ opacity: 0, translateY: -50 }}
        whileInView={{
          opacity: 1,
          translateY: 0,
          transition: { duration: 1, delay: 0.5 },
        }}
        className=" bg-black p-4 w-32 text-center rounded-full text-white text-sm"
        href="http://google.com"
      >
        <button>Start a test</button>
      </motion.a>

      <p className="pt-5 font-extralight text-sm">Take only 5 minutes</p>
    </article>
  );
};

export default Banner3Child1;
