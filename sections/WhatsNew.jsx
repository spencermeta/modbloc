"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { TitleText, TypingText } from "../components";
import { planetVariants, staggerContainer, fadeIn } from "../utils/motion";
import { newFeatures } from "../constants";
import { NewFeatures } from "../components";
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
        <TypingText title="Segura" />
        <TitleText title={<>Conexión con Plataformas de Reuniones</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px] ">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>
      <motion.div variants={planetVariants("right")} className={`flex-1 ${styles.flexCenter}`}>
        {/* <Image src="/algorand_bc.png" alt="algo" className="w-[90%] h-[90%] object-contain" /> */}
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
