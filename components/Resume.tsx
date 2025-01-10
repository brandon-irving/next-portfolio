"use client";

import { content } from "@/app/data/content";
import { useScrollPosition } from "@/app/hooks/useScrollPosition";
import { motion } from "framer-motion";
import { Building2, Download, ExternalLink, GraduationCap } from "lucide-react";

export default function Resume() {
  const scrollPosition = useScrollPosition();

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-800 py-20 pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <motion.h2
              className="text-4xl font-bold"
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: scrollPosition > 1500 ? 1 : 0,
                y: scrollPosition > 1500 ? 0 : 50,
              }}
              transition={{ duration: 0.8 }}
            >
              Resume
            </motion.h2>
            <div className="flex items-center space-x-4">
              <motion.a
                download={true}
                href={content.resume.downloadUrl}
                className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: scrollPosition > 1500 ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </motion.a>
              <motion.a
                href={content.resume.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: scrollPosition > 1500 ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Online
              </motion.a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{
                opacity: scrollPosition > 1600 ? 1 : 0,
                x: scrollPosition > 1600 ? 0 : -50,
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center mb-6">
                <GraduationCap className="w-6 h-6 text-blue-500 mr-2" />
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>
              {content.resume.education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="mb-8 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: scrollPosition > 1600 ? 1 : 0,
                    y: scrollPosition > 1600 ? 0 : 20,
                  }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <h4 className="text-xl font-medium mb-2">{edu.degree}</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {edu.school}
                  </p>
                  <p className="text-gray-500 dark:text-gray-500 mt-2">
                    {edu.year}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{
                opacity: scrollPosition > 1600 ? 1 : 0,
                x: scrollPosition > 1600 ? 0 : 50,
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center mb-6">
                <Building2 className="w-6 h-6 text-blue-500 mr-2" />
                <h3 className="text-2xl font-semibold">Experience</h3>
              </div>
              {content.resume.experience.map((exp, index) => (
                <motion.div
                  key={index}
                  className="mb-8 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: scrollPosition > 1600 ? 1 : 0,
                    y: scrollPosition > 1600 ? 0 : 20,
                  }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <h4 className="text-xl font-medium mb-2">{exp.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {exp.company}
                  </p>
                  <p className="text-gray-500 dark:text-gray-500 mt-2">
                    {exp.period}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
