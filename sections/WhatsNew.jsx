"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { TitleText, TypingText } from "../components";
import { planetVariants, staggerContainer, fadeIn } from "../utils/motion";
import { newFeaturesss } from "../constants";
import { StartSteps } from "../components";
import conexion from "../public/conexion.png";
import Image from "next/image";

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div variants={fadeIn("right", "tween", 0.2, 1)} className="flex-[0.75] flex justify-center flex-col">
        <TypingText title="Usability" />
        <TitleText title={<>Flexibility and Upgradability</>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px] ">
          {newFeaturesss.map((feature, index) => (
            <StartSteps key={feature} number={index + 1} text={feature} />
          ))}
        </div>
      </motion.div>
      <motion.div variants={planetVariants("right")} className={`flex-1 ${styles.flexCenter}`}>
        <Image src={conexion} alt="conexion" className="w-[90%] h-[90%] object-contain" />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
