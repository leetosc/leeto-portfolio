---
layout: "@/templates/BasePost.astro"
title: VEYM Giving Tuesday
description: Implementing a custom donation system for VEYM Giving Tuesday
pubDate: 2024-11-12T00:00:00Z
imgSrc: "/assets/images/posts/veym-giving-tuesday/givingTuesday.png"
imgAlt: "givingTuesday"
---

# VEYM Giving Tuesday Custom Donation System

## Background

For the past few years, VEYM has been running Giving Tuesday donation campaign through Facebook. Last year Facebook switched its payment system to Paypal, which has caused issues with releasing the funds. After almost a year the problem has still has not been resolved and we have not received the money.

While that issue is being worked on, for this year's Giving Tuesday it was decided to build our own donation system to avoid these issues. I was notified the week of November 4 that we would need this system, and that we needed to have the system ready to launch on the week of November 12.

## Requirements

- Build a system to receive donations on our VEYM.net website
  - Show info about the charity
  - Show a progress bar towards the goal
  - Show a list of donors
- Accept Credit Card, Zelle, Check
- Send email receipts

## Processes

Established processes

- Utilize Stripe, variable price product for donations
- Payment methods
  - Credit Card
    - easy, directly in stripe, automated
    - add a checkmark for the user to cover the processing fee (add 3% to the amount)
  - Zelle, Check
    - show the donation as "Pledged"
    - when donation is received, Anh Lap will mark it and it will reflect as received on the site

--- 

## Technical Solution

### Backend

- Create collections for `giving_tuesday_campaigns` and `giving_tuesday_donations` in Directus 
  - relate donations to campaigns

### Frontend

- Create pages for each Giving Tuesday Campaign
  - Pull data and display on page
    - page content
    - donations list
      - filter out donations that are of type `card` and `received` = `false` (these are from failed/abandoned checkout sessions)
      - `chapters` and `leagues` lists to populate form inputs
  - Show progress bar with multiple segments
    - by default, ChakraUI `Progress` component does not support multiple segments
      - extend the component in ChakraUI theme to add the functionality [Source](https://codesandbox.io/p/sandbox/chakra-ui-theme-extension-w5u2n?file=%2Fsrc%2Fcomponents%2FChakraNestedProvider%2Findex.js)
    - calculate received and pledged amounts
  - Form to input info and amount
    - `react-hook-form`
  - Dynamic OG image
    - Show the current amount and progress bar in the OG image
    - `@vercel/og`
- **Stripe Payment functionality**
  - Create product `Giving Tuesday Donation` with variable pricing in Stripe dashboard
  - Create Next.js API routes on Main Website
    - Create Stripe Checkout session
      - referenced this [video](https://www.youtube.com/watch?v=1-olKBnmC84)
      - set submit button text to "Donate"
      - add `line_item` with a new `price_data` object with the inputted price
      - add `donationId` to session metadata to reference later
  - Handle checkout completed webhook
    - test locally using Stripe CLI to forward webhook to localhost
    - find the respective donation in Directus from the `donationId` in the metadata and update `received` field
    - send email receipt
    - send Discord notification
  - Created basic Success page to redirect to after checkout
- **Email Receipts**
  - Signed up for [Resend](https://resend.com/)
  - set up with `mailer.veym.net` subdomain
  - Free tier with 3000 emails/month, 100 emails/day should be sufficient
  - Created an email template using [React Email](https://react.email/)
  - very easy to use

### **Deployment**

- Create product in Stripe prod
- Create Stripe Webhook in prod and dev, point to live site
  - send `checkout` events
- Add env vars to Vercel project
  - separate set of env vars for `production` and `development`/`preview`


### **Admin UI**

- Goal - when Anh Lap receives a Check or Zelle donation, mark it as `received` and automatically send an email receipt to the donor
  - set up new repo specifically using `create-t3-app@7.37.0` 
	  - newer versions use Next.js v15, React 19, next-auth v5 which have a lot of changes
  - Install and set up dependencies
	  - shadcn UI
	  - NextAuth with Azure AD B2C
	  - Prisma schema
	  - page layouts and util functions
    - Resend email template
  - Deployment
	  - on ITApps VM
		  - clone git repo
			  - build app
			  - run with `pm2`
		  - add `nginx` conf
		  - get SSL cert with `certbot`
			  - add  `CNAME` record for subdomain, pointing to ITApps VM
		- Automatically rebuild and redeploy on push
			- set up git webhook
			- on ITApps VM
				- add configuration to `webhook-rebuilder`
	- Auth: add redirect URL to App Registration
	- CORS: add URL to allowlist in `Membership System` 
	- Run Prisma Studio to set my user as admin

## Thoughts

- The "Leeto Stack" (Next.js + Directus) allows rapid development of features
- Stripe and Resend have a great Developer Experience
  - familiarity with Stripe from VDH helped as well

PR: https://github.com/leetosc/veymv2/pull/32/files
