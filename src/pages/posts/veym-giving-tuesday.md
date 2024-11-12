---
layout: '@/templates/BasePost.astro'
title: VEYM Giving Tuesday
description: Implementing a custom donation system for VEYM Giving Tuesday
pubDate: 2024-11-12T00:00:00Z
imgSrc: '/assets/images/posts/veym-giving-tuesday/givingTuesday.png'
imgAlt: 'givingTuesday'
---
# VEYM Giving Tuesday Custom Donation System

## Background

In previous years, VEYM’s Giving Tuesday donation campaign has relied on Facebook's payment system. However, when Facebook transitioned its payment processor to PayPal, VEYM experienced ongoing issues with unreleased funds. After almost a year without resolution, we opted to develop an in-house donation system for this year's campaign, providing us greater control and flexibility.

Our goal was to launch the new donation system on our VEYM.net website the week of November 12, which meant I only had one week to build and deploy the system.

---

## Requirements

The new donation system needed to:

1. Host donation functionality directly on the VEYM.net website.
2. Display critical information:
   - Details about the charity.
   - A progress bar tracking the donation goal.
   - A list of donors.
3. Accept multiple payment methods:
   - Credit Card
   - Zelle
   - Check
4. Send automated email receipts upon successful donation.

---

## Process Overview

Our approach divided into two main payment processing categories: automated and manual.

### Automated Payment Processing: Stripe for Credit Card Donations
Stripe was selected for handling credit card transactions due to its ease of integration, reliable processing, and flexible features. Additionally, we added an option for users to cover the processing fee, which added 3% to the donation amount if selected.

### Manual Payment Processing: Zelle and Check Donations
To accommodate Zelle and check donations, we introduced a "pledged" status. Zelle and check donations would initially appear as "pledged" on the site and be marked as "received" once the funds were confirmed. This status transition is managed manually by an admin.

---

## Technical Solution

The technical implementation was split between backend and frontend components, along with third-party integrations to streamline payment processing and notifications.

### Backend Setup

The backend relies on a custom configuration in Directus and integrates with Stripe’s API to manage the donation process seamlessly.

#### 1. Database Structure
   - We created two new collections in Directus:
     - `giving_tuesday_campaigns` for campaign-specific data.
     - `giving_tuesday_donations` for storing individual donation records, linked to the respective campaign.
   - This structure allows for flexible campaign tracking and donation management.

#### 2. API Integration with Stripe
   - The backend leverages Next.js API routes for interaction with Stripe.
   - API routes were set up to:
     - Create a checkout session.
     - Handle checkout session completion through Stripe’s webhook.

### Frontend Components

The frontend leverages React, ChakraUI, and other libraries to provide an interactive and user-friendly donation interface.

#### 1. Campaign Pages
   - Dedicated pages for each Giving Tuesday campaign pull data directly from the backend, displaying:
     - Campaign details.
     - Donation progress bar with multiple segments, a custom feature built on top of ChakraUI's default `Progress` component.
     - A dynamic list of donors.

#### 2. Donation Progress Bar
   - A multi-segmented progress bar was essential for visualizing both pledged and received donations. 
   - To achieve this, we extended the ChakraUI `Progress` component to support multiple segments, referencing [this guide on ChakraUI theme extension](https://codesandbox.io/p/sandbox/chakra-ui-theme-extension-w5u2n?file=%2Fsrc%2Fcomponents%2FChakraNestedProvider%2Findex.js).

#### 3. Donation Form
   - Built using `react-hook-form` to manage form state and validation, ensuring a smooth user experience.
   - The form accepts donation information and handles input validation for required fields and donation amounts.

#### 4. Dynamic OG Image
   - A custom Open Graph (OG) image was generated dynamically for each campaign page, allowing for better visibility and branding when shared on social media.

### Stripe Payment Integration

To facilitate credit card donations, we configured Stripe for variable pricing:

#### 1. Product Setup
   - Created a `Giving Tuesday Donation` product in Stripe’s dashboard with variable pricing to allow donors to input their own amounts.

#### 2. Checkout Session
   - Next.js API routes were established to:
     - Create a Stripe Checkout session.
     - Customize the session, including setting the button text to "Donate" and embedding the donation amount as a `line_item` with `price_data`.
     - Attach `donationId` as metadata in the session to match the donation record in Directus.

#### 3. Webhook Handling
   - A dedicated webhook handles completed checkout sessions, updating the respective donation record in Directus:
     - Marks the donation as `received`.
     - Triggers an email receipt to the donor.
     - Sends a notification to a Discord channel for real-time updates.
   - A basic "Success" page confirms successful transactions and thanks donors for their contributions.

### Email Receipts

To automatically send email receipts, we signed up for [Resend](https://resend.com/) and integrated it with the system:

#### 1. Domain Setup
   - Set up the `mailer.veym.net` subdomain for email sending.
   - Utilized Resend’s free tier, which allows up to 3000 emails/month and 100 emails/day, sufficient for the expected volume.

#### 2. Email Template
   - Developed a React-based email template using [React Email](https://react.email/), making it easy to customize and manage consistent email formatting.

### Deployment 

1. **Stripe Configuration**: Created a product and webhook endpoints for both production and development environments, set to trigger on checkout events.
2. **Environment Variables**: Configured necessary environment variables in Vercel to separate `production` and `development`/`preview` configurations.

---

## Conclusion

This in-house donation platform provides VEYM full control over donation campaigns, eliminating previous issues with third-party payment processors. By building this system, we’ve achieved a streamlined, reliable, and fully integrated solution for the Giving Tuesday campaign, with flexible backend support, intuitive frontend design, and robust Stripe integration.

The system is now live, and we’re excited to see it in action for Giving Tuesday! Moving forward, this platform serves as a foundation that VEYM can expand upon for future fundraising events.