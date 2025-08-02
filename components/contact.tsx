"use client";

import { slideIn } from "@/lib/utils";
import SectionWrapper from "./section-wrapper";
import { motion } from "motion/react";
import { useRef, useState } from "react";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import EarthCanvas from "./canvas/earth";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      from_name: "",
      number: "",
      from_email: "",
      message: "",
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (form.current) {
      setIsLoading(true);
      await emailjs
        .sendForm(
          "service_bwd4999",
          "template_nkd9z5a",
          form.current,
          "oP7eB9SkMkNR6IIJk"
        )
        .then(() =>
          toast.success(
            "Thank you for your message. I will get back to you as soon as possible."
          )
        )
        // .then(() => {
        //   fetch("/api/welcome", {
        //     method: "POST",
        //     body: JSON.stringify({
        //       name: data.from_name,
        //       email: data.from_email,
        //     }),
        //   });
        // })
        .then(() => reset())
        .catch((error) => {
          console.error(error);
          toast.error(
            "Ahh, something went wrong. Please email me directly on 'sani@kaculoss.tech' and I will get back to you as soon as possible."
          );
        })
        .finally(() => setIsLoading(false));
    }
  };
  return (
    <SectionWrapper idName="contact">
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-primary-foreground p-8 rounded-2xl"
        >
          <p className="sm:text-[18px] text-[14px] text-primary/50 uppercase tracking-wider">
            Get in touch
          </p>
          <h3 className="text-primary/90 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Contact.
          </h3>

          <form
            ref={form}
            onSubmit={handleSubmit(onSubmit)}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-primary font-medium mb-4">Your Name</span>
              <input
                type="text"
                id="from_name"
                {...register("from_name", { required: true })}
                placeholder="John Doe"
                disabled={isLoading}
                className={`${
                  errors["from_name"] &&
                  "focus:ring-1 focus:ring-inset focus:ring-rose-500"
                } ${
                  isLoading && "cursor-default opacity-50"
                } bg-accent py-4 px-6 placeholder:text-primary/50 text-primary rounded-lg outline-none border-none font-medium `}
              />
            </label>
            <label className="flex flex-col">
              <span className="text-primary font-medium mb-4">Your Number</span>
              <input
                type="tel"
                id="number"
                {...register("number", { required: true })}
                placeholder="+233549853041"
                disabled={isLoading}
                className={`${
                  errors["number"] &&
                  "focus:ring-1 focus:ring-inset focus:ring-rose-500"
                } ${
                  isLoading && "cursor-default opacity-50"
                } bg-accent py-4 px-6 placeholder:text-primary/50 text-primary rounded-lg outline-none border-none font-medium `}
              />
            </label>
            <label className="flex flex-col">
              <span className="text-primary font-medium mb-4">Your email</span>
              <input
                type="email"
                id="from_email"
                {...register("from_email", { required: true })}
                placeholder="johndoe@email.com"
                disabled={isLoading}
                className={`${
                  errors["from_name"] &&
                  "focus:ring-1 focus:ring-inset focus:ring-rose-500"
                } ${
                  isLoading && "cursor-default opacity-50"
                } bg-accent py-4 px-6 placeholder:text-primary/50 text-primary rounded-lg outline-none border-none font-medium `}
              />
            </label>
            <label className="flex flex-col">
              <span className="text-primary font-medium mb-4">
                Your Message
              </span>
              <textarea
                rows={7}
                id="message"
                {...register("message", { required: true })}
                disabled={isLoading}
                placeholder="your message"
                className={`${
                  errors["from_name"] &&
                  "focus:ring-1 focus:ring-inset focus:ring-rose-500"
                } ${
                  isLoading && "cursor-default opacity-50"
                } bg-accent py-4 px-6 placeholder:text-primary/50 text-primary rounded-lg outline-none border-none font-medium `}
              />
            </label>

            <button
              type="submit"
              className="bg-background py-3 px-8 rounded-xl outline-none w-fit text-primary font-bold shadow-xs cursor-pointer hover:text-primary/50 shadow-primary"
            >
              {isLoading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-[850px] md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
