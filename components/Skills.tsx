"use client";

import { content } from "@/app/data/content";
import { useScrollPosition } from "@/app/hooks/useScrollPosition";
import { motion } from "framer-motion";
import {
  Code,
  Component,
  Database,
  FileCode,
  Server,
  Terminal,
} from "lucide-react";

const icons = {
  Code,
  Component,
  Server,
  FileCode,
  Terminal,
  Database,
};

export default function Skills() {
  const scrollPosition = useScrollPosition();

  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 py-20 pt-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: scrollPosition > 2000 ? 1 : 0,
            y: scrollPosition > 2000 ? 0 : 50,
          }}
          transition={{ duration: 0.8 }}
        >
          Technical Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {content.skills.map((skill, index) => {
            // TODO: fix
            const Icon = icons["Code"];
            return (
              <motion.div
                key={index}
                className="relative bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg overflow-hidden group"
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: scrollPosition > 2100 ? 1 : 0,
                  y: scrollPosition > 2100 ? 0 : 50,
                }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600" />
                <div className="flex items-center mb-4">
                  <Icon className="w-6 h-6 text-blue-500 mr-2" />
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-blue-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  />
                </div>
                <div className="mt-2 flex justify-between text-sm text-gray-600 dark:text-gray-400">
                  <span>Proficiency</span>
                  <span>{skill.level}%</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
