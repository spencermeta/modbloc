"use client";

/*eslint-disable */
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn } from "../utils/motion";
import Image from "next/image";

const ExploreCard = (props) => (
  <motion.div
    variants={fadeIn("right", "spring", props.index * 0.5, 0.75)}
    className="relative  flex  items-center justify-center min-w-[280.5px]
    h-[650px]"
  >
    <Image src={props.imgUrl} alt={props.title} className="absolute w-full h-full object-cover rounded-[24px]" />
    <div className="absolute object-cover  p-8 flex justify-start w-full h-full flex-col bg-[rgba(0,0,0,0.5)] rounded-[24px]">
      <Image
        src={props.imgAvatar}
        className={`${styles.flexCenter}  w-[120px] h-[120px] rounded-[24px] glassmorphism mb-[5px] border justify-center ml-2`}
      />
      <h2 className="mt-[3px] leading-none font-semibold sm:text-[38px] text-[12px] text-white  ">{props.title}</h2>
      <h3 className="mt-[15px] font-semibold sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">{props.subtitle}</h3>
      <p className="mt-[15px] text-[15px] leading-[20.16px] text-white uppercase tracking-tighter font-extralight">{props.explorerText}</p>
    </div>
  </motion.div>
);

export default ExploreCard;
/*eslint-enable */
