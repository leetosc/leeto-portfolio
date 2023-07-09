---
layout: '@/templates/BasePost.astro'
title: Quiz Aide
description: Generate questions and export to Kahoot
pubDate: 2023-07-06T00:00:00Z
imgSrc: '/assets/images/projectIcons/quizaide.png'
imgAlt: 'quiz aide'
---


Quiz Aide uses AI to generate multiple choice questions and can export them to the Kahoot format. It is built with Next.js, Tailwind CSS, shadcn UI, and tRPC.  It uses OpenAI Function Calling and is self-hosted on Leeto's personal VM in Oracle Cloud.


![docs helper](/assets/images/posts/screenshot-quizaide.png 'Quiz Aide')
<figcaption align="center">Quiz Aide</figcaption>

## Notes

This is a T3 stack app and utilizes the new Function Calling capability of OpenAI that was released with the `0613` models. This allows the AI to return a JSON in a specified format which is easy to parse. More features are planned, the goal being for the user to have a dashboard where they can see the questions they generated and create custom quizzes.