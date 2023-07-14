---
layout: '@/templates/BasePost.astro'
title: DB COVID Screening
description: COVID Screening App for 2020-2021 school year
pubDate: 2020-08-25T00:00:00Z
imgSrc: '/assets/images/posts/dbsafe/screenshot-dbsafe1.png'
imgAlt: 'dbsafe'
---

### Background

This was a simple app that I threw together for my Doan to screen students for COVID symptoms before they came to church during the 2020-2021 school year. It was a simple form that asked the user if they had any symptoms, and if they did, they were not allowed to come to church. 

The app would show a green or red ticket that the students or parents could screenshot and show the screeners when they came to church. The form was submitted to a Google Sheet, and the screeners could check the list in case the students didn't have a phone or forgot to screenshot the ticket.

![ticket view](/assets/images/posts/dbsafe/screenshot-dbsafe2.png 'Ticket View')
<figcaption align="center">Ticket View</figcaption>

### Tech Stack

- Gatsby
  - This did not really need to be built with Gatsby, it could have been a simple SPA and I had to figure out a few things to get it to work right with Gatsby (`window` object not existing on the server, etc.). However, I had used Gatsby for another project at the time and just went with it because it was familiar.
- Tailwind CSS
  - This was my first time using Tailwind CSS in a personal project. I liked it and much prefer it to raw CSS. I learned a lot from using it and have used it in many other projects since.
- Formik
  - Formik was used to manage the form state and validation. The most complicated part was the Field Array that allowed multiple students to be added under one form, so that only one submission was needed per household.
- Google Sheets API
  - I used a Google Sheet as my "backend" because most of the people who would be managing the data were nontechnical but were familiar with Google Sheets. The Google Sheets API was used to read and write to the sheet.
- Firebase
  - I used Firebase Auth for authentication. The users and permissions were stored in the Google Sheet.

### Features:

- Students/parents fill out the form
  - Support for multiple students on one form
- Form submissions are saved to a Google Sheet
- Authorized Screeners can view the list of students who have submitted the form
  - Quick search that supported Vietnamese characters
- Language switcher (English/Vietnamese) to accommodate parents who did not know English 


![Screener View](/assets/images/posts/dbsafe/screenshot-dbsafe3.png 'Screener View')
<figcaption align="center">Screener View</figcaption>

