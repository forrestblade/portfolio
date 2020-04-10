/**
 *  Instructions
 *
 *  1. Delete the `index.js` file in this directory
 *  2. Rename/Copy this file to `index.js`
 *  3. Update the fields with your entries
 */

module.exports = {
    name: 'Forrest Blade',
    email: 'forrestblade.code@gmail.com',
    username: '@forrestblade',

    siteTitle: 'Forrest Blade',
    siteDescription: 'Minimal web solutions people love',
    siteKeywords: 'portfolio, website, development, web, growth',
    siteUrl: 'https://forrestblade.app',
    siteLanguage: 'en-US',

    // path to assets
    siteThumbnail: '/images/',
    siteIcon192: '/icons/',
    siteIcon72: '/icons/',
    siteIcon96: '/icons/',
    siteFavicon: '/icons/favicon.png',

    GRID_LIMIT: 3,

    // path to resume file (eg: if file is in `/public/resume.pdf` set `/resume.pdf` here)
    resume: '/resume.pdf',

    //  The entries here are optional, removes ones that you don't have
    socialMedia: [
        {
            name: 'Github',
            icon: 'github',
            url: 'https://github.com/forrestblade',
        },
        {
            name: 'LinkedIn',
            icon: 'linkedin',
            url: 'https://in.linkedin.com/in/forrestblade',
        },
        {
            name: 'Twitter',
            icon: 'twitter',
            url: 'https://twitter.com/codecoffeedoggo',
        },
    ],

    navLinks: [
        {
            name: 'About',
            url: '#about',
        },
        {
            name: 'Experience',
            url: '#experience',
        },
        {
            name: 'Work',
            url: '#projects',
        },
        {
            name: 'Contact',
            url: '#contact',
        },
    ],

    navyColor: '#538F68'
};
