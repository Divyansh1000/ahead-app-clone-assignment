"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Banner3 = () => {
  return (
    <section>
      <aside className="flex flex-col justify-center items-center py-16 mx-8 ">
        <p>
          Let your friends, family and co-worker (anonymously) rate your skills.
        </p>
        <h1 className="text-6xl font-extrabold py-8 ">
          Ever wondered what others think of you?{" "}
        </h1>

        <Image src="/sun-ranking.png" alt="" width={1000} height={1000} />

        <motion.div
          initial={{ opacity: 0, translateY: -100 }}
          whileInView={{
            opacity: 1,
            translateY: 0,
            transition: { duration: 1 },
          }}
          className="flex text-center py-4"
        >
          <p className="w-1/3">Answer questions on your social skills</p>
          <p className="w-1/3">
            Let others anonymously answer the same questions about you.
          </p>
          <p className="w-1/3">
            Find out where you and others see things the same way - and where
            not.
          </p>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, translateY: -100 }}
          whileInView={{
            opacity: 1,
            translateY: 0,
            transition: { duration: 1, delay: 0.75 },
          }}
          src="/gif.png"
          alt="message-imagee"
          width={800}
          height={500}
        />
      </aside>
    </section>
  );
};

export default Banner3;
