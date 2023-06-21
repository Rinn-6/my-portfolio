"use client"
import React from "react";
import { motion } from "framer-motion";
import Header from "../components/header";


type Props = {};

function Projects({}: Props) {
  return (
    <div className="bg scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-orange-400">
      <Header />
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className=" h-screen relative flex overflow-hidden flex-col text-left md:flex-row
     max-w-full justify-evenly mx-auto items-center z-0 "
      >
        <h3 className=" absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          Projects
        </h3>
        <h3 className=" absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
          Scroll right for more projects
        </h3>

        <div className=" relative w-full flex overflow-scroll overflow-y-hidden snap-x snap-mandatory  scrollbar-track-gray-400/20 scrollbar-thumb-orange-400/80 scrollbar-thin z-20">
          <div className=" w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <div className=" space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className=" text-4xl font-semibold text-center">
                <a className=" underline decoration-orange-300 hover:text-orange-300" href="https://netflix-clone-67b59.web.app/" target="_blank">
                  {" "}
                  Netflix Clone
                </a>
              </h4>
              <p className=" text-lg text-center md:text-left">
                Netflix app that has a log In and log Out Authentication with
                Google. It has a beautifil Home Screen with all the movie
                looking like the Netflix.
              </p>
            </div>
          </div>
          <div className=" w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <div className=" space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className=" text-4xl font-semibold text-center">
                <a className=" underline decoration-orange-300 hover:text-orange-300" href="https://book-me-gamma.vercel.app/" target="_blank">
                  Airbnb Clone
                </a>
              </h4>
              <p className=" text-lg text-center md:text-left">
               This app has beautiful Date and Calender functionality. 
               It has mapbox function and beautiful design.
              </p>
            </div>
          </div>
        </div>

       
      </motion.div>
    </div>
  );
}

export default Projects;
