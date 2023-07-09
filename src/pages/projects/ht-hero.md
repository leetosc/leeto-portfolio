---
layout: '@/templates/BasePost.astro'
title: HT Hero
description: Generate ideas for Sinh Hoat
pubDate: 2023-07-06T00:00:00Z
imgSrc: '/assets/images/projectIcons/htHero.png'
imgAlt: 'ht hero'
---


HT Hero can generate ideas for lessons, games, and activities for Sinh Hoat. The frontend is built with Next.js, Tailwind CSS and tRPC.  It uses OpenAI and is self-hosted on the VEYM ITApps VM in Azure.


![docs helper](/assets/images/posts/screenshot-hthero.png 'HT Hero')
<figcaption align="center">HT Hero</figcaption>

## Notes

This was my first project using several technologies: T3 Stack, Tailwind, Prisma, NextAuth, and OpenAI's APIs. I learned a lot about these technologies and how to use them together. Also, since the AI responses took longer than the 10 second execution limit on Vercel Serverless Functions, I had to figure out another way to deploy it. I figured out how to self-host a Next.js app on a VM and set it up to automatically rebuild and deploy on each push to the Github repo. I like the T3 stack a lot and have been using it in several other projects.