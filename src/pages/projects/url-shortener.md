---
layout: '@/templates/BasePost.astro'
title: VEYM URL Shortener
description: URL Shortener on the veym.net domain
pubDate: 2022-05-30T00:00:00Z
imgSrc: '/assets/images/projectIcons/urlshortener.png'
imgAlt: 'url.veym.net'
---

## Building a Modern URL Shortener for VEYM: Upgrading UI, UX, and Functionality

In the past, VEYM’s URL shortener was a simple yet functional tool—a straightforward PHP page backed by a database with a single table. It got the job done, enabling our members to shorten URLs, but it left much to be desired in terms of user experience, maintainability, and extensibility. As we observed an increase in the tool’s usage, with thousands of clicks each month, it became clear that a modern overhaul was essential.

This post explores the journey of transforming the URL shortener from a basic application to a fully-fledged, feature-rich web app. 

---

### Background: The Original URL Shortener

The original URL shortener was created by another VEYM IT team member. This PHP-based solution relied on a single database table to store URLs and Bootstrap for styling. While functional, it presented several limitations:
  
- **Limited Feature Set**: The app was minimalistic, offering only the core URL shortening feature.
- **Clunky UI**: The Bootstrap-based interface felt outdated and didn’t align with VEYM's other apps.
- **Limited Development Flexibility**: Adding new features or making improvements was challenging due to the monolithic PHP structure and the lack of APIs.

Given these limitations, the app served its basic purpose but lacked flexibility and was challenging to scale or modernize.

---

### The Development Overhaul

With a goal of creating a robust, scalable, and user-friendly URL shortener, I spearheaded a redevelopment effort with the following technologies:

#### 1. Directus for API Creation and Database Management

To manage the backend data and streamline API creation, I set up a Directus instance that connected directly to the original database. Directus provided several advantages:

- **Automatic API Endpoints**: Directus automatically generates RESTful API endpoints for each database table, simplifying data access and integration with the frontend.
- **User-Friendly Admin Interface**: The Directus admin interface made it easier to manage URL records and other data, reducing the need to modify the database manually.
- **Future Flexibility**: With Directus, we gained the flexibility to add more tables and expand the app’s functionality without having to write complex backend code.

#### 2. Frontend Built with Next.js and Chakra UI

For the frontend, I developed a new user interface using **Next.js** and **Chakra UI**, implementing **Azure AD B2C authentication** for secure login. Here’s how each part contributed to a better app:

- **Next.js**: As a React framework optimized for speed and scalability, Next.js allows for fast page loading and server-side rendering, which significantly improved the performance of our URL shortener.
- **Chakra UI**: With Chakra UI, the app’s styling is modern, responsive, and aligned with VEYM’s overall aesthetic. Chakra’s component-based styling allowed for rapid UI development and easy customization.
- **Azure AD B2C Authentication**: By adding Azure AD B2C, we enabled secure, enterprise-grade authentication, allowing VEYM members to sign in and access their URLs confidently. This integration is also consistent with the stack used in VEYM’s Members Portal, ensuring a seamless login experience across applications.

#### 3. Enhanced Features for Better User Experience

With the new tech stack, we could deliver several valuable new features:

- **Copy to Clipboard**: Users can now easily copy shortened URLs with one click, streamlining the sharing process.
- **Dashboard for URL Management**: The dashboard lets users view and manage their existing URLs, adding transparency and control to their experience.
- **QR Code Generation**: Users can instantly generate QR codes for any URL, making it easier to share URLs in a visual format.

---

### Deployment on Vercel

The frontend is deployed on **Vercel**, a platform known for its seamless Next.js deployments and excellent developer experience. With automatic scaling, global CDN, and one-click deployments, Vercel made it simple to maintain a high-performance, scalable app that reliably serves thousands of clicks per month.

---

### Results: A High-Quality URL Shortener That Aligns with VEYM’s Vision

The revamped URL shortener now provides a much-improved user experience. Notable benefits include:

- **Modern UI/UX**: The new design, crafted with Chakra UI, feels intuitive and clean, aligning with VEYM’s aesthetic standards and enhancing overall usability.
- **Feature-Rich Experience**: With Directus as the backend and Next.js as the frontend, we’ve created a flexible foundation that supports new features and future improvements.
- **Increased Reliability and Scalability**: Deployed on Vercel, the app performs well under heavy usage, with thousands of monthly clicks from VEYM members.

The upgraded app has become a valuable tool in our digital ecosystem, meeting the needs of our members more effectively than ever.

