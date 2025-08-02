"use client";

import Image from "next/image";
import hero from "../assets/heroImage.png";
import Link from "next/link";
import { motion } from "motion/react";
import ComputerCanvas from "./canvas/computer";

const Hero = () => {
  return (
    <section className="relative w-full  h-auto mx-auto ">
      <div className={`sm:px-16 px-6 relative mt-[120px] max-w-7xl mx-auto  `}>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center lg:items-start gap-0 lg:gap-8 -mb-16 sm:-mb-24">
          <div className="flex-[3] w-full flex flex-row lg:items-center items-start gap-5">
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915eff] " />
              <div className="w-1 sm:h-80 h-40 violet-gradient " />
            </div>

            <div>
              <h1
                className={`font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-primary`}
              >
                Hi, I&apos;m <span className="text-[#915eff] ">Sani</span>
              </h1>
              <p
                className={` font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2  text-white-100`}
              >
                A full-stack web developer, <br className="sm:block hidden" />{" "}
                mobile application developer <br className="sm:block hidden" />{" "}
                and graphic designer
              </p>
            </div>
          </div>

          <div className="flex-1 lg:flex-[2] flex items-center justify-center w-full h-[350px] lg:h-[450px] ">
            <Image
              src={hero}
              alt="Sani"
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        <div className="h-[200px] sm:h-[300px] lg:h-[400px]">
          <ComputerCanvas />
        </div>
      </div>
      <div className="absolute xs:bottom-10 bottom-0 w-full flex justify-center items-center">
        <Link href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 ">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            ></motion.div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
