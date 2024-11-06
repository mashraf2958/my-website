import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'GIS Team Leader',
      company: 'EDGE PRO For Information System',
      period: 'Dec 2023 - Present',
      description: 'Leading GIS projects and team management.',
      achievements: [
        'Managing GIS projects and team coordination',
        'Implementing advanced spatial analysis solutions',
        'Overseeing technical implementations'
      ]
    },
    {
      title: 'Team Leader - Technical Support & Quality Control',
      company: 'Technology Center For Real Estate Cadastral Registration (RSC)',
      period: 'Sep 2023 - Nov 2023',
      description: 'Led technical support and quality control operations.',
      achievements: [
        'Managed technical support team',
        'Implemented quality control procedures',
        'Oversaw cadastral registration processes'
      ]
    },
    {
      title: 'GIS Specialist',
      company: 'National Spatial Data Infrastructure Center (NSDI)',
      period: 'May 2022 - Dec 2023',
      description: 'Worked on various GIS projects including Maintenance Change Detection Center (CDC) Database.',
      achievements: [
        'Managed CDC Database maintenance',
        'Worked on Kitchener Drain Depollution Project',
        'Created DEM for JEBEL OHIER infrastructure'
      ]
    },
    {
      title: 'Surveyor',
      company: 'Petrojet',
      period: 'Dec 2021 - May 2022',
      description: 'Led surveying projects at Central Park (Green River) in New Capital.',
      achievements: [
        'Conducted land surveys for major projects',
        'Managed surveying operations',
        'Coordinated with project teams'
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200" id="experience">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Work Experience</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional journey in GIS, Surveying, and Database Administration
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-12 relative pl-8 border-l-2 border-primary-light dark:border-primary-dark last:mb-0"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-primary-light dark:bg-primary-dark rounded-full flex items-center justify-center">
                <Briefcase className="w-3 h-3 text-white" />
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{exp.title}</h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>
                
                <p className="text-primary-light dark:text-primary-dark font-medium mb-4">{exp.company}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-2 h-2 bg-primary-light dark:bg-primary-dark rounded-full mt-2 mr-2" />
                      <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}