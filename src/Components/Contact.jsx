import { motion } from 'framer-motion';
import { CONTACT } from '../constants';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1.5}}
        className="my-20 text-center text-4xl"
      >
        Contact
      </motion.h1>
      
      <motion.div
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 1.5}}
        className="flex flex-col lg:flex-row gap-12 items-start justify-between"
      >
        <div className="lg:w-1/3">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl mb-8 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent"
          >
            {CONTACT.subtitle}
          </motion.p>
          
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center space-x-4"
            >
              <div className="bg-neutral-900 p-3 rounded-lg border border-neutral-800">
                <FaMapMarkerAlt className="text-pink-300 text-xl" />
              </div>
              <div>
                <h3 className="text-neutral-300 font-medium mb-1">Address</h3>
                <p className="text-neutral-400">{CONTACT.address}</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center space-x-4"
            >
              <div className="bg-neutral-900 p-3 rounded-lg border border-neutral-800">
                <FaPhone className="text-pink-300 text-xl" />
              </div>
              <div>
                <h3 className="text-neutral-300 font-medium mb-1">Phone</h3>
                <p className="text-neutral-400">{CONTACT.phoneNo}</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center space-x-4"
            >
              <div className="bg-neutral-900 p-3 rounded-lg border border-neutral-800">
                <FaEnvelope className="text-pink-300 text-xl" />
              </div>
              <div>
                <h3 className="text-neutral-300 font-medium mb-1">Email</h3>
                <p className="text-neutral-400">{CONTACT.email}</p>
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="lg:w-2/3">
          <ContactForm/>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
