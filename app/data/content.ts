import {
  education,
  experience,
  highlightedSkills,
  personal,
  recommnedations,
  skills,
} from "./personal";

export const content = {
  hero: {
    name: personal.name,
    title: personal.title,
    background: "/images/hero.webp",
  },
  about: {
    image: "/images/headshot.jpg",
    journey:
      "My journey in technology is driven by a passion for building impactful solutions. At Altruist, I led teams to develop the patented Fault Tolerant Multi-Account Opening feature, enhancing scalability with React, TypeScript, and Node.js. At Uptime Solutions, I modernized systems with Next.js, boosting performance and team efficiency. Beyond enterprise success, my passion thrives in personal projects like Nani!? The Fandom Charades Game. Built with Expo, TypeScript, and Tamagui, it earned a 4.9-star rating for its engaging user experience. Technology is more than my profession—it's my joy. I'm dedicated to delivering innovative solutions that drive impact and delight users",
    skills: highlightedSkills,
    careerHighlights: [
      "Conceptualized, architected, developed and released my own full featured software product Nani!?. This was built with React Native, Typescript, Node.js, Expo, and OpenAI",
      "At Altruist, I developed the patented Fault Tolerant Multi-Account Opening feature, enhancing scalability increasing CSAT scores and improving user experience. This was built with React, React Native, Node.js, Java and Temporal",
      "At Uptime Solutions, I modernized systems with Next.js, boosting performance and team efficiency. This was built with React, React Native, Node.js, Java, and Temporal",
    ],
  },
  projects: [
    {
      id: 0,
      title: "Nani!? The Fandom Charades Game",
      description:
        "A multiplayer motion based game that brings all type of fans together",
      image: "/images/nani_app_store.jpeg",
      gallery: [
        "/images/nani_app_store.jpeg",
        "/images/nani_app_store.jpeg",
        "/images/nani_app_store.jpeg",
      ],
    },
    {
      id: 1,
      title: "Nani's Marketing Site",
      description:
        "The marketing and privacy site for Nani!? The Fandom Charades Game",
      image: "/images/nani_web_app.png",
      gallery: [
        "/images/nani_web_app.png",
        "/images/nani_web_app.png",
        "/images/nani_web_app.png",
      ],
    },
    {
      id: 2,
      title: "Altruist",
      description: "A financial custodian solution web app",
      image: "/images/altruist_web_app.png",
      gallery: [
        "/images/altruist_web_app.png",
        "/images/altruist_web_app.png",
        "/images/altruist_web_app.png",
      ],
    },
    {
      id: 3,
      title: "Altruist - Mobile",
      description: "A financial custodian solution mobile app",
      image: "/images/altruist_app_store.jpeg",
      gallery: [
        "/images/altruist_app_store.jpeg",
        "/images/altruist_app_store.jpeg",
        "/images/altruist_app_store.jpeg",
      ],
    },

    {
      id: 4,
      title: "YouFit Web App",
      description: "A platform to join, signup and find YouFit gyms near you",
      image: "/images/youfit_web_app.png",
      gallery: [
        "/images/youfit_web_app.png",
        "/images/youfit_web_app.png",
        "/images/youfit_web_app.png",
      ],
    },
    {
      id: 5,
      title: "YouFit Mobile App",
      description:
        "A platform to track your fitness journey, check into gyms and more",
      image: "/images/youfit_app_store.jpeg",
      gallery: [
        "/images/youfit_app_store.jpeg",
        "/images/youfit_app_store.jpeg",
        "/images/youfit_app_store.jpeg",
      ],
    },
    {
      id: 6,
      title: "Uptime Solutions: WorldView",
      description: "A machine analysis and alerting platform",
      image: "/images/uptime_web_app.png",
      gallery: [
        "/images/uptime_web_app.png",
        "/images/uptime_web_app.png",
        "/images/uptime_web_app.png",
      ],
    },
    {
      id: 7,
      title: "Netflix Expecting",
      description:
        "A fun way to announce to family and friends that i'm expecting a child!",
      image: "/images/netflix_web_app.png",
      gallery: [
        "/images/netflix_web_app.png",
        "/images/netflix_web_app.png",
        "/images/netflix_web_app.png",
      ],
    },
  ],
  resume: {
    downloadUrl: "/__resume__.pdf",
    education,
    experience,
  },
  skills,
  testimonials: recommnedations,
};
