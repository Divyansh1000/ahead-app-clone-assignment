"use client";
import { motion } from "framer-motion";

const Banner2Child1 = () => {
  const animations = {
    div: {
      initial: { x: "-100%", opacity: 0 },
      whileInView: { x: 0, opacity: 1, transition: { duration: 1.5 } },
    },
  };

  return (
    <section>
      <article className="flex mt-20  mb-10 pl-40">
        <motion.div {...animations.div}>
          <p className="font-medium text-xl">
            Wrong with self-improvement & how we're fixing it
          </p>
          <h1 className="text-6xl font-bold mt-6">Self-improvement. Ugh</h1>
        </motion.div>
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1, transition: { duration: 1.5 } }}
        >
          <img src="/cryingghost.png" alt="ghostpng" width={100} height={100} />
        </motion.div>
      </article>

      <article className="flex items-center  justify-center  ">
        <div class="scroll-container  ">
          <div class="scroll-content">
            <div>
              <h4>It's not as easy as 1-2-3.</h4>
              <p>
                The journey of change may be long, but our sessin are quick. We
                get to the point and tell you what you want to know (and nothing
                else).
              </p>
            </div>
            <div>
              <h4>Old habits are hard to break.</h4>
              <p>
                And bad behaviors die hard. Fortunately, we give you great,
                science- backed techniques to use.
              </p>
            </div>
            <div>
              <h4>
                You and your motivation don't have a long-term relationship.
              </h4>
              <p>
                Luckily, we can proactively prepare you for the marathon, not
                just the race. Effective, memorable exercises will help you
                stick to your goals.
              </p>
            </div>
            <div>
              <h4>Books just don't offer practical</h4>
              <p>
                Remember when you learned to ride a bike just by reading ? Yeah.
                we don't either. We help you take concrete small steps towards
                your goals. Learning just a bit , then immediatelyspringing into
                action.
              </p>
            </div>
            <div>
              <h4>Inspiration is great, but then what</h4>
              <p>
                We make sure your energy from all the content you consume does
                not frizzle out.
              </p>
            </div>
            <div>
              <h4>It's not as easy as 1-2-3.</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Asperiores, optio!
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Banner2Child1;
