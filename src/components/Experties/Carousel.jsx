import React from "react";
import Slider from "react-slick";
import Card from "./ExpertiesCard/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { MdDesktopMac } from "react-icons/md";
import { IoExtensionPuzzleSharp } from "react-icons/io5";
import { AiOutlineAntDesign } from "react-icons/ai";
import { IoMdAnalytics } from "react-icons/io";

function Carousel() {

  const settings = {
    dots: true,
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    speed: 500,
    slidesToShow: 2,
    autoplay:true, 
  autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, // For screens 1024px and below
        settings: {
          slidesToShow: 2,
          // centerPadding:"40px" // Show 2 cards
        },
      },
      {
        breakpoint: 768, // For screens 768px and below
        settings: {
          slidesToShow: 1, // Show 1 card
        },
      },
      {
        breakpoint: 400, // For screens 480px and below
        settings: {
          slidesToShow: 1, // Show 1 card
        },
      },
    ],
  };

  return (
    <>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="slider-container w-full md:w-[86%]"
      >
        <Slider {...settings}>
          <div className="Item z-40">
            <Card 
            name="UI/UX Designer" 
            icon={<AiOutlineAntDesign />} 
            headline="Designing intuitive, visually appealing interfaces that enhance user experiences."
            ph1="User-Centered Design:"
            ph2="Wireframing & Prototyping:"
            ph3="User Research:"
            ph4="Interaction Design:"
            point1="Creating responsive layouts and interactive elements focused on user needs and behaviors."
            point2="Developing wireframes, prototypes, and mockups using tools like Figma, Adobe XD, and Sketch to bring ideas to life."
            point3=" Conducting usability testing and analyzing user feedback to inform design decisions and improve product functionality."
            point4="Crafting smooth, engaging interactions with a focus on accessibility and consistency across devices."
            />
          </div>
          <div className="Item">
            <Card name="SEO Optimization"
            
            headline="Enhancing website visibility through strategic SEO practices."
            ph1="On-Page SEO:"
            ph2="Technical SEO:"
            ph3="Content Strategy:"
            ph4="Analytics & Reporting:"
            point1="Optimizing meta tags, headers, URL structures, and content to improve search engine ranking."
            point2="Ensuring fast page load speeds, mobile responsiveness, and clean code for optimal crawling by search engines."
            point3="Creating high-quality, user-focused content that aligns with SEO goals and drives organic traffic."
            point4="Using tools like Google Analytics and Search Console to track performance, refine strategies, and drive growth."

            icon={<IoMdAnalytics />} 
            content={``}
            />
          </div>
          <div className="Item">
            <Card name="Problem Solver" 
            headline="Identifying, analyzing, and solving complex problems."
            ph1="Critical Thinking:"
            ph2="Creative Solutions:"
            ph3="Collaboration:"
            ph4="Adaptability:"
            point1="Breaking down issues, finding the root cause, and designing scalable solutions."
            point2="Applying innovative thinking to overcome technical, design, and development obstacles."
            point3="Working effectively with cross-functional teams to solve problems that require diverse perspectives and skills."
            point4="Quickly learning new technologies and methods to tackle unexpected challenges and stay ahead of the curve."
            
            icon={<IoExtensionPuzzleSharp />} />
          </div>
          <div className="Item">
            <Card name="Web Developer" 
            headline="Crafting dynamic, user-friendly websites with a focus on clean code and seamless functionality"
            ph1="Front-End Development:"
            ph2="Back-End Development:"
            ph3="Full-Stack Solutions:"
            ph4="Version Control:"
            point1="Building responsive, accessible UIs with HTML, CSS, JavaScript, ReactJS, and TailwindCSS."
            point2="Creating secure, scalable servers using Node.js and Express, and managing databases with MongoDB."
            point3="Delivering end-to-end web applications, from design to deployment, with the MERN stack."
            point4="Managing collaborative projects with Git and GitHub."
            
            
            icon={<MdDesktopMac />} />
          </div>
        </Slider>
      </motion.div>
    </>
  );
}

export default Carousel;