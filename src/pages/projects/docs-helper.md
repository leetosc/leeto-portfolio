---
layout: '@/templates/BasePost.astro'
title: HT Docs Helper
description: AI Assistant that can answer questions about VEYM documents
pubDate: 2023-07-06T00:00:00Z
imgSrc: '/assets/images/projectIcons/docsHelper.png'
imgAlt: 'docs helper'
---


HT Docs Helper is an AI assistant that can answer questions about VEYM documents. The frontend is built with Next.js, ChakraUI and tRPC.  It is powered by Anthropic's Claude AI, and is self-hosted on the VEYM ITApps VM in Azure.


![docs helper](/assets/images/posts/screenshot-docshelper1.png 'Docs Helper')
<figcaption align="center">Docs Helper</figcaption>

## Notes

One of the limitations of AI is the length of the context window, which makes it hard to give it specific knowledge like long documents. One way around that is to use embeddings, but I have found the resulting answers to be hit or miss. Claude has a 100k token limit which allows the full text of the various documents to be included in the prompt. This allows the AI to have a better understanding of the context and the answers it has been providing have been pretty much spot on. 