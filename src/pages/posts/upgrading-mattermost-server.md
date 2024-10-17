---
layout: '@/templates/BasePost.astro'
title: Upgrading Mattermost Server
description: Migrating from Mattermost v5 to v9
pubDate: 2024-10-05T00:00:00Z
imgSrc: '/assets/images/posts/upgrading-mattermost-server/upgrading.png'
imgAlt: 'serverUpdate'
---

## Background

In September 2022, Slack changed its free-tier policy, limiting message history to just 90 days. This presented a challenge for my family because we relied on Slack to communicate, store important documents, and retain our chat history. With three of us being engineers, Slack had been a natural choice, but this new limitation meant we were about to lose access to a lot of historical information.

After researching free and self-hosted alternatives, I found Mattermost to be a great solution. It had all the features we needed, including a user-friendly interface. I already had an ARM VM running on Oracle Cloud with enough resources to host the server. However, since it was an ARM machine, I couldn't use the official Docker images.

Following this [guide](https://minecraftchest1.wordpress.com/2021/03/15/installing-mattermost-raspberrypi4/), I installed `v5.32.1` directly on the machine, and it worked. I successfully exported all our Slack data and imported it into Mattermost using this [guide](https://docs.mattermost.com/onboard/migrate-from-slack.html). Our new setup ran smoothly for a while, but as Mattermost updated to versions 7, 8, and 9, a popup started appearing on the mobile app asking to upgrade the server version every time it started up. Dismissing the popup wasn’t a big deal, but it became a small annoyance. Attempts to upgrade the server failed multiple times, so I accepted the popup as part of the experience.

In September 2024, I came across the `mattermost-docker-arm` [repo](https://github.com/remiheens/mattermost-docker-arm), which offered Docker images for ARM up to version 9. This was exactly what I needed to upgrade.

---

## The Upgrade Process

### Setting Up the New Instance

Rather than trying to upgrade the existing Mattermost instance, I decided to set up a completely new one using the ARM Docker image and migrate the data through a full export and import. Here's a high-level overview of the steps I took:

1. **Cloning the Repo**: 
   I cloned the [mattermost-docker-arm repo](https://github.com/remiheens/mattermost-docker-arm) to get started.

2. **Editing the Docker Compose File**: 
   In the `docker-compose.yml` file, I added the `ports` field to make sure the container was accessible.

3. **Running the Container**: 
   After making the necessary changes, I ran the container, and the new Mattermost instance was up and running.

### Exporting Data from the Old Instance

To transfer our data, I used Mattermost’s command-line tool, `mmctl`, which I had already installed during a previous upgrade attempt. Here's what I did:

1. **Logging into the Old Instance**: 
   I authenticated into the old Mattermost instance to generate an export file. This included our chat history and attachments.
   
```bash
./mmctl auth login https://mattermost.nguyen.casa --name Family --username denny --password-file passwordfile.txt
```

2. **Creating the Export**: I created the export, ensuring that attachments were included (though in newer versions, this step is handled automatically).

```bash
./mmctl export create --attachments
```


Since the export file was quite large (~8 GB), I had to manually copy it from the server’s export directory at `/opt/mattermost/mattermost/data/export`.

### Importing Data into the New Instance
The latest version of `mmctl` included a `--local` option, making it easier to import large files directly from the server. I `docker exec` into the new Mattermost container and made some adjustments:

1. **Editing `config.json`**: To enable local mode for `mmctl`, I had to modify the config.json file in the new instance.

2. **Processing the Import**: Since the export file was too large to upload normally, I used the `--bypass-upload` option to process the import locally:
```bash
./mmctl import process --bypass-upload <file>.zip --local
```

### Troubleshooting Import Issues
The import job failed initially due to some issues with the exported data. Here’s how I fixed it:

1. **Extracting and Editing the Data**: I manually extracted the .zip file and edited the `jsonl` file. One post had an invalid type, and several posts were too long, which caused validation errors. I used `vim` to delete the problematic lines.

2. **Validating the Import**: After making those corrections, I used the following command to validate the file and ensure everything was in order:
```bash
./mmctl import validate
```
Once validated, the import was successful.

### Final Configuration
Once the server was up and running, there were a few more steps to complete the migration:

1. **Updating Nginx**: I updated the nginx configuration to point to the new Mattermost instance.

2. **Recreating Webhook Endpoints**: The webhook endpoints didn’t get transferred during the export, so I recreated them and updated the apps that used those endpoints.

3. **Setting Up SMTP for Password Resets**: All users needed to reset their passwords to log into the new instance. I had been using my personal Outlook account for SMTP, but Microsoft had disabled Basic Auth, causing the email sending to fail.
    -  To fix this, I set up a Mailgun account and configured SMTP using the `nguyen.casa` domain. In hindsight, I should have done this earlier for all of my apps that utilize SMTP, but the Outlook setup had worked until now.

---

## Conclusion
After setting up the latest version of Mattermost and completing the migration, we now have a robust, self-hosted communication system without any upgrade popups or disruptions. This process helped me refine my skills in managing self-hosted solutions, troubleshooting server configurations, and handling large-scale data migrations. The Mailgun SMTP setup has also improved the reliability of email services for my other projects.

In the end, I’m glad to have found a solid solution that meets my family's needs while giving me an opportunity to apply and grow my technical expertise.


---

### Update: fix YouTube thumbnails
YouTube recently made changes that made it harder to get video info. This is probably similar to the issue that I had with the Summarizer app. A [fix](https://github.com/mattermost/mattermost/issues/16429#issuecomment-2402988443) was implemented in mattermost `v9.11.3`. 

I created an [issue](https://github.com/remiheens/mattermost-docker-arm/issues/68) in the `mattermost-docker-arm` repo for the maintainer to update the image and generate a new release. After pulling the latest image, the thumbnails are now working again.