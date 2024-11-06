import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-primary-light dark:text-primary-dark" />
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">Email</h3>
                <p className="text-gray-600 dark:text-gray-300">contact@mohamed.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-primary-light dark:text-primary-dark" />
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">Location</h3>
                <p className="text-gray-600 dark:text-gray-300">Cairo, Egypt</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-primary-light dark:text-primary-dark" />
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">Phone</h3>
                <p className="text-gray-600 dark:text-gray-300">+20 123 456 789</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary-light dark:bg-primary-dark text-white py-2 px-6 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}