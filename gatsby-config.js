/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	siteMetadata : {
		title           : "Lawrence Eagles",
		description     : "Lawrence Eagles WebDev Portfolio Site",
		author          : "@eagles",
		twitterUsername : "@lawrence_eagles",
		image           : "/twitter-img.png",
		siteUrl         : "https://testing-strapi-gatsby-build.netlify.app",
	},
	plugins      : [
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sitemap`,
		{
			resolve : `gatsby-source-filesystem`,
			options : {
				name : `assets`,
				path : `${__dirname}/src/assets/`,
			},
		},
		{
			resolve : `gatsby-source-strapi`,
			options : {
				apiURL       : `http://localhost:1337`,
				queryLimit   : 1000, // Default to 100
				contentTypes : [ `jobs`, `projects`, `blogs` ],
				singleTypes  : [ `about` ],
				// Possibility to login with a strapi user, when content types are not publically available (optional).
				// loginData    : {
				// 	identifier : "",
				// 	password   : "",
				// },
			},
		},

		{
			resolve : `gatsby-plugin-prefetch-google-fonts`,
			options : {
				fonts : [
					{
						family   : `Roboto`,
						variants : [ `400`, `700` ],
					},
					{
						family : `Open Sans`,
					},
				],
			},
		},
	],
};
