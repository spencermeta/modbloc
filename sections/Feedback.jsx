"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";
import { TitleText, TypingText } from "../components";

const Feedback = () => (
  <section className={`${styles.paddings}`}>
    <TypingText title="What we want?" textStyles="text-center" />
    <TitleText title={<>What Motivates Us?</>} textStyles="text-center mb-[25px] " />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col justify-center items-stretch gap-20 `}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className=" flex-[0.5] lg:max-w-[370px] flex  flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className=" font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">Mission</h4>
        </div>
        <p className=" mt-[10px] font-normal sm:text-[24px] text-[18px] sm:leading-[40.6px] leading-[30.6px] text-white">
          Modular blockchains are seen as a way to address some of the challenges associated with traditional monolithic blockchain architectures. However, it's essential to strike a balance between modularity and system complexity, ensuring that the benefits of flexibility and customization do not compromise overall system integrity and security. Various blockchain projects and platforms are exploring and implementing modular architectures to achieve these objectives.
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className=" flex-[0.5] lg:max-w-[370px] flex  flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">Vision</h4>
        </div>
        <p className="mt-[10px] font-normal sm:text-[24px] text-[18px] sm:leading-[40.6px] leading-[30.6px] text-white">
          Our vision is to become the leading global platform for professional services, offering a secure, efficient and transparent solution that benefits both suppliers and clients, while actively promoting fairness and democratization in the
          solution that benefits both providers and clients, while actively promoting fairness and democratization in the professional arena.
          professional environment.
        </p>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
