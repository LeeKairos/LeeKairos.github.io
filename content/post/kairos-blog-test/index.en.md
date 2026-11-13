---
title: "Test Post: Kairos Lab Blog Is Live"
description: "The first test post for this Hugo + Stack blog, checking that typography, code blocks, table of contents, and the cover image all render correctly."
slug: "kairos-blog-test"
date: 2026-11-13T12:00:00+08:00
image: "cover.jpg"
categories:
  - "From Collecting to a Second Brain"
tags:
  - "Knowledge Management"
  - "Hugo"
  - "Testing"
draft: false
---

Welcome to the new Kairos Lab blog. This is the first test post, here to check that Hugo + Stack renders everything properly: headings, table of contents, code blocks, the cover image, word count, and estimated reading time.

If you can see this post, the blog is live.

## Why Hugo + Stack

Hugo is a static site generator written in Go, and its biggest strength is speed: even a thousand posts build in seconds. It needs no database and no server — push the Markdown and it becomes a website.

Stack is a card-style Hugo theme made for blogging, and it ships with:

- Responsive layout that looks good on phones and computers
- A dark-mode toggle in the top right
- Local search, archives, categories, and tags
- Table of contents, reading time, and related-post recommendations

## Previewing locally and publishing

When writing locally, start the preview server first — save a change and it shows up in the browser right away:

```bash
# Start the local preview (-D shows drafts too)
hugo server -D

# Open http://localhost:1313
```

Once it looks right, push to GitHub and Actions builds and publishes it automatically:

```bash
git add content/post/kairos-blog-test.md
git commit -m "Publish test post"
git push origin main
```

## What a post's front matter looks like

Every post starts with front matter — the title, date, categories, and tags:

```yaml
---
title: "I Saved 1,000 Articles — Why Can't I Use a Single One?"
date: 2026-11-14
categories: ["From Collecting to a Second Brain"]
tags: ["Knowledge Management", "Collecting", "Inbox"]
draft: false
---
```

A post with `draft: true` is a draft and won't be published; set it to `false` and it appears on the site.

## What's coming next

The first real post is already written: "I Saved 1,000 Articles — Why Can't I Use a Single One?", built on my own numbers: 621 notes, 337 sitting in the Inbox, and only 16 in the knowledge base.

Once this test post confirms the layout is fine, Episode 1 goes out. Stay tuned.
