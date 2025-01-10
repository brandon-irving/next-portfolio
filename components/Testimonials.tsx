"use client";

import { content } from "@/app/data/content";
import { useScrollPosition } from "@/app/hooks/useScrollPosition";
import { AnimatePresence, motion } from "framer-motion";
import { Linkedin, Quote, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
type SelectedTestominal = null | (typeof content.testimonials)[0];
export default function Testimonials() {
  const scrollPosition = useScrollPosition();
  const [selectedTestimonial, setSelectedTestimonial] =
    useState<SelectedTestominal>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (testimonial: SelectedTestominal) => {
    setSelectedTestimonial(testimonial);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTestimonial(null);
  };

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-800 py-20 pt-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: scrollPosition > 2500 ? 1 : 0,
            y: scrollPosition > 2500 ? 0 : 50,
          }}
          transition={{ duration: 0.8 }}
        >
          What People Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {content.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: scrollPosition > 2600 ? 1 : 0,
                y: scrollPosition > 2600 ? 0 : 50,
              }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Quote className="w-10 h-10 text-blue-500/20 absolute top-6 right-6" />
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 line-clamp-3">
                {testimonial.text}
              </p>
              <button
                onClick={() => openModal(testimonial)}
                className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
              >
                Show More
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && selectedTestimonial && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg max-w-2xl w-full relative"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-red-500"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={selectedTestimonial.image}
                    alt={selectedTestimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    {selectedTestimonial.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {selectedTestimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {selectedTestimonial.text}
              </p>
              <a
                href={selectedTestimonial.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                <span>View on LinkedIn</span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
