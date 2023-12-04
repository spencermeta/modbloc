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
      <TypingText title="| What is Ziyou ?" textStyles="text-center" />
      <motion.p variants={fadeIn("up", "tween", 0.2, 1)} className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white">
        <span className="font-extrabold text-white">Ziyou</span> is a platform based on{" "}
        <span className="font-extrabold text-white">blockchain technology</span> that allows professionals from different industries, such as lawyers,
          developers, private teachers, psychologists, and more,
        <span className="font-extrabold text-white">to offer its services in a more flexible and transparent manner.</span>
          Users can contract services and make payments securely through our platform. Our technology encrypts all
          transactions, which guarantees the
        <span className="font-extrabold text-white"> security </span>
          of funds and the integrity of records.
      </motion.p>
      <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className="w-[18px] h-[28px] object-contain mt-[28px]">
        <Image src={arrow} alt="arrow" className="w-[18px] h-[28px] object-contain mt-[28px]" />
      </motion.div>
    </motion.div>
  </section>
);

export default About;
