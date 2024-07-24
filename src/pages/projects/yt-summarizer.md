---
layout: '@/templates/BasePost.astro'
title: Youtube Summarizer
description: Summarize Youtube videos using AI
pubDate: 2023-12-10T00:00:00Z
imgSrc: '/assets/images/projectIcons/ytSummarizer.png'
imgAlt: 'YT Summarizer'
---


Generate summaries of Youtube videos using AI. Built with Next.js, Tailwind CSS, and tRPC.  It is powered by GPT-4 and Gemini, and is self-hosted on a VM in Oracle Cloud.


![YT Summarizer](/assets/images/projects/ytSummarizer/screenshot-ytsummarizer1.png 'YT Summarizer')
<figcaption align="center">YT Summarizer</figcaption>

### Features
- Generate summaries of Youtube videos
- Generate audio
- Save History
- Share summaries with a link

### Tech Stack

- Next.js
- Tailwind CSS
  - shadcn UI
- tRPC
- Prisma
- Vercel AI SDK
- OpenAI gpt-4-turbo
- Google Gemini
- Next Auth

## Notes

When OpenAI announced the gpt-4-turbo model with its 128k-token context window, I was excited to try it out. The reduced pricing and extended context window opened up the possibility of summarizing the entire transcript of videos of almost any length. I built the app for myself, and I use it a lot. There is also the foundation to monitize it in the future.

As of 2023, the Google Gemini API is free, so it is used to provide a free tier for non-authenticated users. It has a ~30k token limit, so I limited it to videos under 30 minutes.

The core functionality of the app was built in one day. I am getting pretty proficient with the T3 stack. It makes it very easy to bootstrap a fullstack app quickly.