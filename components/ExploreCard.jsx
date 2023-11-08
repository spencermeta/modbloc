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
    h-[500px]"
  >
    <Image src={props.imgUrl} alt={props.title} className="absolute w-full h-full object-cover rounded-[24px]" />
    <div className="absolute  p-8 flex justify-start w-full h-full flex-col bg-[rgba(0,0,0,0.5)] rounded-[24px]">
      <Image
        src={props.imgAvatar}
        className={`${styles.flexCenter} w-[100px] h-[100px] rounded-[24px] glassmorphism mb-[5px] border object-contain justify-center ml-2`}
      />
      <h2 className="mt-[3px] font-semibold sm:text-[32px] text-[24px] text-white ">{props.title}</h2>
      <h2 className="mt-[5px] font-semibold sm:text-[12px] text-[12px] text-white ">{props.subtitle}</h2>
      <p className="mt-[5px] font-normal text-[16px] leading-[20.16px] text-white ">{props.explorerText}</p>
    </div>
  </motion.div>
);

export default ExploreCard;
/*eslint-enable */
