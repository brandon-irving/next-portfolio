"use client";

import { useScrollPosition } from "@/app/hooks/useScrollPosition";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const showcaseData = {
  title: "Nani Fandom Charades",
  description:
    "An interactive game that brings anime fans together through charades. Players act out and guess their favorite anime characters and scenes in this engaging multiplayer experience.",
  image: "/images/nani_promo.png",
  features: [
    "Real-time multiplayer gameplay",
    "AI generated games based on what's trending!",
    "Thousands of words, names and characters to act out",
    "Innovative 'No duplicates' system, to keep the game fun and engaging",
    "Anime, Movies, TV Shows, Video Games, Books and more!",
  ],
  technologies: [
    "React Native",
    "Typescript",
    "Node.js",
    "Open AI",
    "Convex",
    "Firebase",
  ],
  links: {
    live: "https://nani-marketing-site-gvje.vercel.app/#download",
    github: "https://github.com/brandon-irving",
    demo: "https://youtube.com/watch?v=demo",
  },
};

export default function Showcase() {
  const scrollPosition = useScrollPosition();

  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 py-20 pt-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: scrollPosition > 3000 ? 1 : 0,
            y: scrollPosition > 3000 ? 0 : 50,
          }}
          transition={{ duration: 0.8 }}
        >
          Featured Project
        </motion.h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{
                opacity: scrollPosition > 3100 ? 1 : 0,
                x: scrollPosition > 3100 ? 0 : -50,
              }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-video rounded-xl overflow-hidden group">
                <Image
                  src={showcaseData.image}
                  alt={showcaseData.title}
                  layout="fill"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{
                opacity: scrollPosition > 3100 ? 1 : 0,
                x: scrollPosition > 3100 ? 0 : 50,
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold">{showcaseData.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                {showcaseData.description}
              </p>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold">Key Features</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {showcaseData.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{
                        opacity: scrollPosition > 3200 ? 1 : 0,
                        x: scrollPosition > 3200 ? 0 : 20,
                      }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {showcaseData.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      className="px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-sm"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: scrollPosition > 3300 ? 1 : 0,
                        scale: scrollPosition > 3300 ? 1 : 0.8,
                      }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href={showcaseData.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Visit Site
                </a>
                <a
                  href={showcaseData.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
                >
                  <Github className="w-5 h-5 mr-2" />
                  View Code
                </a>
                {/* <a
                  href={showcaseData.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </a> */}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
