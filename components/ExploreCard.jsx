"use client";

/*eslint-disable */
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn } from "../utils/motion";
import Image from "next/image";

const ExploreCard = (props) => (
  <motion.div
    variants={fadeIn("right", "spring", props.index * 0.5, 0.75)}
    className="relative  flex items-center justify-center min-w-[280.5px]
    h-[500px] transition-[flex] duration-[0.7s]
    ease-out-flex"
  >
    {/* <Image src={props.imgUrl} alt={props.title} className="absolute w-full h-full object-cover rounded-[24px]" /> */}
    {props.active !== props.id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {props.title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        <div className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}>
          {/* <Image src="/headset.svg" alt="headset" className="w-1/2 h-1/2 object-contain" /> */}
        </div>
        <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">{props.title}</h2>
        <p className="font-normal text-[16px] leading-[20.16px] text-white">{props.explorerText}</p>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
/*eslint-enable */
