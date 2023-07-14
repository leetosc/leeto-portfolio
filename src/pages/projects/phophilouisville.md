---
layout: '@/templates/BasePost.astro'
title: Pho Phi Louisville
description: Website for Pho Phi Restaurant in Louisville, Kentucky
pubDate: 2019-12-26T00:00:00Z
imgSrc: '/assets/images/posts/screenshot-phophilouisville.png'
imgAlt: 'phophi'
---

### Background

My uncle owns a Pho restaurant in Louisville, Kentucky called Pho Phi. He wanted a website for his restaurant with basic info as well as job postings and asked me to build one for him. I built and hosted the site using free services and handed it off to him to manage the content.

![Menu](/assets/images/posts/screenshot-phophilouisville2.png 'Menu')
<figcaption align="center">Restaurant Menu</figcaption>


The site has around 1000 monthly active users.

![MAU](/assets/images/posts/phophiMAU.png)
<figcaption align="center">Active Users</figcaption>

### Tech Stack

- Gatsby
- Tailwind CSS
  - Tailwind CSS was used to style the site. This was my first time using Tailwind and although it took me a while to figure it out, it turned out to be a good experience and I learned a lot from using it.
- Netlify CMS
  - Netlify CMS was used to manage the content of the site. It allowed my uncle to update the content himself without having to ask me to update the code. 
- Firebase Functions
  - The jobs contact form called a serverless function to send an email to my uncle via Sendgrid.

### Features:

- Static site built with Gatsby and Netlify CMS
- Contact Form sends an email via Sendgrid

