"use client";

import { content } from "@/app/data/content";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const titles = [
  "Brandon Irving",
  "A Software Engineer",
  "An Innovator",
  "A Problem Solver",
];

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -150]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden pt-16 flex items-center justify-center">
      {/* Centered content vertically and horizontally */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <Image
          src={content.hero.background}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="brightness-50"
        />
      </motion.div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div
            id="who-am-i-section"
            className="flex flex-col items-center justify-center space-y-4"
          >
            <h1 className="text-8xl md:text-8xl font-bold mb-2">Who Am I?</h1>
            <div className="h-[4em] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentIndex}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="block text-4xl md:text-6xl font-bold text-blue-400"
                >
                  {titles[currentIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
          <motion.p
            className="text-xl md:text-2xl text-gray-200 mt-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {content.hero.title}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
