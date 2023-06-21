
"use client";
import Header from './components/header';
import Hero from './components/hero';
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div className=' bg scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-orange-400'>
      <Header/>
      <Hero/>
      <footer>
        <ArrowUpCircleIcon className=" w-14 h-14 h mx-auto text-orange-500" />
      </footer>
    </div>
  )
}
