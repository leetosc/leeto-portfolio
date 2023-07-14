---
layout: '@/templates/BasePost.astro'
title: Hiep Si v2
description: Site for announcements, resources, and points tracking for Don Bosco Hiep Si
pubDate: 2017-08-13T00:00:00Z
imgSrc: '/assets/images/projects/hiepsi2/screenshot-hiepsi2-1.png'
imgAlt: 'hiepsi2'
---

### Background

This is the second iteration of the Hiep Si site, built for the 2017-2018 school year. The site was used to post announcements and resources, and track points for both the teams and individual Doan Sinh. 

The Doan Sinh signed up for an account and were added to their respective teams. Teams and individuals earned points for various tasks similar to the system in Harry Potter. The points were tracked on the site and the Doan Sinh could see their points and the points of their team in relation to the rest of the class. 

Bo Hoa Thieng could be submitted daily through the app for points. There was an admin dashboard for HTs to view and manage the points of their Doan Sinh.

![Resources](/assets/images/projects/hiepsi2/screenshot-hiepsi2-2.png 'Resources')
<figcaption align="center">Resources</figcaption>



### Tech Stack

- SPA created with `create-react-app`
- React Router
- Bootstrap v3
- Firebase
  - Realtime Database
  - Authentication
  - Hosting


### Features

- Announcements
- Resources
- Points tracking
  - Teams
  - Individuals
- Bo Hoa Thieng submission
- Admin dashboard
  
![Dashboard](/assets/images/projects/hiepsi2/screenshot-hiepsi2-3.png 'Dashboard')
<figcaption align="center">Personal Dashboard</figcaption>

![Admin Dashboard](/assets/images/projects/hiepsi2/screenshot-hiepsi2-4.png 'Admin Dashboard')
<figcaption align="center">Admin Dashboard</figcaption>


### Notes

This was my first real application. Looking back at the code, it is a miracle that it even worked. I am pretty impressed with what I was able to accomplish with my limited knowledge at the time.

Firebase was key in making this app possible, since concepts like databases, authentication, and even hosting were very new to me and it would have been very difficult for me to set up a backend on my own at the time.

The code is in Bitbucket, since at the time Github did not have free private repos. 