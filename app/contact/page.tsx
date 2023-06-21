"use client"
import React from "react";
import { ArrowUpCircleIcon, EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import Header from "../components/header";
import { useForm, SubmitHandler } from "react-hook-form";
import {data} from 'autoprefixer';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onsubmit: SubmitHandler<Inputs> = (data) => 
  {
    window.location.href = `mailto:gan661esh@gmail.com?subject=${data.subject}& body=Hi, my name is ${data.name}. ${data.message} (${data.email})`
  };
  return (
    <div className="bg ">
      <Header />
      <div
        className=" h-screen  relative flex flex-col text-center md:text-left md:flex-row
    max-w-7xl px-0 justify-evenly mx-auto items-center "
      >
        <h3 className=" absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl mb-48 ">
          Contact
        </h3>

        <div className=" absolute top-44 flex flex-col space-y-10">
          <h4 className=" text-4xl font-semibold text-center md:text-3xl">
            I have got just what you need.{" "}
            <span className=" decoration-orange-400/60 underline">
              Lets Talk
            </span>
          </h4>


          <div>
            <div className=" flex items-center space-x-5 justify-center">
              <EnvelopeIcon className=" text-orange-500 h-7 w-7 animate-pulse" />
              <p className=" text-2xl">gan661esh@gmail.com</p>
            </div>
          </div>

          <div>
            <div className=" flex items-center space-x-5 justify-center">
              <MapPinIcon className=" text-orange-500 h-7 w-7 animate-pulse" />
              <p className=" text-2xl"> Jharkhand</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onsubmit)}
            className=" flex flex-col space-y-2 w-fit mx-auto   "
          >
            <div className=" flex space-x-2">
              <input id="name"
                {...register("name")}
                className="contactInput"
                type="text"
                placeholder="Name"
              />
              <input id="email"
                {...register("email")}
                className="contactInput"
                type="email"
                placeholder="Email"
              />
            </div>
            <input
              {...register("subject")}
              placeholder="Subject"
              className="contactInput"
              type="text"
            />
            <textarea
              {...register("message")}
              placeholder="Message"
              className="contactInput"
            />
            <button
              type="submit"
              className=" btn bg-orange-500 py-5 px-10 rounded-md text-black font-bold text-lg "
            >
              Submit
            </button>
          </form>
          <footer>
        <ArrowUpCircleIcon className=" w-14 h-14 h mx-auto text-orange-500" />
      </footer>
        </div>
      </div>
      
    </div>
  );
}

export default ContactMe;
