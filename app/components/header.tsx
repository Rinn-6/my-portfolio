
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";


type Props = {};

function Header({}: Props) {
  
  return (
    <header className="sticky top-0 p-5 flex items-center justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className=" flex  flex-row items-center"
      >
        {/* Social icons from react social icon  */}
        <SocialIcon className=" hover:scale-125"
          url="https://github.com/Rinn-6"
          fgColor="orange"
          bgColor="transparent"
        />
        <SocialIcon className=" hover:scale-125"
          url="https://www.linkedin.com/in/payal-kumari-415118270/"
          fgColor="orange"
          bgColor="transparent"
        
        />
      </motion.div>
    
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex  flex-row items-center text-gray-300 cursor-pointer"
      >
         <Link href={"/contact"}>
         <SocialIcon
          className=" cursor-pointer hover:scale-125"
          network="email"
          fgColor="orange"
          bgColor="transparent"
        />
         </Link>
        <p className=" uppercase hidden md:inline-flex text-sm text-gray-400">
          Get in Touch
        </p>
      </motion.div>
      
    </header>
  );
}

export default Header;
