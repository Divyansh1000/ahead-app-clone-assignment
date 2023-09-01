"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Banner1Child2 = () => {
  const animations = {
    h1: {
      initial: { x: "-100%", opacity: 0 },
      whileInView: { x: 0, opacity: 1, transition: { duration: 1 } },
    },
    div: {
      initial: { x: "100%", opacity: 0 },
      whileInView: { x: 0, opacity: 1, transition: { duration: 1.5 } },
    },
  };
  return (
    <section>
      <article className="flex justify-around items-center">
        <div>
          <motion.h1 {...animations.h1} className="text-5xl font-bold">
            Does this sound familiar...
          </motion.h1>
        </div>
        <motion.div {...animations.div}>
          <Image
            src="/angryghost.png"
            alt="ghostpng"
            width={100}
            height={100}
            className="mr-96"
          />
        </motion.div>
      </article>

      <article>
        <div class="wrapper">
          <div class="slider">
            <div class="slide">
              <div className="card">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/742/742751.png"
                  alt="smily lodo"
                />
                <h4>You argue with a colleague</h4>
                <p>
                  This is the sample description about the title. The more
                  details the more details and evenually more details because I
                  don't have anything to write.
                </p>
              </div>
              <div className="card">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/742/742751.png"
                  alt="smily lodo"
                />
                <h4>You argue with a colleague</h4>
                <p>
                  This is the sample description about the title. The more
                  details the more details and evenually more details because I
                  don't have anything to write.
                </p>
              </div>
              <div className="card">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/742/742751.png"
                  alt="smily lodo"
                />
                <h4>You argue with a colleague</h4>
                <p>
                  This is the sample description about the title. The more
                  details the more details and evenually more details because I
                  don't have anything to write.
                </p>
              </div>
              <div className="card">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/742/742751.png"
                  alt="smily lodo"
                />
                <h4>You argue with a colleague</h4>
                <p>
                  This is the sample description about the title. The more
                  details the more details and evenually more details because I
                  don't have anything to write.
                </p>
              </div>
              <div className="card">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/742/742751.png"
                  alt="smily lodo"
                />
                <h4>You argue with a colleague</h4>
                <p>
                  This is the sample description about the title. The more
                  details the more details and evenually more details because I
                  don't have anything to write
                </p>
              </div>
            </div>

            <div class="slide">
              <div className="card">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/742/742751.png"
                  alt="smily lodo"
                />
                <h4>You argue with a colleague</h4>
                <p>
                  This is the sample description about the title. The more
                  details the more details and evenually more details because I
                  don't have anything to write
                </p>
              </div>
              <div className="card">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/742/742751.png"
                  alt="smily lodo"
                />
                <h4>You argue with a colleague</h4>
                <p>
                  This is the sample description about the title. The more
                  details the more details and evenually more details because I
                  don't have anything to write
                </p>
              </div>
              <div className="card">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/742/742751.png"
                  alt="smily lodo"
                />
                <h4>You argue with a colleague</h4>
                <p>
                  This is the sample description about the title. The more
                  details the more details and evenually more details because I
                  don't have anything to write
                </p>
              </div>
              <div className="card">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/742/742751.png"
                  alt="smily lodo"
                />
                <h4>You argue with a colleague</h4>
                <p>
                  This is the sample description about the title. The more
                  details the more details and evenually more details because I
                  don't have anything to write
                </p>
              </div>
              <div className="card">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/742/742751.png"
                  alt="smily lodo"
                />
                <h4>You argue with a colleague</h4>
                <p>
                  This is the sample description about the title. The more
                  details the more details and evenually more details because I
                  don't have anything to write
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Banner1Child2;
