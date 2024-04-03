"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaEye,
} from "react-icons/fa";

const projectList = [
  {
    name: "Shoppy",
    description: "Shoppy is a django web app that implements a e-shop.",
    technologies: ["Django", "Docker", "PostgreSQL", "Python", "TailwindCSS"],
    imageUrl: "shoppy.png",
    codeUrl: "https://github.com/rodrigourban/shoppy",
    livePreview: null,
  },
  {
    name: "Nekodoro",
    description:
      "Nekodoro is a pomodoro app to help you focus more. It has a cute cat helper, background music and to do list",
    technologies: ["ReactJS", "TailwindCSS"],
    imageUrl: "nekodoro.png",
    codeUrl: "https://github.com/rodrigourban/nekodoro",
    livePreview: "https://nekodoro.vercel.app/",
  },
  {
    name: "StudyBuddy",
    description:
      "StudyBuddy is a web app that helps you test your skills at multiple topics in a fun way.",
    technologies: ["ReactJS", "TailwindCSS"],
    imageUrl: "studybuddy.png",
    codeUrl: "https://github.com/rodrigourban/studyBuddy",
    livePreview: null,
  },
  {
    name: "Express TS template",
    description:
      "Express API template with TypeScript support, multiple dbs, loggin, etc.",
    technologies: ["ExpressJS", "NodeJS", "MongoDB", "PostgreSQL"],
    imageUrl: "expressts.png",
    codeUrl: "https://github.com/rodrigourban/express-ts-template",
    livePreview: null,
  },
];

const fadeInVariant = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projectLength = projectList.length;

  const handleChangeProject = (changeIndex: "increase" | "decrease") => {
    let newIndex = currentIndex;
    if (changeIndex === "increase") {
      newIndex = currentIndex + 1 === projectLength ? 0 : currentIndex + 1;
    } else if (changeIndex === "decrease") {
      newIndex = currentIndex - 1 === -1 ? projectLength - 1 : currentIndex - 1;
    }
    setCurrentIndex(newIndex);
  };

  return (
    <section
      className="my-40 flex flex-row justify-between md:justify-evenly items-center space-x-2 px-5 md:h-svh scroll-mt-56 md:scroll-mt-0"
      id="projects"
    >
      <div>
        <FaArrowAltCircleLeft
          className="h-10 w-10 text-lighest hover:cursor-pointer hover:text-primaryColor transition-all duration-300 md:mt-20 md:mr-5 pr-2 md:pr-0"
          onClick={() => handleChangeProject("decrease")}
        />
      </div>
      <motion.div
        className="flex flex-col w-full md:w-1/2"
        variants={fadeInVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-4xl text-lighest font-primaryFont font-bold mb-5 md:mb-10 -ml-1">
          💼 Passion projects
        </h3>
        <motion.div
          className="h-[20rem] w-full bg-lighest rounded-sm -mb-7 shadow-xl flex flex-col md:flex-row md:justify-between space-x-2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          key={currentIndex}
        >
          <div
            className="h-1/3 w-full md:w-1/2 md:h-full relative bg-contain bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(/${projectList[currentIndex].imageUrl})`,
            }}
          ></div>
          <div className="h-3/4 md:w-1/2 p-2 md:pl-4 flex justify-between md:justify-between flex-col">
            <div>
              <h2 className="mt-8 text-2xl md:text-3xl font-bold font-primaryFont text-primaryColor mb-1 md:mb-3">
                {projectList[currentIndex].name}
              </h2>

              <p className="text-sm md:text-sm font-secondaryFont text-darkest pr-8">
                {projectList[currentIndex].description}
              </p>
            </div>

            <div className="flex mb-2 md:mb-5 justify-end pr-2 md:pr-8">
              {projectList[currentIndex].livePreview && (
                <a
                  className="flex items-center hover:cursor-pointer text-sm font-semibold uppercase tracking-wider text-darkest  hover:text-primaryColor transition duration-300 pr-4"
                  href={projectList[currentIndex].livePreview!}
                  target="_blank"
                >
                  <span className="sr-only">Preview</span>
                  <FaEye className="mr-2 h-6 w-6" /> Preview
                </a>
              )}

              <a
                className="flex justify-center items-center hover:cursor-pointer text-md font-semibold uppercase tracking-wider  hover:text-primaryColor transition duration-300 text-darkest"
                href={projectList[currentIndex].codeUrl}
                target="_blank"
              >
                <span className="sr-only">Code on GitHub</span>
                <svg
                  className="h-6 w-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>{" "}
                Code
              </a>
            </div>
          </div>
        </motion.div>
        <ul className="flex flex-row mt-20 justify-center items-center mr-5 space-x-4">
          {projectList.map((_, index) => (
            <li
              key={`project number ${index}`}
              className={`rounded-md h-3 w-3 ${
                index === currentIndex ? "bg-primaryColor" : "bg-lighest"
              } transition-all duration-300`}
              aria-label={`project number ${index}`}
            ></li>
          ))}
        </ul>
      </motion.div>
      <div>
        <FaArrowAltCircleRight
          className="h-10 w-10 text-lighest hover:cursor-pointer hover:text-primaryColor transition-all duration-300 md:mt-20 md:pl-0 md:ml-5 pl-2"
          onClick={() => handleChangeProject("increase")}
        />
      </div>
    </section>
  );
}
export default Projects;
