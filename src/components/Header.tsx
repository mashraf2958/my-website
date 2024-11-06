import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Database, Mail, Github, Linkedin } from 'lucide-react';

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926')] bg-cover bg-center opacity-20" />
      </div>
      
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary-light dark:border-primary-dark"
        >
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
            alt="Mohamed Ashraf"
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Mohamed Ashraf
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-3 mb-6 text-blue-300 dark:text-blue-400"
        >
          <MapPin className="w-5 h-5" />
          <span>GIS Expert</span>
          <span className="mx-2">|</span>
          <Database className="w-5 h-5" />
          <span>Database Administrator</span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-4"
        >
          <a href="mailto:contact@mohamed.com" className="p-2 hover:text-primary-light dark:hover:text-primary-dark transition-colors">
            <Mail className="w-6 h-6" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-primary-light dark:hover:text-primary-dark transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-primary-light dark:hover:text-primary-dark transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2" />
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}