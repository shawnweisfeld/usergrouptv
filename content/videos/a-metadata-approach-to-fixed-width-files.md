{
  "title": "A metadata approach to fixed width files",
  "type": "recording",
  "tags": [
    "SSIS"
  ],
  "date": "2020-02-08T16:19:15",
  "draft": false,
  "slug": "a-metadata-approach-to-fixed-width-files",
  "abstract": "<p>Face it, using SSIS to work with fixed width flat files is a pain.  The SSIS interface has you clicking around to mark each column. Then you use another interface to set each columns data types, etc.  And when you are done, you still need to document the file structure for your users.  What if you could simply document the file structure and then generate the ETL from the document? To demonstrate such an approach, I build an Excel file describing US census data that has more than 300 columns of fixed width data.  After demonstrating how this file communicates to business users, I will generate an SSIS package from that metadata using BIML Script.  Then I will also look at how you can generate a SQL Server bulk insert format file from the same metadata.  A small amount of C# code can generate quite a large extract.</p>",
  "vimeo": "390485704",
  "moreinfo": "https://www.sqlsaturday.com/939/Sessions/Details.aspx?sid=101344",
  "thumbnail": "https://i.vimeocdn.com/video/854625067_295x166.jpg",
  "speakers": [
    {
      "name": "Russel Loski",
      "slug": "russel-loski",
      "bio": "<p>Russ Loski is a SQL Server BI Developer based in Dallas, TX. Twenty years ago, he began working with SQL Server 6.5. He has since continued to develop applications connected to all of the versions of SQL Server. He has worked with clients in industries from insurance to healthcare, from movie theaters to American football.  Russ is a regular speaker at SQLSaturday events, as well as the SQL Server Users Groups in the North Texas region. Russ likes working with data in various shapes.</p>",
      "count": 9
    }
  ],
  "ugtvtags": [
    {
      "name": "SSIS",
      "slug": "ssis",
      "count": 9
    }
  ],
  "meetups": [
    {
      "name": "Austin SQL Saturday",
      "slug": "austin-sql-saturday",
      "count": 27
    },
    {
      "name": "Capitol Area Central Texas Users of SQL Server",
      "slug": "capitol-area-central-texas-users-of-sql-server",
      "count": 69
    }
  ]
}