import AboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section className="border-b border-neutral-900 pb-12 px-4 sm:px-8 md:px-12">
            <h1 className="my-16 text-center text-4xl font-bold tracking-wide text-white">
                About <span className="text-neutral-500">Me</span>
            </h1>

            <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.6 }}
                    className="w-full lg:w-1/2 flex justify-center"
                >
                    <img
                        className="rounded-2xl shadow-lg w-4/5 max-w-md object-cover"
                        src={AboutImg}
                        alt="about"
                    />
                </motion.div>

                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.6 }}
                    className="w-full lg:w-1/2"
                >
                    <div className="flex justify-center lg:justify-start">
                        <p className="text-lg text-neutral-300 leading-relaxed tracking-wide max-w-xl text-justify">
                            {ABOUT_TEXT}
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
