"use client";
import Image from "next/image";
import { BackgroundLines } from "@/components/ui/backgroundLines";
import { motion } from "framer-motion";
import { ArrowDown2 } from "iconsax-react";
import { FaGithub, FaLinkedinIn, FaStackOverflow } from "react-icons/fa";
import { TextGenerateEffect } from "./ui/textGenerateEffect";

export function Hero() {
  return (
    <main className="min-h-screen w-full flex flex-col justify-center items-center relative w-full h-full">
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 min-h-screen">
        <section className="z-10 flex flex-col items-center justify-center">
          <motion.img
            src="/images/profile.jpg" // Replace with your image URL
            alt="Fade In"
            className="w-72 h-auto rounded-full shadow-lg mx-auto mb-4"
            initial={{ opacity: 0 }} // Start fully transparent
            animate={{ opacity: 1 }} // Fade to full opacity
            transition={{
              duration: 1.8, // Duration of fade-in
              ease: "easeInOut", // Smooth transition
            }}
          />
          <p className="p-2 text-xs bg-zinc-900 rounded-xl text-zinc-50 borde-2 border-zinc-100 hover:bg-zinc-800 transition duration-300 mb-4 font-mono">
            racasantos
            <span className="text-[10px]">
              <span className="text-xs text-zinc-400 px-1">/</span>README
              <span className="text-xs text-zinc-400">.md</span>
            </span>
          </p>
          <h1 className="text-4xl text-zinc-300 font-bold text-center mb-4 font-mono">
            <TextGenerateEffect
              className={
                "text-4xl text-zinc-300 font-bold text-center font-mono"
              }
              words={"Hi, I'm Rafael Cardoso dos Santos."}
              duration={1}
            />
          </h1>
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
          >
            <p className="text-md text-center text-zinc-400/90">
              I'm a full-stack web developer and software engineer with a
              passion for building impactful digital solutions
              <br />
              Thanks for stopping by! Feel free to explore my work—I hope you
              find it inspiring.
            </p>
            <div className="flex flex-row gap-2 items-center justify-center mt-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center h-10 w-10 bg-zinc-900 text-zinc-50 rounded-full hover:bg-zinc-800 transition duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center mt-12"
            animate={{
              y: [0, -18, 0], // Moves up by -20px, then back to 0
            }}
            transition={{
              duration: 3, // Duration of one cycle (up and down)
              repeat: Infinity, // Repeats infinitely
              ease: "easeInOut", // Smooth in and out transitions
            }}
          >
            <a href="#open-source">
              <ArrowDown2 size={30} color="#fff" />
            </a>
          </motion.div>
        </section>
      </BackgroundLines>
    </main>
  );
}

const socialLinks = [
  {
    href: "https://github.com/zlovtnik",
    icon: <FaGithub size={18} />,
  },
  {
    href: "https://www.linkedin.com/in/zlovtnik",
    icon: <FaLinkedinIn size={18} />,
  },
  {
    href: "https://stackoverflow.com/users/zlovtnik",
    icon: <FaStackOverflow size={18} />,
  },
];
