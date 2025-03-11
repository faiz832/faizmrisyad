import searchfilm from "../../assets/images/search-film.png";
import exploresolo from "../../assets/images/explore-solo.png";
import simpleblog from "../../assets/images/simple-blog.png";
import animelist from "../../assets/images/anime-list.png";
import tokokelontong from "../../assets/images/toko-kelontong.png";
import simplyproperty from "../../assets/images/simplyproperty.png";
import devcareerai from "../../assets/images/devcareer-ai.png";
import healthlyai from "../../assets/images/healthly-ai.png";
import menpyai from "../../assets/images/menpy-ai.png";

export const projectData = [
  {
    id: 1,
    image: searchfilm,
    title: "Film",
    category: "frontend",
    desc: "A movie listing website that utilizes the themoviedb.org API as its backend. Currently, the available feature is limited to movie search.",
    stack: "React, CSS",
    link: "https://search-film-beta.vercel.app/",
    year: "2023",
  },
  {
    id: 2,
    image: animelist,
    title: "Anime List",
    category: "frontend",
    desc: "A simple anime list website using the shikimori.one API as the backend. Developed with Next.js 14 for server-side rendering, featuring infinite scroll and animations powered by Framer Motion.",
    stack: "Next, Tailwind",
    link: "https://anime-list-jet.vercel.app/",
    year: "2023",
  },
  {
    id: 3,
    image: exploresolo,
    title: "Explore Solo",
    category: "frontend",
    desc: "A simple landing page introducing the city of Solo. This competition entry is created using HTML, CSS, JS, and the Bootstrap framework in accordance with the competition guidelines.",
    stack: "HTML, CSS, Bootstrap, JS",
    link: "https://explore-solo.vercel.app/",
    year: "2023",
  },
  {
    id: 4,
    image: simpleblog,
    title: "Simple Blog",
    category: "frontend",
    desc: "A simple blog with JQuery implementation to filter categories. Utilizing only HTML, CSS, and JS.",
    stack: "HTML, CSS, JS, JQuery",
    link: "https://simple-blog-lovat.vercel.app/",
    year: "2023",
  },
  {
    id: 5,
    image: tokokelontong,
    title: "Toko Kelontong",
    category: "fullstack",
    desc: "A simple inventory management project using Laravel 10 and Tailwind CSS. It includes features such as Login, Register, CRUD for items, CUD for item categories, Search, Change Password, and also displays the total number of users, items, and categories. The database incorporates a one-to-one relationship.",
    stack: "Laravel, Tailwind",
    link: "https://tokokelontongpakipul1.000webhostapp.com/",
    year: "2023",
  },
  {
    id: 6,
    image: simplyproperty,
    title: "Simply Property",
    category: "frontend",
    desc: "A static website that I developed for company profiles and property listings of simply property, Implement basic react hooks, useState, useEffect, & useContext. Implement React Router DOM for dynamic routing. Using a loop through an array of objects for database",
    stack: "React, Tailwind",
    link: "https://simply-property.vercel.app/",
    year: "2023",
  },
  {
    id: 7,
    image: devcareerai,
    title: "DevCareer AI",
    category: "fullstack",
    desc: "A course website with AI resume optimization. Using Laravel, Tailwind, MySQL, and Gemini-AI API",
    stack: "Laravel, Tailwind, MySQL",
    link: "https://github.com/faiz832/DevCareer-AI",
    year: "2024",
  },
  {
    id: 8,
    image: healthlyai,
    title: "Healthly AI",
    category: "fullstack",
    desc: "A healthcare website with food image AI generator that can be used to calculate the nutritional value of food. Using Laravel, Tailwind, MySQL, and Gemini-AI API",
    stack: "Laravel, Tailwind, MySQL",
    link: "https://github.com/faiz832/healthly",
    year: "2024",
  },
  {
    id: 9,
    image: menpyai,
    title: "Menpy AI",
    category: "fullstack",
    desc: "Menpy AI is an AI-driven platform for mental health, offering assessments, personalized support, and tools to foster emotional balance and well-being. It's a cutting-edge solution for individuals seeking holistic wellness.",
    stack: "Laravel, Tailwind, MySQL",
    link: "https://github.com/faiz832/Menpy-AI",
    year: "2024",
  },
];

export const projectCategories = [
  {
    name: "all",
  },
  {
    name: "frontend",
  },
  {
    name: "fullstack",
  },
];
