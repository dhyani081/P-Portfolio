import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const containerVariant = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5 }
  }
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: import.meta.env.VITE_TO_EMAIL,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      className="w-full max-w-2xl mx-auto bg-neutral-900/50 p-8 rounded-xl border border-neutral-800 shadow-xl"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {['name', 'email', 'message'].map((field, idx) => {
          const isMessage = field === 'message';
          const label = field.charAt(0).toUpperCase() + field.slice(1);
          const placeholder = `Enter your ${field}`;

          return (
            <motion.div
              key={field}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.2 }}
            >
              <label htmlFor={field} className="block text-sm font-medium text-neutral-300 mb-2">
                {label}
              </label>
              {isMessage ? (
                <textarea
                  id={field}
                  name={field}
                  rows={6}
                  required
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full resize-none rounded-lg px-4 py-3 bg-neutral-800/50 text-neutral-300 border border-neutral-700 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300 ring-offset-2 transition-all"
                  placeholder={placeholder}
                />
              ) : (
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  id={field}
                  name={field}
                  required
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full rounded-lg px-4 py-3 bg-neutral-800/50 text-neutral-300 border border-neutral-700 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300 ring-offset-2 transition-all"
                  placeholder={placeholder}
                />
              )}
            </motion.div>
          );
        })}

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-white font-medium transition hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </motion.div>

        {submitStatus && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`mt-4 text-center ${
              submitStatus === 'success' ? 'text-green-400' : 'text-red-400'
            }`}
          >
            {submitStatus === 'success'
              ? 'Message sent successfully!'
              : 'Failed to send message. Please try again.'}
          </motion.div>
        )}
      </form>
    </motion.div>
  );
};

export default ContactForm;
