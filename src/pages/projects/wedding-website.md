---
layout: '@/templates/BasePost.astro'
title: Wedding Website
description: My wedding website
pubDate: 2021-12-18T00:00:00Z
imgSrc: '/assets/images/projects/dknlovestory/screenshot-dknlovestory.png'
imgAlt: 'dknlovestory'
---

I made this site for my wedding in 2021 using Gatsby. I used it to share info about the wedding, collect addresses and RSVPs, and post pictures.

## Features:
(Some have since been disabled)

- Collect addresses for us to mail invitations
- Submit RSVP
  - Responses went to a Google Sheet
- Photos pulled from Google Photos Albums
- Countdown to the wedding (now counting up)
- Searchable seating chart for the reception


![dknlovestory](/assets/images/projects/dknlovestory/screenshot-dknlovestory.png 'Wedding Website')
<figcaption align="center">Wedding Website</figcaption>

## Notes
Since there are so many photos in the Google Photos albums and the images are pulled and optimized at build time, the builds were taking too long and timing out on Netlify. I had to build it locally and deploy the build directory to Netlify using the CLI. 

Getting the RSVP form to send data to a Google Sheet relied on a clever trick using Google Forms. It involved getting the ID of each field of the Google Form and using that in my custom form on the RSVP page. When the user clicked Submit it would act as if they had submitted the Google Form, and the data would be sent to the Google Sheet.