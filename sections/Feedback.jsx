"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";
import { TitleText, TypingText } from "../components";

const Feedback = () => (
  <section className={`${styles.paddings}`}>
    <TypingText title="Que queremos?" textStyles="text-center" />
    <TitleText title={<>Que nos Motiva?</>} textStyles="text-center mb-[25px] " />
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
          <h4 className=" font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">Mision</h4>
        </div>
        <p className=" mt-[10px] font-normal sm:text-[24px] text-[18px] sm:leading-[40.6px] leading-[30.6px] text-white">
          Facilitar el intercambio de servicios profesionales, permitiendo a los proveedores de servicios y sus clientes tener un mayor control sobre
          el tiempo dedicado y el pago por los servicios contratados, al tiempo que democratizamos el acceso a la educación y el estudio, brindando
          oportunidades de aprendizaje y desarrollo a un público más amplio.
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
          Nuestra visión es convertirnos en la plataforma líder a nivel global en servicios profesionales, ofreciendo una solución segura, eficiente y
          transparente que beneficie tanto a proveedores como a clientes, al tiempo que promovemos activamente la equidad y la democratización en el
          ámbito profesional.
        </p>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
