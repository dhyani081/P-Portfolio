import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-8 px-4 md:px-8 lg:px-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6 }}
        className="my-16 text-center text-4xl font-semibold tracking-tight text-gray-100"
      >
        Projects
      </motion.h2>

      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-12 flex flex-col lg:flex-row lg:items-start lg:justify-center gap-6"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="w-full lg:w-1/4 flex justify-center lg:justify-start"
            >
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
              />
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 80 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="w-full max-w-3xl lg:w-3/4"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <h6 className="mb-3 text-xl font-semibold text-gray-200">
                  {project.title}
                </h6>
              </a>

              <p className="mb-4 text-neutral-400 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="inline-block rounded-full bg-neutral-800 px-3 py-1 text-sm font-semibold text-purple-300 transition-colors hover:bg-purple-700 cursor-default select-none"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
