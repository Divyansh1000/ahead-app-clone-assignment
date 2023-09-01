"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Banner1 = () => {
  const animations = {
    div: {
      initial: { x: "-10%", opacity: 0 },
      whileInView: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    },
    img: {
      initial: { scale: 0 },
      animate: { rotate: -360, scale: 1 },
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
  };

  return (
    <section className="flex ">
      <aside className=" flex-1 px-14  py-40">
        <motion.div {...animations.div}>
          <p className="py-5 font-medium">Ahead app</p>
          <h1 className="text-6xl font-bold">
            Master your life <br /> by mastering <br /> emotions{" "}
          </h1>
        </motion.div>

        <div className="flex gap-12 py-8">
          <Image
            src="/appStoreLogo.png"
            alt="appStoreLogo"
            width={120}
            height={120}
          />

          <div className="">
            <span class="fa fa-star text-yellow-500 px-2"></span>
            <span class="fa fa-star text-yellow-500 px-2"></span>
            <span class="fa fa-star text-yellow-500 px-2"></span>
            <span class="fa fa-star text-yellow-500 px-2"></span>
            <span class="fa fa-star text-yellow-500 px-2"></span>

            <div className="font-thin">100+ App Store reviews</div>
          </div>
        </div>
      </aside>

      <aside className="object-contain m-auto pr-16">
        <motion.img
          {...animations.img}
          src="/banner-image-removebg-preview.png"
          alt="banner"
          width={500}
          height={500}
        />
      </aside>
    </section>
  );
};

export default Banner1;
