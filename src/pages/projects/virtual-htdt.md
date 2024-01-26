---
layout: '@/templates/BasePost.astro'
title: Virtual HTDT
description: Online HTDT for Don Bosco Virtual Camp 2021
pubDate: 2021-03-20T00:00:00Z
imgSrc: 'https://virtualhtdt.donbosco.cc/saigon/benthanh.jpg'
imgAlt: 'virtual htdt'
---

During the 2020-2021 school year, we were unable to have in-person events due to the COVID pandemic. My Doan's biggest event of the year is an annual Spring Break Camp, and we knew that our kids, especially the senior class, were really looking forward to it. We decided to put together a full 2-day virtual camp, and tried to have online versions of the normal camp activities. We got the kids together on Discord and split them into teams, and they competed in various activities online. 

One of the activities was a virtual HTDT, which I built as an interactive journey/escape room style game. The team would get in a Discord channel, and one person would share their screen. They would then go through the journey together, and the team would have to work together to solve the puzzles and move on to the next step. The journey takes them on a tour of Vietnam, and includes some easter eggs of actual images and videos of our HTs.

![docs helper](/assets/images/projects/virtualhtdt/screenshot-virtualhtdt.png 'Virtual HTDT')
<figcaption align="center">HT Hero</figcaption>

The app was built with Next.js and ChakraUI. The logic is mostly client-side, except for one activity where each kid wrote complements for their teammates and it would generate a personalized word cloud for each person. The backend was hosted on a Raspberry Pi and unfortunately is no longer up. Maybe one day I will update it to work completely client-side without the need for a backend.

## Some cool features
- integrated puzzles to solve in order to advance
- real photos and videos from our HTs in Vietnam
- personalized word cloud for each team member
- collect items during the journey into the inventory
  - drag and drop puzzle with the items 
