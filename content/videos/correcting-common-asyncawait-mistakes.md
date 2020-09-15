---
title: "Correcting Common Async/Await Mistakes"
date: 2018-10-13T14:17:50.0000000
draft: false
---

{{< vimeo 295071095 >}}

## Speaker:

 - Brandon Minnick

## Abstract:

<p>The .NET compiler turns every async method into a class that contains its own state-machine nested inside of a try/catch block. This means that our app-size increases by 100 bytes every time we create an async method, and that every async method could potentially swallow exceptions leading to unintended behavior in our apps. Oh my! Join me as we take an existing app and optimize its async code together, showing off the performance gains in exception handling, improved run-time speed, and smaller app size!</p>

## Bio:

 - 

## Recorded At:

 - Dallas Dev Fest Weekend

