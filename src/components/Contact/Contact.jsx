import React from "react";
import { motion } from "framer-motion";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { SiLeetcode } from "react-icons/si";
import { FaInstagram, FaGithub, FaTwitter, FaUser, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import ContactForm from "./ContactForm";
import hands from "../../assets/hands.jpg";
function Contact({contactRef}) {
    return (
        <div ref={contactRef} id="contact" className="mt-28">
            <div className="w-full flex justify-center items-center mb-8">
            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1.5 }} className="">
          <h2 className="flex text-white md:text-6xl text-3xl items-center mb-8">Get in touch</h2>
        </motion.div>
            </div>

            <div className=" flex justify-center w-screen">
                <div className=" flex flex-wrap justify-center z-40">
                    <div className=" w-full flex flex-wrap justify-center  border-2xl bornder-4 border-neutral-700 rounded-xl overflow-hidden ">
                        <div className="md:w-[35rem] w-full m-4 md:my-0 rounded-lg z-40">
                            <div className="w-full h-full bg-[#1c2129] rounded-lg">
                                <div className="flex items-center h-56 overflow-hidden">
                                    <img src={hands} alt="" className="rounded-lg w-full h-32 mx-8" />
                                </div>
                                <div className="">
                                    <div className="text-white mx-10">
                                        <h1 className="mb-2 text-xl text-yellow-300">
                                            Amir Razvi
                                        </h1>
                                        <p>Whether you have a project in mind, need help solving a problem, or just want to collaborate, I’d love to hear from you. Feel free to reach out, and let’s turn your ideas into reality!
                                               </p>

                                        <p></p>
                                    </div>
                                    <div className="text-white mx-10 my-4">
                                        <h1>Mobile :-</h1>
                                        <div className="flex items-center m-1">
                                            <IoCall />
                                            <h1 className="ml-2">+91 7088887287</h1>
                                        </div>
                                    </div>
                                    <div className="text-white mx-10 my-4">
                                        <h1>Mail :-</h1>
                                        <div className="flex items-center m-1">
                                            <IoMdMail />
                                            <h1 className="ml-2">amirrazvi08@gmail.com</h1>
                                        </div>
                                    </div>
                                    <div className="mx-10 my-6">
                                        <div className="flex justify-center my-2">
                                            <h1 className="text-white">Find Me In</h1>
                                        </div>
                                        <div className="flex justify-center items-center text-2xl gap-2">
                                            <div
                                                className="cursor-pointer w-8 h-8 text-white flex justify-center items-center rounded-lg bg-neutral-900 bg-[radial-gradient(ellipse_50%_250%_at_50%_-50%,rgba(120,119,198,0.25),rgba(255,255,255,0))] border-gray-700 border-2 hover:border-yellow-300 duration-300"
                                                onClick={() => window.open("https://leetcode.com/u/sherlock2408")}
                                            >
                                                <SiLeetcode />
                                            </div>
                                            <div
                                                className="cursor-pointer w-8 h-8 text-white flex justify-center items-center rounded-lg bg-neutral-900 bg-[radial-gradient(ellipse_50%_250%_at_50%_-50%,rgba(120,119,198,0.25),rgba(255,255,255,0))] border-gray-700 border-2 hover:border-yellow-300 duration-300"
                                                onClick={() => window.open("https://github.com/Amir-razvi-88")}
                                            >
                                                <FaGithub />
                                            </div>
                                            <div
                                                className="cursor-pointer w-8 h-8 text-white flex justify-center items-center rounded-lg bg-neutral-900 bg-[radial-gradient(ellipse_50%_250%_at_50%_-50%,rgba(120,119,198,0.25),rgba(255,255,255,0))] border-gray-700 border-2 hover:border-yellow-300 duration-300"
                                                onClick={() => window.open("https://www.linkedin.com/in/amirrazvi8")}
                                            >
                                                <FaLinkedinIn />
                                            </div>
                                            {/* <div
                                                className="cursor-pointer w-8 h-8 text-white flex justify-center items-center rounded-lg bg-neutral-900 bg-[radial-gradient(ellipse_50%_250%_at_50%_-50%,rgba(120,119,198,0.25),rgba(255,255,255,0))] border-gray-700 border-2 hover:border-yellow-300 duration-300"
                                                onClick={() => window.open("https://twitter.com/@amirrazvi08")}
                                            >
                                                <FaTwitter />
                                            </div> */}
                                            <div
                                                className="cursor-pointer w-8 h-8 text-white flex justify-center items-center rounded-lg bg-neutral-900 bg-[radial-gradient(ellipse_50%_250%_at_50%_-50%,rgba(120,119,198,0.25),rgba(255,255,255,0))] border-gray-700 border-2 hover:border-yellow-300 duration-300"
                                                onClick={() => window.open("https://www.instagram.com/amirazvi8")}
                                            >
                                                <FaInstagram />
                                            </div>
                                            <div
                                                className="cursor-pointer w-8 h-8 text-white flex justify-center items-center rounded-lg bg-neutral-900 bg-[radial-gradient(ellipse_50%_250%_at_50%_-50%,rgba(120,119,198,0.25),rgba(255,255,255,0))] border-gray-700 border-2 hover:border-yellow-300 duration-300"
                                                onClick={() => window.open("https://wa.me/+917088887287")}
                                            >
                                                <FaWhatsapp />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-[35rem] w-full mx-4">
                            <div className="w-full h-full rounded-lg md:rounded-r-lg  text-white z-40 bg-[#1c2129] focus-within:bg-gradient-to-t from-red-700/0 to-gray-950/50">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
