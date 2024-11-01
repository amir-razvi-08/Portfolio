import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import RippleButton from "./RippleButton";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
const ContactForm = () => {
    const form = useRef();
    const [status, setStatus] = useState("");

    const isValidEmail = (email) => {
        return email.includes("@");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = form.current.user_name.value.trim();
        const email = form.current.user_email.value.trim();
        const message = form.current.message.value.trim();

        if (!name) {
            setStatus("Please enter your name!");
            return;
        }
        if (!email) {
            setStatus("Please enter the email address!");
            return;
        }
        if (!isValidEmail(email)) {
            setStatus("Please enter the valid email address!");
            return;
        }
        if (!message) {
            setStatus("Please enter some message!");
            return;
        }

        emailjs.sendForm("amirrazvi08-service", "amirrazvi08-template", form.current, "kq29pk163_09YI99E").then(
            (result) => {
                console.log(result.text);
                setStatus("Message sent successfully!");
                form.current.reset();
            },
            (error) => {
                console.log(error.text);
                setStatus("Failed to send message. Please try again later.");
            }
        );
    };

    const darkMode=useSelector((state)=>state.darkMode);

    return (
        <div>
            <form ref={form} onSubmit={handleSubmit} className={`pt-12 ${darkMode?"dark":""}`}> 
                <div className="dark:bg-gray-900 mx-8 h-14 flex items-center border-gray-700 border-2 rounded-3xl focus-within:border-yellow-400 duration-300 bg-gray-200">
                    <div className="ml-4 dark:text-white text-xl">
                        <FaUser />
                    </div>
                    <input
                        type="text"
                        placeholder="Full Name"
                        name="user_name"
                        required
                        className="text-black dark:text-white bg-transparent outline-none pl-4 w-full h-14"
                        autoComplete="off"
                    />
                </div>
                <div className="bg-gray-200 dark:bg-gray-900 mx-8 h-14 mt-12 flex items-center border-gray-700 border-2 rounded-3xl focus-within:border-yellow-400 duration-300">
                    <div className="ml-4 text-black dark:text-white text-2xl">
                        <IoMdMail />
                    </div>
                    <input
                        type="text"
                        placeholder="Email"
                        name="user_email"
                        required
                        className=" text-black dark:text-white bg-transparent outline-none pl-4 w-full h-14"
                        autoComplete="off"
                    />
                </div>
                <div className="text-black bg-gray-200 dark:bg-gray-900 mx-8 h-48 mt-16 flex items-center border-gray-700 border-2 rounded-3xl focus-within:border-yellow-400 duration-300">
                    <textarea
                        className="text-black dark:text-white overflow-hidden w-full h-36 resize-none bg-transparent outline-none pl-4"
                        placeholder="Message"
                        name="message"
                        required
                    ></textarea>
                </div>
                <div className="flex justify-center mt-16" onClick={handleSubmit}>
                    <RippleButton children="Send" />
                </div>
            </form>
            <div className="w-full h-12 flex justify-center items-center">
                {status && (
                    <motion.div
                        animate={{
                            y: [-3, 3],
                            transition: {
                                duration: 1,
                                ease: "linear",
                                repeat: Infinity,
                                repeatType: "reverse",
                            },
                        }}
                        className={`text-center bg-pink-200 py-1 px-4 rounded-lg font-bold ${
                            status.includes("successfully") ? "text-green-500 bg-green-200" : "text-red-500"
                        }`}
                    >
                        {status}
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default ContactForm;
