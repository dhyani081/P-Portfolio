import { RiReactjsLine } from "react-icons/ri";

import {
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiExpress,
  SiJavascript,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { MdOutlineSettings } from "react-icons/md"; // Placeholder for Context API
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24 px-4 md:px-8 lg:px-16">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl font-semibold tracking-tight text-gray-100"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-6"
      >
        {/* HTML */}
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="group rounded-2xl border-2 border-neutral-700 p-5 shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 cursor-default"
          aria-label="HTML5"
        >
          <SiHtml5 className="text-7xl text-orange-500" />
        </motion.div>

        {/* CSS */}
        <motion.div
          variants={iconVariants(2.2)}
          initial="initial"
          animate="animate"
          className="group rounded-2xl border-2 border-neutral-700 p-5 shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 cursor-default"
          aria-label="CSS3"
        >
          <SiCss3 className="text-7xl text-blue-500" />
        </motion.div>

        {/* JavaScript */}
        <motion.div
          variants={iconVariants(2.4)}
          initial="initial"
          animate="animate"
          className="group rounded-2xl border-2 border-neutral-700 p-5 shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 cursor-default"
          aria-label="JavaScript"
        >
          <SiJavascript className="text-7xl text-yellow-400" />
        </motion.div>

        {/* Tailwind CSS */}
        <motion.div
          variants={iconVariants(2.6)}
          initial="initial"
          animate="animate"
          className="group rounded-2xl border-2 border-neutral-700 p-5 shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 cursor-default"
          aria-label="Tailwind CSS"
        >
          <SiTailwindcss className="text-7xl text-cyan-400" />
        </motion.div>

        {/* React */}
        <motion.div
          variants={iconVariants(2.8)}
          initial="initial"
          animate="animate"
          className="group rounded-2xl border-2 border-neutral-700 p-5 shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 cursor-default"
          aria-label="React"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        {/* Redux */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="group rounded-2xl border-2 border-neutral-700 p-5 shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 cursor-default"
          aria-label="Redux"
        >
          <TbBrandRedux className="text-7xl text-purple-500" />
        </motion.div>

        {/* Context API (Placeholder) */}
        <motion.div
          variants={iconVariants(3.2)}
          initial="initial"
          animate="animate"
          className="group rounded-2xl border-2 border-neutral-700 p-5 shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 cursor-default text-center"
          aria-label="Context API"
        >
          <MdOutlineSettings className="text-7xl text-lime-400 mx-auto" />
          <span className="text-sm text-neutral-400 mt-2 block font-medium tracking-wide">
            Context API
          </span>
        </motion.div>

        {/* Express */}
        <motion.div
          variants={iconVariants(3.4)}
          initial="initial"
          animate="animate"
          className="group rounded-2xl border-2 border-neutral-700 p-5 shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 cursor-default"
          aria-label="Express"
        >
          <SiExpress className="text-7xl text-white bg-black rounded-full p-2" />
        </motion.div>

        {/* Node.js */}
        <motion.div
          variants={iconVariants(3.6)}
          initial="initial"
          animate="animate"
          className="group rounded-2xl border-2 border-neutral-700 p-5 shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 cursor-default"
          aria-label="Node.js"
        >
          <FaNodeJs className="text-7xl text-sky-700" />
        </motion.div>

        {/* MongoDB */}
        <motion.div
          variants={iconVariants(3.8)}
          initial="initial"
          animate="animate"
          className="group rounded-2xl border-2 border-neutral-700 p-5 shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 cursor-default"
          aria-label="MongoDB"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
