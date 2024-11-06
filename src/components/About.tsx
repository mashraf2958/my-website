import React from 'react';
import { motion } from 'framer-motion';
import { Map, Database, Code, Ruler, Globe2, Binary } from 'lucide-react';

export default function About() {
  const skills = [
    {
      icon: <Map className="w-6 h-6" />,
      title: 'GIS Expertise',
      description: 'Expert in ArcGIS, QGIS, and spatial analysis with extensive project experience'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Database Management',
      description: 'Proficient in PostgreSQL, SQL Server, and spatial databases'
    },
    {
      icon: <Ruler className="w-6 h-6" />,
      title: 'Land Surveying',
      description: 'Experienced surveyor with expertise in Civil 3D and AutoCAD'
    },
    {
      icon: <Globe2 className="w-6 h-6" />,
      title: 'Spatial Analysis',
      description: 'Advanced skills in spatial data science and GIS mapping'
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Web Development',
      description: 'Knowledge of HTML, CSS, and web technologies'
    },
    {
      icon: <Binary className="w-6 h-6" />,
      title: 'Technical Tools',
      description: 'Proficient in FME, M.App Enterprise, and Google Earth Pro'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            GIS Team Leader and Database Administrator with a strong background in spatial analysis and surveying. 
            Graduate of Helwan University with extensive experience in GIS mapping, database management, and land surveying projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="text-primary-light dark:text-primary-dark mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{skill.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}