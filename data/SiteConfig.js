module.exports = {
  blogPostDir: "sample-posts", // The name of directory that contains your posts.
  blogAuthorDir: "sample-authors", // The name of directory that contains your authors.
  blogAuthorId: "david", // The default and fallback author ID used for blog posts without a defined author.
  siteTitle: "David Berget", // Site title.
  siteTitleAlt: "David Berget Portfolio & Blog", // Alternative site title for SEO.
  siteUrl: "https://davidberget.com", // Domain of your website without pathPrefix.
  siteDescription: "Web Developer - React | Elixir", // Website description used for RSS feeds/meta description tag.
  siteCover: "/images/familypic.jpg", // Optional, the cover image used in header for home page. e.g: "/images/blog-cover.jpg",
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssAuthor: "David Berget", // The author name used in the RSS file
  // siteFBAppID: "1825356251115265", // optional, sets the FB Application ID for using app insights
  sitePaginationLimit: 10, // The max number of posts per page.
  googleAnalyticsID: "UA-111982167-1", // GA tracking ID.
  siteSocialUrls: [
    "https://github.com/dberget",
    "https://twitter.com/dberget",
    "mailto:davidberget@gmail.com"
  ],
  postDefaultCategoryID: "Tech", // Default category for posts.
  // Links to social profiles/projects you want to display in the navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/dberget",
      iconClassName: "fa fa-github" // Disabled, see Navigation.jsx
    },
    {
      label: "Twitter",
      url: "https://twitter.com/dberget",
      iconClassName: "fa fa-twitter" // Disabled, see Navigation.jsx
    },
    {
      label: "Email",
      url: "mailto:davidberget@gmail.com",
      iconClassName: "fa fa-envelope" // Disabled, see Navigation.jsx
    }
  ],
  // Copyright string for the footer of the website and RSS feed.
  copyright: {
    label: "David Berget" // Label used before the year
    // year: "2018" // optional, set specific copyright year or range of years, defaults to current year
    // url: "https://www.gatsbyjs.org/" // optional, set link address of copyright, defaults to site root
  },
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  promoteGatsby: true // Enables the GatsbyJS promotion information in footer.
}
