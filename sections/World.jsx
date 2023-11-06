"use client";

import { motion } from "framer-motion";

import styles from "../styles";

import { TitleText, TypingText } from "../components";
import { staggerContainer, fadeIn } from "../utils/motion";
import Image from 'next/image';


const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="Prototipo" textStyles="text-center" />
      <TitleText title={<>Video de como funciona</>} textStyles="text-center" />

      <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className="relative  mt-[68px]  flex w-full h0 [550px] ">
        <Image src="/video.png" alt="map" className="w-full  h-full object-cover" />
      </motion.div>
    </motion.div>
  </section>
);

export default World;
