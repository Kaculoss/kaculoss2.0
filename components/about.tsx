"use client";

import { fadeIn, textVariant } from "@/lib/utils";
import SectionWrapper from "./section-wrapper";
import { motion } from "framer-motion";
import Link from "next/link";
import { counters, services } from "@/constants";
import AnimateCounter from "./animate-counter";
import Image, { StaticImageData } from "next/image";
import Tilt from "react-parallax-tilt";

interface IProps {
  index: number;
  icon: StaticImageData;
  title: string;
  desc: string;
}

const ServiceCard = ({ index, icon, title, desc }: IProps) => {
  return (
    <Tilt
      className="w-full sm:w-[250px]"
      scale={1}
      transitionSpeed={450}
      tiltMaxAngleX={45}
      // options={{
      //   max: 45,
      //   scale: 1,
      //   speed: 450,
      // }}
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          data-options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-background rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <Image src={icon} alt={title} className="w-16 h-16 object-contain" />

          <h3 className="text-primary/90 text-[20px] font-bold text-center">
            {title}
          </h3>
          <p className="text-primary/50 text-xs text-center">{desc}</p>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <SectionWrapper idName="about">
      <div className="flex w-full gap-5 justify-between items-center">
        <div className="w-full flex-1 lg:flex-[3]">
          <motion.div variants={textVariant()}>
            <p className="sm:text-[18px] text-[14px] text-primary/50 uppercase tracking-wider">
              Introduction
            </p>
            <h2 className="text-primary/90 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
              About Me.
            </h2>
          </motion.div>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-primary/70 text-[17px] max-w-3xl leading-[30px]"
          >
            {`I'm a skilled software developer with experience in TypeScript and
            JavaScript, and expertise in technologies and frameworks like Vue,
            React, Next.js, Graphql, PostgreSQL, SQL, Node.js, Three.js and
            Adobe Photoshop. I'm a quick learner and collaborate closely with
            clients to create efficient, scalable, and user-friendly solutions
            that solve real-world problems. Let's work together to bring your
            ideas to life!`}
          </motion.p>
          <div className="mt-8">
            <Link
              target="_blank"
              href="https://drive.google.com/file/d/1kHov2oV57eFUcwsj20KAF2OH2tiO5oBq/view?usp=sharing"
              className=" py-3 px-8 rounded-xl outline-none w-fit text-primary hover:text-primary/80 font-bold shadow-xs shadow-primary"
            >
              My Resume / CV
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex flex-[1] flex-col gap-8 items-center justify-center w-full">
          {counters.map((counter) => (
            <AnimateCounter key={counter.desc} {...counter} />
          ))}
        </div>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <div className="flex lg:hidden gap-4 items-center justify-center w-full mt-8">
        {counters.map((counter) => (
          <AnimateCounter key={counter.desc} {...counter} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default About;
