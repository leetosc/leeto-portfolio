---
layout: '@/templates/BasePost.astro'
title: Hiep Si v3
description: Site for announcements, resources, and points tracking for Don Bosco Hiep Si and Nghia Si
pubDate: 2021-08-25T00:00:00Z
imgSrc: '/assets/images/posts/screenshot-hiepsi3.png'
imgAlt: 'hiepsi3'
---

### Background

This is the third iteration of the Hiep Si site. I built it for both Nghia Si and Hiep Si, and had two deployments on Vercel from the same repo, with different environment variables for each. The site was used to post announcements and resources, and track points for both the teams and individual Doan Sinh. 

The Doan Sinh signed up for an account and were added to their respective teams. Teams and individuals earned points for various tasks similar to the system in Harry Potter. The points were tracked on the site and the Doan Sinh could see their points and the points of their team. 

Bo Hoa Thieng could be submitted daily through the app for points. There was an admin dashboard for HTs to view and manage the points of their Doan Sinh.



### Tech Stack

- Next.js
- Chakra UI
- Strapi
  - As a frontend developer, Strapi made it really easy to build a backend for the app. It was easy to create the entities and relationships, manage users, and it automatically created all the endpoints for the frontend to use. It had a nice UI for editing the content and managing the data. I would definitely use it again for future projects.

### Features

- Announcements
- Resources
- Points tracking
  - Teams
  - Individuals
- Bo Hoa Thieng submission
- Doan Sinh can post prayer intentions
- Admin dashboard
  

### Notes

The app was built with Next.js and ChakraUI on the frontend, with Strapi for the backend. I learned a lot about fullstack development by making this app and many of the things I learned from building it were applied to the VEYM projects I worked on later.

The Strapi instance was hosted on a VM in Oracle Cloud and set up to automatically rebuild and deploy on pushes to the repo. Unfortunately, one day the VM was randomly deleted and I lost all the data. Since the app was no longer used (this happened after the school year ended) I never really got it set up again so the frontend is mostly broken. 

This was my time using Typescript for a personal project. There was a lot of friction trying to figure out how to do things but I learned a lot about how to use Typescript and I would not go back to plain JS. This was a great stepping-stone project to practice with the technologies that I would later use in the VEYM projects.
