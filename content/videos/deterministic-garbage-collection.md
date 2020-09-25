{
  "title": "Deterministic Garbage Collection",
  "type": "recording",
  "tags": [
    "C#",
    "Garbage Collection"
  ],
  "date": "2012-09-11T14:29:26",
  "draft": false,
  "slug": "deterministic-garbage-collection",
  "abstract": "<p>C++ has a bad reputation for leaking memory. While it is true many C++ programs leak memory, this is not due to the lack of support in the language--especially in C++ 11! Many languages depend up on non-deterministic garbage collection to avoid leaks. C++ on the other hand provides the, often misunderstood, RAII pattern to deterministically eliminate leaks at their source. The beautiful thing is that the RAII pattern protects not only against memory leaks, but also against resource leaks as well! In fact most languages are adopting features designed to mimic RAII to help combat their resource leaks. We will begin with an overview of RAII and its use throughout the C++ libraries. Then we will delve into how C++ 11 has provided a complete set of tools to easily avoid all leaks. Come see why in C++ 11 we never say delete, and--more surprisingly--we even never say new!</p>",
  "vimeo": "104884671",
  "moreinfo": "http://www.dfwcpp.com/",
  "thumbnail": "https://i.vimeocdn.com/video/487540835_295x166.jpg",
  "speakers": [
    {
      "name": "Mike Naquin",
      "slug": "mike-naquin",
      "bio": "",
      "count": 1
    }
  ],
  "ugtvtags": [
    {
      "name": "C#",
      "slug": "c",
      "count": 13
    },
    {
      "name": "Garbage Collection",
      "slug": "garbage-collection",
      "count": 1
    }
  ],
  "meetups": [
    {
      "name": "DFW C++ User Group",
      "slug": "dfw-c-user-group",
      "count": 2
    }
  ]
}