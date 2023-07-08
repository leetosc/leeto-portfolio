---
layout: '@/templates/BasePost.astro'
title: Deploying Docs Helper to ITApps VM
description: Steps taken to self-host a Next.js app.
pubDate: 2023-07-05T00:00:00Z
imgSrc: '/assets/images/image-post8.jpeg'
imgAlt: 'computer'
---

Deploy a Next.js application to the VM, run it as a service, and automatically build and redeploy on pushes to the repo.

This document outlines the steps taken to deploy the HT Docs Helper application on the ITApps Virtual Machine (VM). This can serve as a future reference for similar deployments.

## Initial Setup

1. Clone the Repository: First, clone the required repository to your local system.
2. Install Dependencies: Next, install dependencies with yarn.
3. Set Environment Variables: Copy over the required environment variables. One key variable to update is NEXTAUTH_URL, which is used for the NextAuth.js library to handle authentication.

## Database Initialization

Initialize the Database: Use Prisma's database push command to initialize your database. The command is

```bash
yarn prisma db push
```

## Azure Portal Configuration

Set Up B2C Auth Redirect URL: In the Azure portal, go to your B2C tenant. Set up your B2C Auth Redirect URL. It should look something like https://docs-helper.veym.app/api/auth/callback/azure-ad-b2c.

## DNS Setup

Configure DNS: In Google Domains, go to the veym.app domain and set up a CNAME record for docs-helper pointing to `itapps.westus.cloudapp.azure.com`

## Building and Running the Application

1. Build the Application: Use the build command, yarn build, to compile your application.
2. Upgrade Node Version: It might be necessary to upgrade the Node.js version for the root user from v14 to v16, depending on the requirements of the application.
3. Run as a Service with PM2: Use the PM2 process manager to run your application as a service. The command is 

```bash
pm2 start yarn --name docs-helper -- start --port=8585.
```

## NGINX Configuration

1. Create NGINX Configuration: Create an NGINX configuration file for your application at /etc/nginx/sites-available/docs-helper. This file should include a server block for your application.

2. Create Symlink: Create a symbolic link from your configuration file to the sites-enabled directory with 

```bash
sudo ln -s /etc/nginx/sites-available/docs-helper /etc/nginx/sites-enabled
```

3. Generate SSL Certificates: Use Certbot to generate SSL certificates for your domain with 

```bash
sudo certbot 
```

nginx config

```nginx
server {
    server_name docs-helper.veym.app;

    location / {
      proxy_pass http://localhost:8585/;

      proxy_http_version 1.1;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection 'upgrade';
      proxy_set_header Host $host;
      proxy_cache_bypass $http_upgrade;

}

    client_max_body_size 900M;

}
```


## Other Configurations

1. Configure CORS: Add https://docs-helper.veym.app to the CORS list in the membership system to allow fetching profile information.

2. Setup Reverse Proxy for Prisma Studio: Set up a reverse proxy for the Prisma Studio port 5555. This involves setting up an NGINX server block, generating an SSL certificate, and configuring DNS.

3. Run Prisma Studio with No Browser: Run the Prisma Studio using the command 

```bash
yarn prisma studio --browser none
```

4. Webhook Rebuilder Repository: Create a new repository for the webhook rebuilder. Update scripts for docs-helper and clone the repo onto the ITApps VM.

5. Set Up Reverse Proxy for Webhook Rebuilder: Set up a reverse proxy for the webhook-rebuilder-docs-helper. This involves setting up an NGINX server block, generating an SSL certificate, and configuring DNS.

6. Run Webhook Rebuilder with PM2: Use the PM2 process manager to run your webhook rebuilder as a service. The command is 

```bash
pm2 start index.js --name webhook-rebuilder-docs-helper
```

7. Set Up Github Webhook: Set up a Github webhook in the `ht-docs-helper` repo. Get the hardcoded secret from the webhook code and send it on the push event.

8. Baseline an Existing Production Database: Follow Prisma's guide on baselining an existing production database: https://pris.ly/d/migrate-baseline


By following these steps, you should be able to successfully deploy the HT Docs Helper application on the ITApps VM.
