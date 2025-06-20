import { motion } from 'framer-motion';
import { CONTACT } from '../constants';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <section className="border-b border-neutral-800 pb-24 px-4 sm:px-8 md:px-12">
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.2 }}
        className="my-16 text-center text-4xl font-bold tracking-wide text-white"
      >
        Get in <span className="text-neutral-500">Touch</span>
      </motion.h1>
      
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.2 }}
        className="flex flex-col lg:flex-row gap-12"
      >
        {/* Contact Info */}
        <div className="lg:w-1/3 space-y-8">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg tracking-wide text-neutral-400 leading-relaxed"
          >
            {CONTACT.subtitle}
          </motion.p>
          
          {/* Address */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-start space-x-4"
          >
            <div className="bg-neutral-900 p-3 rounded-xl border border-neutral-800 shadow-sm">
              <FaMapMarkerAlt className="text-pink-400 text-xl" />
            </div>
            <div>
              <h3 className="text-neutral-300 font-medium mb-1">Address</h3>
              <p className="text-neutral-400 text-sm">{CONTACT.address}</p>
            </div>
          </motion.div>

          {/* Phone */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-start space-x-4"
          >
            <div className="bg-neutral-900 p-3 rounded-xl border border-neutral-800 shadow-sm">
              <FaPhone className="text-pink-400 text-xl" />
            </div>
            <div>
              <h3 className="text-neutral-300 font-medium mb-1">Phone</h3>
              <p className="text-neutral-400 text-sm">{CONTACT.phoneNo}</p>
            </div>
          </motion.div>

          {/* Email */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-start space-x-4"
          >
            <div className="bg-neutral-900 p-3 rounded-xl border border-neutral-800 shadow-sm">
              <FaEnvelope className="text-pink-400 text-xl" />
            </div>
            <div>
              <h3 className="text-neutral-300 font-medium mb-1">Email</h3>
              <p className="text-neutral-400 text-sm">{CONTACT.email}</p>
            </div>
          </motion.div>
        </div>

        {/* Contact Form */}
        <div className="lg:w-2/3 w-full">
          <ContactForm />
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
