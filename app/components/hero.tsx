
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Background from '../components/background';
import Link from 'next/link';


type Props = {}

function Hero({}: Props) {
 
    const [text, count] = useTypewriter({
        words: ["Hi, I am Payal Kumari", "I am a Front-end Developer", " Exploring the world of tech"],
        loop: true,
        delaySpeed: 2000,
      });
  return (
    <div className=" h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
    <Background />

    <div className="z-20 ">
      <h2 className=" text-sm uppercase text-white pb-2 tracking-[15px]">Front-end Developer</h2>
      <h1 className=" text-4xl  font-semibold px-10">
        <span className="mr-3">{text}</span>
        <Cursor cursorColor="white" />
      </h1>
      <div className=" pt-5 "> {/*about, experi, skills proj */}
        
        <Link className='heroButton' href={"/skills"}>Skills</Link>
        <Link className='heroButton' href={"/projects"}>Project</Link>
        <Link className='heroButton'href={"/contact"}>Contact Me</Link>
        
      </div>
    </div>
  </div>
);
}

export default Hero;