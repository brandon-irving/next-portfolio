"use client";

import { content } from "@/app/data/content";
import { personal } from "@/app/data/personal";
import { useScrollPosition } from "@/app/hooks/useScrollPosition";
import { motion } from "framer-motion";
import { Briefcase, Calendar, GraduationCap, MapPin } from "lucide-react";
import Image from "next/image";

export default function About() {
  const scrollPosition = useScrollPosition();

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-800 py-20 pt-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: scrollPosition > 300 ? 1 : 0,
            y: scrollPosition > 300 ? 0 : 50,
          }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Row 1: Image and Summary */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: -50 }}
              animate={{
                opacity: scrollPosition > 400 ? 1 : 0,
                x: scrollPosition > 400 ? 0 : -50,
              }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src={content.about.image}
                  alt="Profile"
                  layout="fill"
                  objectFit="contain"
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <div className="space-y-2 text-white">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5" />
                      <span>Birthday: {personal.birthDay}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5" />
                      <span>Based in {personal.location}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Briefcase className="w-5 h-5" />
                      <span>{personal.title}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <GraduationCap className="w-5 h-5" />
                      <span>{personal.education}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{
                opacity: scrollPosition > 400 ? 1 : 0,
                x: scrollPosition > 400 ? 0 : 50,
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-xl leading-relaxed">
                  {content.about.journey}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Row 2: Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">Technical Expertise</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {content.about.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="group p-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5 },
                    },
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-150 transition-transform duration-300" />
                    <span className="font-medium">{skill}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Row 3: Career Highlights */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: scrollPosition > 800 ? 1 : 0,
              y: scrollPosition > 800 ? 0 : 50,
            }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold">Career Highlights</h3>
            <div className="bg-blue-500/10 dark:bg-blue-500/5 p-6 rounded-xl border border-blue-500/20">
              <ul className="space-y-4">
                {content.about.careerHighlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    animate={{
                      opacity: scrollPosition > 900 ? 1 : 0,
                      y: scrollPosition > 900 ? 0 : 50,
                      transition: { duration: 0.8, delay: index * 0.2 },
                    }}
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
