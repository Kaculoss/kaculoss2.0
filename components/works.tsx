"use client";

import { fadeIn, textVariant } from "@/lib/utils";
import SectionWrapper from "./section-wrapper";
import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";
import { cube, globe } from "@/assets";
import { projects } from "@/constants";
import { useState } from "react";
import Tilt from "react-parallax-tilt";
import Link from "next/link";
import { Button } from "./ui/button";

interface IProps {
  index: number;
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: StaticImageData;
  link: string;
}

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  link,
}: IProps) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        scale={1}
        transitionSpeed={450}
        tiltMaxAngleY={45}
        tiltMaxAngleX={45}
        className="bg-card p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <Link
          href={link}
          target="_blank"
          className="relative w-full h-[230px] cursor-pointer"
        >
          <Image
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <Image
                src={globe}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </Link>

        <div className="mt-5">
          <h3 className="text-primary/80 font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-primary/50 text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [isViewAll, setIsViewAll] = useState<boolean>(false);
  return (
    <SectionWrapper idName="projects">
      <div className="w-full flex gap-5 items-center justify-between">
        <div className="md:flex-[5] w-full flex-1">
          <motion.div variants={textVariant()}>
            <p
              className={`sm:text-[18px] text-[14px] text-primary/50 uppercase tracking-wider`}
            >
              My work
            </p>
            <h2
              className={`text-primary/90 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}
            >
              Projects.
            </h2>
          </motion.div>
          <div className="w-full flex">
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="w-full mt-3 text-primary/70 text-[17px] max-w-3xl leading-[30px]"
            >
              Following projects showcases my skills and experience through
              real-world examples of my work. Each project is briefly described
              with links to their live demos in it. It reflects my ability to
              solve complex problems, work with different technologies, and
              manage projects effectively.
            </motion.p>
          </div>
        </div>

        <div className="hidden md:flex flex-[3] items-center justify-center w-full">
          <Image
            src={cube}
            alt="cube"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.slice(0, 3).map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      <div className={`${isViewAll ? "flex" : "hidden"} mt-12 flex-wrap gap-7`}>
        {projects.slice(3).map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      <div className="w-full flex items-center justify-center mt-10">
        <Button
          type="button"
          className="bg-background py-3 px-8 rounded-xl outline-none w-fit text-primary font-bold hover:text-primary/50 hover:bg-background shadow-xs shadow-primary"
          onClick={() => setIsViewAll(!isViewAll)}
        >
          {!isViewAll ? "View All" : "View Less"}
        </Button>
      </div>
    </SectionWrapper>
  );
};

export default Works;
