"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { TypingText, ExploreCard, TitleText } from "../components";
import { exploreWorlds } from "../constants";

const Explore = () => {
  return (
    <section className={`${styles.paddings}`} id="explorer">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="About Us" textStyles="text-center" />
        <TitleText
          title={
            <>
                Who
              <br className="md:block hidden" />
                We are?
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[20px] flex lg:flex-row flex-col min-h-[70vh] gap-20  items-center justify-center">
          {exploreWorlds.map((world, index) => (
            <ExploreCard key={world.id} {...world} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
