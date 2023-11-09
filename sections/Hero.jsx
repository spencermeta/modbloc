"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
import banner_02 from "../public/hero_bar.jpg";

import Image from "next/image";

const Hero = () => (
  <section className={`${styles.yPaddings}  sm:pl-16 pl-6 `}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10 mb-5">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Monetiza tu Pasion
        </motion.h1>
      </div>
      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="relative w-full md:-mt-[20px] -mt-[12px]">
        <div className=" absolute w-full h-[200px]  rounded-tl-[160px] z-[0] -top-[20px] border bg-gradient-to-br from-gray-700 via-gray-900 to-black " />
        <Image src={banner_02} alt="cover" className="w-full  sm:h-[500px] object-cover rounded-tl-[140px] z-10 relative" />
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
