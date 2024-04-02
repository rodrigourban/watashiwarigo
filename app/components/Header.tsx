"use client";
import { FaLinkedin } from "react-icons/fa";
import { MdCode, MdComputer } from "react-icons/md";
import { motion } from "framer-motion";

const SocialsObj = [
  {
    name: "Instagram",
    icon: (
      <svg
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
    url: "https://instagram.com/rodrigourbann",
  },
  {
    name: "Linkedin",
    icon: <FaLinkedin className="h-6 w-6" />,
    url: "https://www.linkedin.com/in/rodrigourban/",
  },
  {
    name: "Github",
    icon: (
      <svg
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
    url: "https://github.com/rodrigourban",
  },
];

const sculptureVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      type: "spring",
      delay: 0.01,
    },
  },
};

const contentVariant = {
  initial: {
    opacity: 0,
  },
  animate: (index: number) => ({
    opacity: 1,
    transition: {
      type: "spring",
      delay: index * 0.05,
    },
  }),
};

function Header() {
  return (
    <section className="h-svh">
      <motion.nav
        className="flex justify-end items-center py-5 px-2 md:px-20"
        initial="initial"
        animate="animate"
        variants={contentVariant}
        custom={1}
      >
        <ul className="flex space-x-7 text-lg tracking-wider text-indigo-50 font-primaryFont">
          <li>
            <a
              href="#projects"
              className="flex items-center hover:cursor-pointer text-xs md:text-sm 2xl:text-lg font-semibold uppercase tracking-widest  group-active:text-opacity-75 text-stroke-3 hover:text-primaryColor transition duration-300"
            >
              <span className="sr-only">Projects</span>
              <MdCode className="mr-2 h-6 w-6" /> PROJECTS
            </a>
          </li>
          <li>
            <a
              href="#workexperience"
              className="flex items-center hover:cursor-pointer text-xs md:text-sm 2xl:text-lg font-semibold uppercase tracking-widest  group-active:text-opacity-7 text-stroke-3 hover:text-primaryColor transition duration-300"
            >
              <span className="sr-only">Experience</span>
              <MdComputer className="mr-2 h-5 w-5 " /> EXPERIENCE
            </a>
          </li>
        </ul>
        <img
          src="/mylogo-white.png"
          alt="Rigo logo"
          className="h-8 w-8 md:ml-10 ml-4 mr-2"
        />
      </motion.nav>

      <div className="flex flex-col md:flex-row">
        <motion.div
          className="w-full md:w-1/2"
          initial="initial"
          animate="animate"
          variants={sculptureVariant}
        >
          <img
            src="/greek.png"
            alt="sculpture of David"
            className="w-3/4 mx-auto mt-8 mb-2 md:mb-0 md:mt-0 h-auto"
          />
        </motion.div>
        <div className="text-left lg:p-20 p-5 w-full md:w-1/2 2xl:mt-80">
          <motion.h1
            className="text-3xl md:text-5xl 2xl:text-7xl font-extrabold sm:text-5xl font-primaryFont mt-2 text-[#FEF7FF]"
            initial="initial"
            animate="animate"
            variants={contentVariant}
            custom={2}
          >
            Senior
            <strong className="block font-extrabold text-[#7E22CE]">
              Fullstack Engineer
            </strong>
          </motion.h1>
          <motion.ul
            className="mt-4 flex justify-start gap-6 md:gap-8"
            initial="initial"
            animate="animate"
            variants={contentVariant}
            custom={3}
          >
            {SocialsObj.map((social, index) => (
              <li key={`social-${index}`}>
                <a
                  href={social.url}
                  rel="noreferrer"
                  target="_blank"
                  className="transition hover:text-primaryColor/75 text-white duration-300"
                  aria-label={`Link to ${social.name} account`}
                >
                  {social.icon}
                </a>
              </li>
            ))}
          </motion.ul>

          <motion.p
            className="mt-4 md:mt-8 text-white font-secondaryFont text-md md:text-xl pr-6 md:pr-0"
            initial="initial"
            animate="animate"
            variants={contentVariant}
            custom={4}
          >
            Welcome to my little place, my name is Rigo. I design and implement
            ideas. When my work is well received, I call it an art piece, and
            when it is not, it&apos;s abstract art and they wouldn&apos;t get it
            anyways...
          </motion.p>

          <motion.div
            className="mt-8"
            initial="initial"
            animate="animate"
            variants={contentVariant}
            custom={5}
          >
            <a
              className="group relative inline-block focus:outline-none focus:ring font-secondaryFont"
              href="mailto:rodrigourb@gmail.com?subject=Hiring&body=Hi, I want to talk about business..."
            >
              <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[#7E22CE] transition-transform group-hover:translate-x-0 group-hover:translate-y-0 duration-300"></span>

              <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-white group-active:text-opacity-75">
                Contact me 🗯
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default Header;
