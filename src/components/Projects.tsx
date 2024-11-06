import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'NSDI Database Management',
      description: 'Led the maintenance and optimization of the Change Detection Center (CDC) Database at the National Spatial Data Infrastructure Center.',
      image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e',
      tags: ['GIS', 'Database', 'NSDI']
    },
    {
      title: 'Kitchener Drain Project',
      description: 'GIS & CAD specialist for the Kitchener Drain Depollution and Rehabilitation Project.',
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d',
      tags: ['GIS', 'CAD', 'Environmental']
    },
    {
      title: 'JEBEL OHIER DEM',
      description: 'Created Digital Elevation Model (DEM) for JEBEL OHIER infrastructure project in Sudan.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
      tags: ['DEM', 'Infrastructure', 'Surveying']
    },
    {
      title: 'Central Park Survey',
      description: 'Led surveying operations at Central Park (Green River) in New Capital.',
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df',
      tags: ['Surveying', 'Urban Planning']
    },
    {
      title: 'Buffalo Burger Location Analysis',
      description: 'Designed cost maps for Saal Investment Company for Buffalo Burger restaurants in Assiut.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692',
      tags: ['GIS', 'Business Analysis']
    },
    {
      title: 'New Valley Governorate Mapping',
      description: 'Designed natural and human maps for the New Valley governorate.',
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df',
      tags: ['Mapping', 'Government']
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200" id="projects">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Showcase of my professional projects in GIS, surveying, and database management.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 flex items-center justify-between">
                  {project.title}
                  <ExternalLink className="w-5 h-5 text-primary-light dark:text-primary-dark" />
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}