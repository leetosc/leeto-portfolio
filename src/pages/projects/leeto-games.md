---
layout: '@/templates/BasePost.astro'
title: Board Game Library
description: Catalog of my board games with a checkout system
pubDate: 2021-01-06T00:00:00Z
imgSrc: '/assets/images/projects/leetogames/screenshot-leetogames.png'
imgAlt: 'leeto.games'
---

This was my first major fullstack side project and my first time working with a lot of the tech stack. I learned a lot about the various technologies from building this app and it has greatly influenced my software development path since. 
Looking back, the code and overall architecture could be improved in many ways, but I am still proud of what I was able to accomplish with my limited knowledge at the time, and building this project was a great learning experience.


### Motivation

I have a decently large collection of board games, and people often came over to borrow some. Because of this, I found myself struggling to keep track of who had borrowed which games. Consequently, I initially created this system with the sole purpose of managing my collection. Over time, I expanded its functionality to include additional features like tracking plays and scores.

### Tech Stack

- Next.js
  - This was my first time using Next.js. I had previously used Gatsby for all of my other projects. It took a bit to get used to, since many of Gatsby's plugins handled a lot of things automatically, and I had to do more things manually with Next.js. Next.js has proved to be much more flexible and I have been using it for all of my projects since. 
- Chakra UI
  - I used Chakra UI for the first time on this project. I really like it and it has been my go-to for all of my projects since. It is very easy to handle things like dark/light mode and responsive design, and it has a lot of built-in components that are easy to customize.
- Firebase
  - I used Firebase for the database and authentication. I didn't know much about databases or backend in general at the time, and in hindsight I think a relational database would have been a better choice.

### Features:

- Add games to your library
- View your library, search for games
- Check in/check out games
- Track plays and scores
- View stats about your plays
- Support for multiple users and libraries


![leeto.games](/assets/images/projects/leetogames/screenshot-leetogames2.png 'Leeto.games')
<figcaption align="center">Stats View</figcaption>

