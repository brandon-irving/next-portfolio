"use client";

import { content } from "@/app/data/content";
import { useScrollPosition } from "@/app/hooks/useScrollPosition";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Lightbox from "./Lightbox";

export default function Projects() {
  const scrollPosition = useScrollPosition();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [projectsPerPage, setProjectsPerPage] = useState(4);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateProjectsPerPage = () => {
      if (window.innerWidth <= 768) {
        setProjectsPerPage(2);
        setIsMobile(true);
      } else {
        setProjectsPerPage(4);
        setIsMobile(false);
      }
    };

    updateProjectsPerPage();
    window.addEventListener("resize", updateProjectsPerPage);
    return () => window.removeEventListener("resize", updateProjectsPerPage);
  }, []);

  const totalPages = Math.ceil(content.projects.length / projectsPerPage);

  const paginateProjects = () => {
    const startIndex = currentPage * projectsPerPage;
    return content.projects.slice(startIndex, startIndex + projectsPerPage);
  };

  const handlePageChange = (pageIndex: number) => {
    if (pageIndex >= 0 && pageIndex < totalPages) {
      setCurrentPage(pageIndex);
    }
  };

  const handleNextPage = () => {
    handlePageChange(currentPage + 1);
  };

  const handlePrevPage = () => {
    handlePageChange(currentPage - 1);
  };

  return (
    <>
      <section className="min-h-screen bg-white dark:bg-gray-900 py-10 pt-16">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold mb-2 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: scrollPosition > 1000 ? 1 : 0,
              y: scrollPosition > 1000 ? 0 : 50,
            }}
            transition={{ duration: 0.8 }}
          >
            Showcase
          </motion.h2>
          <motion.h3
            className="text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: scrollPosition > 1000 ? 1 : 0,
              y: scrollPosition > 1000 ? 0 : 50,
            }}
            transition={{ duration: 0.8 }}
          >
            Work that i've either developed and released myself, or played an
            integral role in building
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {paginateProjects().map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden cursor-pointer transition-transform hover:scale-105"
                onClick={() => {
                  setSelectedProject(project.id);
                  setCurrentImageIndex(0);
                }}
              >
                <div className="relative h-72">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 dark:text-gray-300">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 0}
              className={`p-2 rounded-full ${
                currentPage === 0
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              } text-white transition-colors duration-300`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index)}
                className={`w-3 h-3 rounded-full ${
                  currentPage === index
                    ? "bg-blue-500"
                    : "bg-gray-400 hover:bg-blue-400"
                }`}
              />
            ))}

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages - 1}
              className={`p-2 rounded-full ${
                currentPage === totalPages - 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              } text-white transition-colors duration-300`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {selectedProject !== null && (
        <Lightbox
          images={content.projects[selectedProject].gallery}
          currentIndex={currentImageIndex}
          onClose={() => setSelectedProject(null)}
          onNavigate={setCurrentImageIndex}
        />
      )}
    </>
  );
}
