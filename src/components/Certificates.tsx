import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

export default function Certificates() {
  const certificates = [
    {
      title: 'Advanced GIS',
      issuer: 'Community Service Center, Cairo University',
      date: '2023',
      image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e',
      link: '#'
    },
    {
      title: 'Spatial Data Science: The New Frontier in Analytics',
      issuer: 'ESRI',
      date: '2023',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
      link: '#'
    },
    {
      title: 'Introduction to GIS Mapping',
      issuer: 'University of Toronto',
      date: '2023',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
      link: '#'
    },
    {
      title: 'Web Development Challenger Track',
      issuer: 'Ministry of Communications and Information Technology',
      date: '2023',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
      link: '#'
    },
    {
      title: 'Database Fundamentals',
      issuer: 'Mahara-Tech ITI Platform',
      date: '2023',
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d',
      link: '#'
    },
    {
      title: 'SQL Intermediate',
      issuer: 'Sololearn',
      date: '2023',
      image: 'https://images.unsplash.com/photo-1489875347897-49f64b51c1f8',
      link: '#'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200" id="certificates">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Education & Certificates</h2>
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Bachelor of Arts</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Helwan University, Department of Geography and Geographic Information Systems
              <br />Division of Maps and Survey
              <br />Graduation Year: 2020 | Grade: Good
              <br />Graduation Project: Study of the Population and its Characteristics in South Cairo
              <br />Project Grade: Excellent
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 z-10" />
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-primary-light dark:text-primary-dark" />
                  <span className="text-blue-300">{cert.date}</span>
                </div>
                <h3 className="text-lg font-bold mb-1">{cert.title}</h3>
                <div className="flex items-center justify-between">
                  <p className="text-gray-300">{cert.issuer}</p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-light dark:text-primary-dark hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}