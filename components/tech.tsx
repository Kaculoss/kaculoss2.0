"use client";

import { textVariant } from "@/lib/utils";
import SectionWrapper from "./section-wrapper";
import { motion } from "motion/react";
import { technologies } from "@/constants";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import BallCanvas from "./canvas/ball";

const Tech = () => {
  return (
    <SectionWrapper idName="">
      <motion.div variants={textVariant()}>
        <p
          className={`sm:text-[18px] text-[14px] text-primary/50 uppercase tracking-wider text-center`}
        >
          What I can do
        </p>
        <h2
          className={`text-primary/90 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center`}
        >
          Skills.
        </h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <Tooltip key={technology.name}>
            <TooltipTrigger className="w-28 h-28">
              <BallCanvas path={technology.path} />
            </TooltipTrigger>

            <TooltipContent>{technology.name}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Tech;
