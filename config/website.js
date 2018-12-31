const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Davide Bruner - Web & Mobile Developer', // Navigation and Site Title
  siteTitleAlt: 'Davide Bruner', // Alternative Site title for SEO
  siteUrl: 'https://davidebruner.netlify.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo-1024.png', // Used for SEO and manifest
  siteDescription: '',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@davide.bruner26', // Twitter Username
  ogSiteName: 'davidebruner', // Facebook Site Name
  ogLanguage: 'it', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
