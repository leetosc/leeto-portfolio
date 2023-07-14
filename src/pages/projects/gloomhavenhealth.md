---
layout: '@/templates/BasePost.astro'
title: Gloomhaven Monster Tracker
description: Helper app for Gloomhaven to track monster health and statuses
pubDate: 2018-02-21T00:00:00Z
imgSrc: '/assets/images/projects/gloomhavenhealth/screenshot-gloomhavenhealth1.png'
imgAlt: 'hiepsi2'
---

## Background

I was playing a lot of Gloomhaven at the time, and the manual process of tracking monster health and statuses with tokens was a bit tedious. I made this app to help streamline the process. We ran it on an iPad on the table and it worked very well. 


## Tech Stack

- SPA created with `create-react-app`
- Reactstrap

## Features
- Load scenario
  - Automatically loads monsters
- Manually add monsters
- Track monsters
  - HP
  - Rank
  - Status effects
- Boss immunities

## Screenshots

![Monster tracking](/assets/images/projects/gloomhavenhealth/screenshot-gloomhavenhealth2.png 'Monster tracking')
<figcaption align="center">Monster tracking</figcaption>


![collapsed](/assets/images/projects/gloomhavenhealth/screenshot-gloomhavenhealth3.png 'collapsed')
<figcaption align="center">Collapsed view to save space</figcaption>

![menu](/assets/images/projects/gloomhavenhealth/screenshot-gloomhavenhealth4.png 'menu')
<figcaption align="center">Options Menu</figcaption>




## Notes

This was one of my first React apps, and the logic was hacked together from stuff I found online. I was still learning the basics of React at the time, and looking back at the code, it is really really ugly. 

On the surface, however, it is very clean and functional and I am pretty proud of how it turned out. I kept the scope exactly to fit the needs of my group and it worked very well for us. 

The code is in Bitbucket, since at the time Github did not have free private repos.


## Links
<a href="https://www.reddit.com/r/Gloomhaven/comments/868rnj/monster_healthstatus_tracking_app/" target="_blank">Posted on Reddit</a> and got some positive feedback