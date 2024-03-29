"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  const seqeunceAnimation = { first: "Isaac", second: "Web Developer", third: "Veteran", fourth: "Leader" };
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">Hello, I'm {""}</span>
            <br></br>
            <TypeAnimation sequence={[`${seqeunceAnimation.first}`, 1000, `${seqeunceAnimation.second}`, 1000, `${seqeunceAnimation.third}`, 1000, `${seqeunceAnimation.fourth}`, 1000]} wrapper="span" speed={50} repeat={Infinity} />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-1 lf:text-xl">"Technology is best when it brings people together." -Matt Mullenweg</p>
          <div>
            {/* <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 via-secondary-500 to-teal-500 bg-white hover:bg-slate-200 text-white">Hire Me</button> */}
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 via-secondary-500 to-teal-500 hover:bg-slate-800 text-white mt-3">
              <a href="/cv.pdf" download="cv" className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </a>
            </button>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image src="/images/hero-image.png" alt="" className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" width={400} height={400} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
