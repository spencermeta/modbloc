"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

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
        <span className="font-extrabold text-white">Jobz</span> es una innovadora aplicación diseñada para ayudar a los creadores de contenido de
        streaming a maximizar sus ingresos mientras comparten su pasión con su audiencia en tiempo real. Con Jobz, puedes convertir tu tiempo de
        streaming en una fuente de ingresos constante y sostenible.
        <span className="font-extrabold text-white">En Jobz, los streamers tienen la posibilidad de ganar dinero en tiempo real</span> mientras se
        conectan con sus seguidores. Los espectadores pueden expresar su apoyo enviando donaciones y regalos virtuales directamente durante las
        transmisiones, creando una experiencia inmediata y gratificante. Además, los creadores pueden cultivar una comunidad leal y comprometida
        ofreciendo suscripciones a sus canales, que incluyen ventajas exclusivas como emoticonos personalizados, insignias de suscriptores y acceso a
        contenido premium. Los streamers pueden establecer sus propios <span className="font-extrabold text-white"> precios y tarifas </span> precios
        y tarifas para servicios personalizados en un mercado virtual en la aplicación
      </motion.p>
      <motion.img variants={fadeIn("up", "tween", 0.3, 1)} src="/arrow-down.svg" alt="arrow" className="w-[18px] h-[28px] object-contain mt-[28px]" />
    </motion.div>
  </section>
);

export default About;
