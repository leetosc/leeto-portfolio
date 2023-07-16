---
layout: '@/templates/BasePost.astro'
title: Dogs Fed Time Tracker
description: Device to keep track of when the dogs were fed
pubDate: 2021-09-05T00:00:00Z
imgSrc: '/assets/images/projects/dogsFedTracker/device.jpg'
imgAlt: 'dogs-fed-tracker'
---

## Background

My dogs are fed twice daily: once in the morning and once in the evening. However, due to multiple family members responsible for feeding them, there were instances where the dogs were fed more than necessary because someone wasn't aware they had already been fed. Other times, there was an assumption that they had already been fed by someone else, resulting in the dogs going hungry. To resolve these issues, I designed a system that recorded the last time the dogs were fed, thus helping us to avoid such scenarios.

![Dogs](/assets/images/projects/dogsFedTracker/dogs.jpg 'Dogs')
<figcaption align="center">My dogs</figcaption>

## Project Description

The Raspberry Pi was connected to a button and LCD screen and a case was 3D printed. It was hung above the dogs' bowls. When the button was pressed, it would send the current time to the server and display the time on the LCD screen. 

A web page showed the last time the dogs were fed and the log of all the fed times so it could be checked from anywhere. The QR code was on the case so it could be easily accessed.

Each day, if the dogs were not fed by a certain time it would send a reminder text message to my cousin who lived there at the time.

## Tech Stack

- Raspberry Pi Zero W
- Python script that sent the time to the server on button press and displayed the time on the LCD screen
- Directus for the backend
  - This was a super fast and easy way to set up a database and API
- simple HTML page to show the last fed time


## Notes

Eventually people got lazy about remembering to press the button and the system was abandoned. However, it was a fun project to work on and I learned a little bit about electronics.