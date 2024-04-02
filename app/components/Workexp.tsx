"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { BsCalendar2Date } from "react-icons/bs";

const experienceItems = [
  {
    title: "Fullstack @ Freelance",
    period: "JUL 2023 - TODAY",
    description:
      "Front to back design and implementation of customer requirements keeping stakeholders funds in mind.",
  },
  {
    title: "Fullstack @ Mitch Cannon Studios",
    period: "SEP 2022 - JUL 2023",
    description:
      "Planning and creation of web components, APIs, integrations based on customer requirements.",
  },
  {
    title: "Fullstack @ Teravision Technologies",
    period: "JUN 2021 - SEP 2022",
    description:
      "Planning, development, testing and reviewing code for a big data application related to social media.",
  },
  {
    title: "Backend @ ComprandoEnGrupo.net",
    period: "SEP 2020 - JUN 2021",
    description:
      "Developing a catalog for B2B ECommerce. API and Microservices. Integrations.",
  },
  {
    title: "Fullstack @ SIMTLIX",
    period: "DEC 2019 - SEP 2020",
    description:
      "Staff augmentation for a multinational technology company that specializes in business communications solutions.",
  },
  {
    title: "Fullstack @ LlaneroSales",
    period: "MAR 2018 - NOV 2019",
    description:
      "Web community Manager, main developer and consultor of a motorcycle shop.",
  },
  {
    title: "Fullstack @ Optiagro",
    period: "SEP 2018 - JAN 2019",
    description:
      "Developed multiple APIs for Agrotech IoT app with geolocation functionalities. Optimization and refactorization. DB migrations.",
  },
];

const fadeInVariant = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.05,
    },
  }),
};

const sculptureVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      type: "linear",
      delay: 0.9,
    },
  },
};

function Workexp() {
  return (
    <section id="workexperience">
      <div className="flex flex-col-reverse md:flex-row justify-between px-5 md:px-10 2xl:ml-24">
        <div className="grid md:p-8">
          <h3 className="text-2xl md:text-4xl text-lighest font-primaryFont font-bold mb-3 md:mb-10 -ml-2">
            🚀 Professional journey
          </h3>

          <ol>
            {experienceItems.map((item, index) => (
              <motion.li
                className="border-l-2 border-lighest h-60 "
                variants={fadeInVariant}
                initial="initial"
                viewport={{ once: true }}
                custom={index}
                key={`job number ${index}`}
                whileInView="animate"
              >
                <div className="md:flex flex-start">
                  <div
                    className={`${
                      index === 0 ? "bg-primaryColor" : "bg-gray-400"
                    } w-6 h-6 flex items-center justify-center rounded-full -ml-3.5`}
                  >
                    <BsCalendar2Date
                      className={`${
                        index === 0 ? "text-slate-300" : "text-lighest/70"
                      } w-3 h-3`}
                    />
                  </div>
                  <div
                    className={`block p-6 rounded-sm shadow-lg ${
                      index === 0 ? "bg-gray-100" : "bg-lighest/70"
                    } max-w-md ml-6 mb-10`}
                  >
                    <div className="flex flex-col md:flex-row justify-between mb-4">
                      <h1 className="font-medium text-primaryColor font-primaryFont text-sm text-left 2xl:text-md">
                        {item.title}
                      </h1>
                      <h1 className="font-medium font-primaryFont text-primaryColor text-xs md:text-sm text-left 2xl:text-md">
                        {item.period}
                      </h1>
                    </div>
                    <p className="text-darkest mb-6 font-secondaryFont text-sm md:text-base text-left">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>

        <motion.div
          className="mx-auto md:mt-48 my-20"
          initial="initial"
          whileInView="animate"
          variants={sculptureVariant}
          viewport={{ once: true }}
        >
          <img src="/greek3.png" height="500" width="400" alt="bust roman" />
        </motion.div>
      </div>
    </section>
  );
}
export default Workexp;
