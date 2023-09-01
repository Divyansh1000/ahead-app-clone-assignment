"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Banner2 = () => {
  const animations = {
    p: {
      initial: { x: "-100%", opacity: 0 },
      whileInView: { x: 0, opacity: 1, transition: { duration: 1.5 } },
    },
    h1: {
      initial: { x: "-100%", opacity: 0 },
      whileInView: { x: 0, opacity: 1, transition: { duration: 2 } },
    },
  };

  return (
    <section className=" flex ">
      <aside className="flex-1 p-16 ">
        <motion.p {...animations.p} className="font-semibold text-xl">
          Built out of frustation
        </motion.p>
        <motion.h1 {...animations.h1} className="text-6xl font-bold mt-8">
          Meet the ahead app
        </motion.h1>
        <Image
          src="/firstghost.png"
          width={300}
          height={100}
          className="ml-8"
        />
      </aside>

      <aside className="flex-1 justify-items-center">
        <p className=" text-xl p-10 mt-40">
          A personalized pocket coach that provides bite- sized, science-driven
          tools to boost emotional intelligence.
          <br /> <br />
          Think of it as a pocket cheerleader towards a better, more fulfilling.
        </p>
      </aside>

      <div className=" block  ">
        <Image
          src="/flower.png"
          width={50}
          height={50}
          className="infinite-rotation ml-12 "
        />
        <Image
          src="/leaf.png"
          width={50}
          height={50}
          className="infinite-rotation mr-9 "
        />
      </div>
    </section>
  );
};

export default Banner2;
