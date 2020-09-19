{
  "title": "Correcting Common Async/Await Mistakes",
  "type": "recording",
  "tags": [
    "async"
  ],
  "date": "2018-10-13T14:17:50",
  "draft": false,
  "slug": "correcting-common-asyncawait-mistakes",
  "abstract": "<p>The .NET compiler turns every async method into a class that contains its own state-machine nested inside of a try/catch block. This means that our app-size increases by 100 bytes every time we create an async method, and that every async method could potentially swallow exceptions leading to unintended behavior in our apps. Oh my! Join me as we take an existing app and optimize its async code together, showing off the performance gains in exception handling, improved run-time speed, and smaller app size!</p>",
  "vimeo": "295071095",
  "moreinfo": "https://www.devfestweekend.com/schedule",
  "thumbnail": "https://i.vimeocdn.com/video/732131006_295x166.jpg",
  "speakers": [
    {
      "name": "Brandon Minnick",
      "slug": "brandon-minnick",
      "bio": "",
      "count": 1
    }
  ],
  "ugtvtags": [
    {
      "name": "async",
      "slug": "async",
      "count": 5
    }
  ],
  "meetups": [
    {
      "name": "Dallas Dev Fest Weekend",
      "slug": "dallas-dev-fest-weekend",
      "count": 12
    }
  ]
}