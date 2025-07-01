---
title: "Building a Minimalist Browser Extension in 48 Hours"
description: "How I built and shipped a cross-browser extension in a weekend—with lessons learned and regrets included."
authors: "Tariq Benz"
date: 2025-06-10
tags: ["JavaScript", "Extensions", "Weekend Project", "DevLog"]
image: "/images/blog/browser-extension-build.jpg"
---

Sometimes you just need to ship something. That’s what this weekend was about.

I built a simple browser extension that lets you focus a text input with one keystroke—no mouse. It was born out of frustration and finished with a bit of stubbornness and too much coffee.

### The Stack

I used plain JavaScript, no frameworks. Why? I wanted maximum compatibility with Chrome, Firefox, and Edge. Also, I didn’t want to deal with bundlers or weird build pipelines.

### Manifest V3 Hell

Google’s new Manifest V3 forced me to rethink how background scripts work. Service workers are different beasts, and debugging them was... fun (read: not fun).

### Publishing Was a Battle

The Chrome Web Store review process was surprisingly slow. Firefox’s was much smoother. Edge, weirdly, gave me the least trouble.

### Lessons Learned

- Keep your scope small. Really small.
- Write your README before your code. It’ll save you from scope creep.
- Test early, test often, test in all browsers.

### Would I Do It Again?

100%. Even if nobody downloads it, I learned more in 48 hours than in some full week sprints.

Sometimes building is the reward.
