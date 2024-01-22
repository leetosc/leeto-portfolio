---
layout: '@/templates/BasePost.astro'
title: Migrating VEYM Library to T3 Stack
description: Steps taken to migrate the VEYM Library app to our version of the T3 stack.
pubDate: 2024-01-15T00:00:00Z
imgSrc: '/assets/images/posts/migrating-library-t3/librarymigration.png'
imgAlt: 'migration'
---

## Motivation

Migrating the Library app to the T3 stack will enable smoother development for the planned features involving user login and submissions, and proxying requests between the frontend and the Directus backend.  The strict type safety in the config will also encourage more resilient code, improve the dev experience, and prevent runtime errors.

## Goals

- start up a new t3 app
- add dependencies and packages like ChakraUI
- set up auth (NextAuth)
- copy over existing pages from old library repo

## Create Repo

https://create.t3.gg/en/installation

```bash
pnpm create t3-app@latest
```

side note - using `pnpm` package manager https://pnpm.io/next/installation

## Install dependencies

Look at `package.json` in existing repo

Install dependencies that we think we will use - can add more later as we need

```bash
pnpm add @chakra-ui/icons @chakra-ui/next-js @chakra-ui/react @directus/sdk@10 @emotion/react @emotion/styled @nikolovlazar/chakra-ui-prose axios date-fns date-fns-tz html-react-parser html-to-text next-plausible next-seo parameterize plaiceholder react-hook-form react-icons react-lite-youtube-embed react-scroll-up unist-util-visit
```

## Copy over config and layout files

Copy over old ChakraUI files needed to new repo
- Chakra theme folder 
- utils
- layout components
  - recreate the stuff in `_app.tsx`

## Set up Auth

Copied over the next-auth config from veym-biz-directory

- uses `azure-ad-b2c` provider, using jwt 
- has logic to handle token refresh

### Environment Variables

- defined in `env.js`
- copied over from existing project

### Azure AD App Registration

In Azure Portal add the callback URL to the `MembershipTest2` App Registration
- will take an hour or so for the changes to propagate

## Copy over existing pages

- songs
- games
- lesson resources
- navbar
  - commented out a lot of logic, will re-add later
    - nested pages

Ignored and quick-patched a lot of typescript errors. Will need to add true fixes and refactor a lot of it later.

## Directus types generation
Add a custom extension to Directus instance on ITApps VM to auto-generate a typescript types definition file for the directus schema
- ssh into ITApps VM
- update `docker-compose.yml` for this directus instance to mount the extensions directory from the host machine
- copy the extensions directory from another directus instance that already has the extension
  - use `chown` to make sure the user has access
- restart the directus instance

Note: whenever changes are made to the Directus schema (adding collections, fields, etc), the types file will need to be regenerated and copied into the repo.

## Deploy to Vercel
- set up new github repo: https://github.com/veym-it/veym-library-t3
- invite collaborators
- create new vercel project
  - add env vars
- update DNS records for `veym.app` domain - Google Domains

## Random fixes
- parseHtml
  - issue with domhandler v5
  - fixed with `pnpm i domhandler@^4`
- next.js v14 bug - call stack exceeded in vercel build
  - build works locally 🤷‍♀️
  - downgraded to `v13` and it works

## Development tips

#### Flow of doing stuff
- create a procedure 
  - in a router
  - add the inputs and types
    - `publicProcedure` or `privateProcedure`
      - additional procedure types such as `adminProcedure` can be added in the future
  - use directus SDK to interact with directus 
    - https://docs.directus.io/reference/old-sdk.html
      - note: we are using the `v10` version of the sdk. They rewrote it for `v11` with a completely different interface
  - you have access to the user (if any) in the `ctx` object
    - can derive user info without having to pass it in as an input
- call the procedure in the frontend
  - import from `api`
  - uses the same interface as react-query
    - `useQuery` for getting data
    - `useMutation` for sending something to the server

#### Color mode
shortcut to change color mode: `Ctrl/Cmd` + `K`

#### Auth
check for logged in using the useSession hook from next-auth
```ts
  const {
    data: sessionData,
    status: sessionStatus,
    update: updateSession,
  } = useSession();
  const isLoggedIn = sessionStatus === "authenticated"; // shortcut
```
can check `isLoggedIn` variable to conditionally do/show stuff if the user is logged in

