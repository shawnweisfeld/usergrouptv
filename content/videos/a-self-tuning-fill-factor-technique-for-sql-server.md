---
title: "A Self-Tuning Fill Factor Technique for SQL Server"
date: 2019-08-20T13:38:30.0000000
draft: false
---

{{< vimeo 355358224 >}}

## Speaker:

 - Mike Byrd

## Abstract:

<p>Have you ever created an index and wondered what to specify for fill factor? Usually I’ve never ever given it a worry and just left it at the default value = 0 (actually this is a synonym for 100). But recently I’ve stumbled on a technique that will determine a “near” optimum fill factor value for every index in a database. I say “near” because it won’t always derive the perfect fill factor, but will get you close. We will look closely at the T-SQL for this technique to see how the proof of concept was developed for a very active OLTP database. I’ve observed a decrease in overall database wait times of 30% after the tuning. The tuning is continuous and allows for changes in data skew as well as evolving application interactions with the database. IMHO this is a real break-through for making your indexes perform even better. All code will be available for download.</p>

## Bio:

 - <p>Former rocket scientist and USAF Fighter Pilot -- now a SQL Server geek (24 years)! Past opportunities include free-lance technical writer for PC Magazine, Senior Software Manager for government sponsored munitions effectiveness committee, and insurance company CTO. Currently senior database engineer consultant for several Austin companies. Presenter at 17 SQL Sat sessions in 2016, 10 in 2017, 8 in 2018 (Cambridge) and Chicago, Jacksonville, Dallas, Pensacola, Austin, and Baton Rouge in 2019; as well as several local SQL Server user's groups in Ft. Worth, Austin, and San Antonio; and 2 Virtual DBA presentations in 2018.</p>

## Recorded At:

 - Capitol Area Central Texas Users of SQL Server

