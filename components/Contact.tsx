"use client";

import { personal } from "@/app/data/personal";
import { useScrollPosition } from "@/app/hooks/useScrollPosition";
import { useCachedState } from "@/hooks/useCachedState";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const scrollPosition = useScrollPosition();
  const [name, setName] = useCachedState("bp-name","");
  const [message, setMessage] = useState("");
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 py-20 pt-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: scrollPosition > 3000 ? 1 : 0,
            y: scrollPosition > 3000 ? 0 : 50,
          }}
          transition={{ duration: 0.8 }}
        >
          Get in Touch
        </motion.h2>
        <motion.form
          className="max-w-lg mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: scrollPosition > 3100 ? 1 : 0,
            y: scrollPosition > 3100 ? 0 : 50,
          }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 dark:text-gray-300 font-bold mb-2"
            >
              Name
            </label>
            <input
            value={name}
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 text-gray-700 dark:text-gray-300 border dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 bg-white dark:bg-gray-800"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 dark:text-gray-300 font-bold mb-2"
            >
              Message
            </label>
            <textarea
            value={message}
              id="message"
              name="message"
              rows={4}
              className="w-full px-3 py-2 text-gray-700 dark:text-gray-300 border dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 bg-white dark:bg-gray-800"
              required
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="flex justify-center">
       <EmailButton name={name} message={message} />
          </div>
        </motion.form>
      </div>
    </section>
  );
}



 function EmailButton({
  name,
  message
 }:{
  name: string;
  message?: string;
 }) {
  const nameText = name ? `my names ${name}.` : "";
  const subject = "Let's Connect!";
  const body = message || `Hi Brandon, ${nameText} I would like to get in touch with you.`;
  const handleEmailClick = () => {
    if(!name) return
    window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <button
    disabled={!name}
      onClick={handleEmailClick}
      className={`flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
        !name ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      <Mail className="w-5 h-5 mr-2" />
      Send Me an Email
    </button>
  );
}
