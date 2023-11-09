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
      <TypingText title="| Que es Jobz ?" textStyles="text-center" />
      <motion.p variants={fadeIn("up", "tween", 0.2, 1)} className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white">
        <span className="font-extrabold text-white">Jobz</span> es una plataforma basada en{" "}
        <span className="font-extrabold text-white">tecnología blockchain</span> que permite a profesionales de diferentes industrias, como abogados,
        desarrolladores, profesores particulares, psicólogos, y más,
        <span className="font-extrabold text-white">ofrecer sus servicios de una manera más flexible y transparente.</span>
        Los usuarios pueden contratar servicios y realizar pagos de manera segura a través de nuestra plataforma. Nuestra tecnología encripta todas
        las transacciones, lo que garantiza la
        <span className="font-extrabold text-white">seguridad</span>
        de los fondos y la integridad de los registros.
      </motion.p>
      <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className="w-[18px] h-[28px] object-contain mt-[28px]">
        <Image src={arrow} alt="arrow" className="w-[18px] h-[28px] object-contain mt-[28px]" />
      </motion.div>
    </motion.div>
  </section>
);

export default About;
