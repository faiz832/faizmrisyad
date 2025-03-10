import searchfilm from "../../assets/asd/search-film.png";
import exploresolo from "../../assets/asd/explore-solo.png";
import simpleblog from "../../assets/asd/simple-blog.png";
import animelist from "../../assets/asd/anime-list.png";
import tokokelontong from "../../assets/asd/toko-kelontong.png";
import simplyproperty from "../../assets/asd/simplyproperty.png";

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
];

export const projectNav = [
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
