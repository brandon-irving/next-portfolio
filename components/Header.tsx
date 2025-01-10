"use client";

import { personal } from "@/app/data/personal";
import { AnimatePresence, motion } from "framer-motion";
import { Linkedin, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", target: "hero" },
  { name: "About", target: "about" },
  { name: "Projects", target: "projects" },
  { name: "Resume", target: "resume" },
  { name: "Skills", target: "skills" },
  { name: "Testimonials", target: "testimonials" },
  { name: "Showcase", target: "showcase" },
  { name: "Contact", target: "contact" },
];

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);

      const sections = navItems.map((item) =>
        document.getElementById(item.target)
      );
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].target);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (target: string) => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSticky ? "bg-white dark:bg-gray-900 shadow-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-0">
        <div className="flex justify-between items-center py-4">
          <AnimatePresence mode="wait">
            {isSticky ? (
              <motion.h1
                key="sticky-title"
                className="text-xl font-bold"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                Brandon&apos;s Portfolio
              </motion.h1>
            ) : (
              <motion.nav
                key="full-nav"
                className="hidden md:flex space-x-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {navItems.map((item) => (
                  <button
                    key={item.target}
                    onClick={() => scrollToSection(item.target)}
                    className={`text-sm font-medium transition-colors duration-300 ${
                      activeSection === item.target
                        ? "text-blue-500"
                        : "text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </motion.nav>
            )}
          </AnimatePresence>
          <div className="flex items-center space-x-4">
            <Link
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              <Linkedin className="w-4 h-4 mr-2" />
              Let&apos;s connect
            </Link>
            <button
              className="md:hidden text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white dark:bg-gray-900 z-40"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="flex flex-col items-center justify-center h-full">
              {navItems.map((item) => (
                <motion.button
                  key={item.target}
                  onClick={() => scrollToSection(item.target)}
                  className={`text-2xl font-medium my-4`}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
