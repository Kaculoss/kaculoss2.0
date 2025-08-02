"use client";

import { cardVariants, iconVariants, textVariant } from "@/lib/utils";
import SectionWrapper from "./section-wrapper";
import { motion } from "motion/react";
import { experiences } from "@/constants";
import Image from "next/image";

interface IProps {
  experience: (typeof experiences)[0];
  index: number;
}

const ExperienceCard = ({ experience, index }: IProps) => {
  return (
    <div className="relative flex items-start w-full mb-12">
      {/* Timeline line - only show if not the last item */}

      <div className="absolute hidden md:block left-8 top-20 w-0.5 h-20 bg-gradient-to-b from-purple-500 to-blue-500 z-0" />

      {/* Timeline icon */}
      <motion.div
        variants={iconVariants(index)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full hidden md:flex items-center justify-center shadow-lg mt-4"
        style={{ backgroundColor: experience.iconBg }}
      >
        <div className="w-10 h-10 relative">
          <Image
            src={experience.icon}
            alt={experience.company_name}
            fill
            className="object-contain"
          />
        </div>
      </motion.div>

      {/* Content card */}
      <motion.div
        variants={cardVariants(index)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="ml-0 md:ml-6 flex-1 bg-[#1d1836] p-6 rounded-2xl shadow-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
      >
        {/* Date badge */}
        <div className="absolute -top-3 right-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm px-3 py-1 rounded-full font-medium">
          {experience.date}
        </div>

        {/* Content arrow */}
        <div className="absolute hidden md:block left-20 top-10 w-0 h-0 border-t-[8px] border-b-[8px] border-r-[12px] border-t-transparent  border-b-transparent border-r-[#1d1836] -translate-x-3" />

        <div className="pt-2">
          <h3 className="text-white text-2xl font-bold mb-2 group-hover:text-purple-300 transition-colors">
            {experience.title}
          </h3>
          <p className="text-purple-300 text-lg font-semibold mb-4">
            {experience.company_name}
          </p>

          <ul className="space-y-3">
            {experience.points.map((point, pointIndex) => (
              <motion.li
                key={`experience-point-${pointIndex}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * 0.2 + 0.6 + pointIndex * 0.1,
                  duration: 0.4,
                }}
                viewport={{ once: true }}
                className="text-gray-300 text-sm leading-relaxed flex items-start"
              >
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                <span className="group-hover:text-white transition-colors">
                  {point}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

const Experience = () => {
  return (
    <SectionWrapper idName="work">
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-primary/50 uppercase tracking-wider">
          What I have done so far
        </p>
        <h2 className="text-primary/90 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 relative">
        <div
          className="absolute hidden md:block left-8 top-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-transparent opacity-30 z-0"
          style={{ height: `${experiences.length * 320}px` }}
        />

        <div className="relative z-10">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
