"use client";

import { staggerContainer } from "@/lib/utils";
import { motion } from "motion/react";

interface IProps {
  children: React.ReactNode;
  idName: string;
}

const SectionWrapper = ({ children, idName }: IProps) => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0`}
    >
      <span className="hash-span" id={idName}>
        &nbsp;
      </span>

      {children}
    </motion.section>
  );
};

export default SectionWrapper;
