"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import menu from "../public/menu.svg"
import Image from 'next/image';

const Navbar = () => (
  <motion.nav variants={navVariants} initial="hidden" whileInView="show" className={`${styles.xPaddings} py-8 relative`}>
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <Image src="./search.svg" alt="logo" className="w-[24px] h-[24px] object-contain" />
      <h1 className="font-extrabold text-[24px] leading-[30px] text-white">JOBZ</h1>
      <Image className="w-[24px] h-[24px] object-contain" alt="menu" src={menu} />
    </div>
  </motion.nav>
);

export default Navbar;
