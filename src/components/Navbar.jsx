import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6 flex items-center justify-between py-6 px-4 sm:px-8 md:px-12 backdrop-blur-sm border-b border-neutral-800"
        >
            <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex items-center"
            >
                <span className="text-2xl font-semibold tracking-wider bg-gradient-to-r from-pink-400 via-slate-500 to-purple-500 bg-clip-text text-transparent">
                    VND.DEV
                </span>
            </motion.div>

            <div className="flex items-center gap-6">
                {[
                    {
                        icon: <FaLinkedin />,
                        href: "https://www.linkedin.com/in/vijay-nand-dhyani/",
                        color: "hover:text-blue-500"
                    },
                    {
                        icon: <FaGithub />,
                        href: "https://github.com/dhyani081",
                        color: "hover:text-gray-400"
                    },
                    {
                        icon: <SiLeetcode />,
                        href: "https://leetcode.com/u/dhyani081/",
                        color: "hover:text-yellow-500"
                    }
                ].map((item, index) => (
                    <motion.a
                        key={index}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                        className={`text-2xl text-neutral-400 transition-all duration-300 transform ${item.color} hover:scale-110`}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {item.icon}
                    </motion.a>
                ))}
            </div>
        </motion.nav>
    );
};

export default Navbar;
