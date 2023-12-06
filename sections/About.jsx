"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import arrow from "../public/arrow-down.svg";
import Image from "next/image";

const About = () => (
  <section className={`${styles.paddings} relative z-10 `}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| What is Modbloc ?" textStyles="text-center" />
      <motion.p variants={fadeIn("up", "tween", 0.2, 1)} className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white">
        A <span className="font-extrabold text-white">Modular blockchain</span> refers to a blockchain system that is designed with a modular architecture, allowing for flexibility, scalability, and ease of customization. The modular approach involves breaking down the blockchain system into independent modules or components, each serving a specific function. This design philosophy is intended to make the blockchain more adaptable to various use cases, scalable to different requirements, and easier to maintain and upgrade.
      </motion.p>
      <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className="w-[18px] h-[28px] object-contain mt-[28px]">
        <Image src={arrow} alt="arrow" className="w-[18px] h-[28px] object-contain mt-[28px]" />
      </motion.div>
    </motion.div>
  </section>
);

export default About;
