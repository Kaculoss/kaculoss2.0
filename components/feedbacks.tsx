"use client";

import { fadeIn, textVariant } from "@/lib/utils";
import SectionWrapper from "./section-wrapper";
import { motion } from "motion/react";
import { testimonials } from "@/constants";
import Image from "next/image";

interface IProps {
  index: number;
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}: IProps) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-background p-10 rounded-3xl sm:w-[320px] w-full"
  >
    <p className="text-primary font-black text-[48px]">{`"`}</p>

    <div className="mt-1">
      <p className="text-primary tracking-wider text-[18px]">{testimonial}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-primary/80 font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-primary/50 text-[12px]">
            {designation} of {company}
          </p>
        </div>

        <Image
          src={image}
          alt={`feedback_by-${name}`}
          width={50}
          height={50}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <SectionWrapper idName="">
      <div className={`mt-12 bg-primary-foreground rounded-[20px]`}>
        <div
          className={`bg-accent rounded-2xl sm:px-16 px-6 sm:py-16 py-10 min-h-[300px]`}
        >
          <motion.div variants={textVariant()}>
            <p className="sm:text-[18px] text-[14px] text-primary/50 uppercase tracking-wider">
              What others say
            </p>
            <h2 className="text-primary/90 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
              Testimonials.
            </h2>
          </motion.div>
        </div>
        <div className={`-mt-20 pb-14 sm:px-16 px-6 flex flex-wrap gap-7`}>
          {testimonials.map((testimonial, index) => (
            <FeedbackCard
              key={testimonial.name}
              index={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Feedbacks;
