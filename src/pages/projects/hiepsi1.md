---
layout: '@/templates/BasePost.astro'
title: Hiep Si v1
description: First site for announcements, resources, and points tracking for Don Bosco Hiep Si
pubDate: 2016-09-15T00:00:00Z
imgSrc: '/assets/images/projects/hiepsi1/home.png'
imgAlt: 'hiepsi1'
---

## Background

This is the first iteration of the Hiep Si site, built for the 2016-2017 school year. The site was used to post announcements and resources, and track team points. 

Teams earned points for various tasks similar to the system in Harry Potter. The points were tracked on the site and the Doan Sinh could see their team points in relation to the rest of the class. 

Bo Hoa Thieng could be submitted daily through the app for points. There was an admin page for HTs to and manage the points of the Doan Sinh.



## Tech Stack

- Node.js and Express app serving static html
  - various endpoints for data
- MongoDB hosted on mlab
- Bootstrap
- Hosted on Heroku


## Features

- Announcements
- Resources
- Points tracking
  - Teams
- Bo Hoa Thieng submission
- HT page

## Screenshots

![Resources](/assets/images/projects/hiepsi1/resources.png 'Resources')
<figcaption align="center">Resources</figcaption>
  
![BHT](/assets/images/projects/hiepsi1/bht.png 'BHT')
<figcaption align="center">BHT Submission</figcaption>

![Admin page](/assets/images/projects/hiepsi1/htpage.png 'Admin page')
<figcaption align="center">Admin page</figcaption>


## Notes

This app was my first ever software side project. I had just started out as a software engineer doing backend testing and had no frontend or javascript experience at all. I just wanted to make something that would be useful for my Hiep Si class, and hacked together this app with anything that I could find on the internet at the time. 

The app actually worked pretty well at the time, and we used it for the whole school year. 

I remember one "hack" was to use a free Heroku instance to host the app, but since Heroku instances go to sleep after a certain amount of time, I had a function that pinged the app every 10 minutes to keep it awake. This was necessary because the app calculated the points for BHT submissions every night at midnight, and if the app was asleep, the points would not be calculated. 

As I am writing this in 2023, looking back at the code is pretty painful. I am surprised and impressed that I was able to get it to work at all. However, it is a good reminder of how far I have come since then and how much I have learned. It was the desire to build projects like these that led me to learn frontend development and put me in a position to make it into my career.

