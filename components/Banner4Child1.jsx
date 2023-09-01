"use client";
import { motion } from "framer-motion";

const Banner4Child1 = () => {
  const animations = {
    h1: {
      initial: { x: "-100%", opacity: 0 },
      whileInView: { x: 0, opacity: 1, transition: { duration: 1.5 } },
    },
  };
  return (
    <section className="mx-20 h-screen">
      <motion.h1 {...animations.h1} className="text-4xl font-extrabold">
        Open Vacannies
      </motion.h1>

      <div className=" flex mt-10   justify-center">
        <div className=" m-8 p-5 border  rounded-3xl bg-amber-100 relative overflow-hidden group transform transition-transform h-52 hover:h-auto hover:bg-amber-200">
          <h3 className="text-xl font-semibold">Senior Full-Stack Engineer</h3>
          <ul className="list-disc ml-6 mt-2 ">
            <li className="py-2">Full time position</li>
            <li className="py-2">Berlin or remote</li>
            <li className="py-2">$65k-85k, 0.5-1.50% equity share option</li>
          </ul>
          <button className="mt-8 ml-4 bg-black text-white px-5 py-3 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity">
            Apply Now
          </button>
        </div>

        <div className=" m-8 p-5 border  rounded-3xl bg-amber-100 relative overflow-hidden group transform transition-transform h-52 hover:h-auto hover:bg-amber-200">
          <h3 className="text-xl font-semibold">Senior Full-Stack Engineer</h3>
          <ul className="list-disc ml-6 mt-2 ">
            <li className="py-2">Full time position</li>
            <li className="py-2">Berlin or remote</li>
            <li className="py-2">$65k-85k, 0.5-1.50% equity share option</li>
          </ul>
          <button className="mt-8 ml-4 bg-black text-white px-5 py-3 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity">
            Apply Now
          </button>
        </div>

        <div className=" m-8 p-5 border  rounded-3xl bg-amber-100 relative overflow-hidden group transform transition-transform h-52 hover:h-auto hover:bg-amber-200">
          <h3 className="text-xl font-semibold">Senior Full-Stack Engineer</h3>
          <ul className="list-disc ml-6 mt-2 ">
            <li className="py-2">Full time position</li>
            <li className="py-2">Berlin or remote</li>
            <li className="py-2">$65k-85k, 0.5-1.50% equity share option</li>
          </ul>
          <button className="mt-8 ml-4 bg-black text-white px-5 py-3 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner4Child1;
