"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Banner4 = () => {
  const animations = {
    h1: {
      initial: { x: "-100%", opacity: 0 },
      whileInView: { x: 0, opacity: 1, transition: { duration: 1 } },
    },

    h2: {
      initial: { x: "100%", opacity: 0 },
      whileInView: { x: 0, opacity: 1, transition: { duration: 1.5 } },
    },
  };

  return (
    <section className=" flex pt-20  overflow-auto">
      <aside className="flex-1  pl-10 ">
        <motion.h1 {...animations.h1} className="text-6xl font-bold mx-20">
          Work With Us
        </motion.h1>

        <div className="m-10 bg-white rounded-3xl  ">
          <div className=" p-5 pb-10 ">
            <Image src="/happyghost.png" alt="" width={100} height={60} />
            <h4 className="font-semibold pb-5 text-lg">About</h4>
            <p>
              At head our goal is to make self-improvement fun and lasting. We
              know there's a way how to make it work. And that's what aHead is
              all abount
            </p>
          </div>

          <div className="bg-rose-50 p-5 pb-10 rounded-3xl  ">
            <h4 className="font-semibold pt-5 text-lg pb-5 ">Product</h4>
            <p>
              Sure, you could spend ages reading books or sitting in semunars on
              how to become a better spouse, parent, or manager - like we did...
            </p>
          </div>
        </div>
      </aside>

      <aside className="flex-1 pr-10 overflow-hidden">
        <motion.h2
          {...animations.h2}
          className="text-6xl font-semibold text-right text-violet-600 mx-20"
        >
          ahead
        </motion.h2>

        <div className="card-container">
          <div className="card-content">
            <div className="card ">
              <h4 className="font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
                sit?
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
                laudantium libero omnis molestias, aliquam eaque fuga cupiditate
                soluta autem deserunt.
              </p>
            </div>
            <div className="card">
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
                sit?
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
                laudantium libero omnis molestias, aliquam eaque fuga cupiditate
                soluta autem deserunt.
              </p>
            </div>
            <div className="card">
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
                sit?
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
                laudantium libero omnis molestias, aliquam eaque fuga cupiditate
                soluta autem deserunt.
              </p>
            </div>
            <div className="card">
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
                sit?
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
                laudantium libero omnis molestias, aliquam eaque fuga cupiditate
                soluta autem deserunt.
              </p>
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default Banner4;
