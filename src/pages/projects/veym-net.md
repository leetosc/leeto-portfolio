---
layout: '@/templates/BasePost.astro'
title: VEYM.net
description: Official Website of the Vietnamese Eucharistic Youth Movement in the USA
pubDate: 2022-09-30T00:00:00Z
imgSrc: '/assets/images/projects/veym/screenshot-veymnet.png'
imgAlt: 'veym.net'
---


The current version of the VEYM.net website launched in October 2022. It is built with Next.js and ChakraUI and hosted on Vercel. The backend CMS is [Directus](https://directus.io/). It is easily extensible for the developers and the content editing UI is user-friendly for the content editors.

## History

The previous version of the VEYM.net website was built in 2018 using Gatsby, with a Wordpress backend. This replaced a much older Wordpress site with many usability issues.

![veym old](/assets/images/projects/veym/screenshot-veymold.png 'Old VEYM site')
<figcaption align="center">Old VEYM.net Site</figcaption>

Due to limitations imposed by the original architecture, over the years it became increasingly hard to maintain and most content changes had to be done manually in the codebase. All changes had to go through the deveopers (me).


### New Site Requirements

We decided to build a new site from scratch with the following requirements:
- Modern tech stack and architecture
- Easy for non-technical users to edit content
- Easy for developers to extend and maintain

## Development

### Tech Stack

#### Next.js

Next.js was chosen as the frontend framework for its ease of use and flexibility. It has a great developer experience with features like hot module reloading and automatic code splitting, and the ISR (incremental static regeneration) feature is useful for keeping the site content up to date without requiring full rebuilds.

#### ChakraUI

ChakraUI is a component library that provides a set of accessible, reusable, and composable React components that make it easy to build websites and apps. It provides a great developer experience with features like theme support, dark mode, and responsive styles out of the box. Since the majority of our users are on mobile devices, it was important to have a responsive site that looks good on all screen sizes.

#### Directus

Directus is an open-source headless CMS that provides a user-friendly UI for content editors to manage content. It is built with a modern tech stack and has a great developer experience. It is easy to extend and customize, and it provides a REST API for the frontend to fetch content. We self hosted this on our VM in Azure and it uses our Azure AD B2C for authentication.

![Directus](/assets/images/projects/veym/screenshot-directus.png 'Directus')
<figcaption align="center">Directus CMS</figcaption>

#### Vercel

Vercel is a cloud platform for static sites and serverless functions. It provides a great developer experience with features like automatic deployments, preview deployments, and serverless functions. It is easy to integrate with Github and the free tier is very generous.