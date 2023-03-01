"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="About MetaWorld" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px]
      text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">MetaWorld </span>
        the new virtual 3D experience that we are able to entrace technology as
        being live experience in the virtual world,
        <span className="font-extrabold text-white">virtual Tech</span>
        has been actively used in the gaming industry and also to improve
        technology
        <span className="font-extrabold text-white">Metaverse experience </span>
        advances at a glance
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
